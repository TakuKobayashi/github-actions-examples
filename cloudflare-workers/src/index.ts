import { KVNamespace, D1Database } from '@cloudflare/workers-types';
import { Context, Hono } from 'hono';

type Bindings = {
  DB: D1Database;
  KV: KVNamespace;
};

const app = new Hono<{ Bindings: Bindings }>();

app.get('/', (c: Context) => {
  return c.text('Hello Hono!');
});

app.get('/json', (c) => {
  return c.json({ hello: 'Hono JSON' });
});

app.get('/kv/getsample', async (c: Context) => {
  const kv = c.env.KV;
  const kvList = await kv.list();
  return c.json(kvList);
});

app.get('/kv/putsample', async (c: Context) => {
  const kv = c.env.KV;
  const key = Math.random().toString(32).substring(2);
  const value = Math.random().toString(32).substring(2);
  await kv.put(key, value);
  return c.json({ key: key, value: value });
});

app.get('/db/queryping', async (c: Context) => {
  try {
    const results = await c.env.DB.prepare('SELECT 1').all();
    return c.json(results);
  } catch (e: any) {
    return c.json({ err: e.message }, 500);
  }
});

export default app
