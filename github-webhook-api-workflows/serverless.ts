import type { AWS } from '@serverless/typescript';

import { config } from 'dotenv';
const configedEnv = config();

const serverlessConfiguration: AWS = {
  // ここの名前が長すぎるとエラーになる
  service: 'github-api-workflows',
  frameworkVersion: '3',
  plugins: ['serverless-esbuild', 'serverless-offline', 'serverless-dotenv-plugin'],
  provider: {
    name: 'aws',
    runtime: 'nodejs14.x',
    region: 'ap-northeast-1',
    apiGateway: {
      minimumCompressionSize: 1024,
      shouldStartNameWithService: true,
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
      NODE_OPTIONS: '--enable-source-maps --stack-trace-limit=1000',
    },
  },
  // import the function via paths
  functions: {
    app: {
      handler: 'src/index.handler',
      events: [
        {
          http: {
            method: 'ANY',
            path: '/',
            cors: true,
          },
        },
        {
          http: {
            method: 'ANY',
            path: '/{any+}',
            cors: true,
          },
        },
      ],
    },
  },
  package: { individually: true },
  custom: {
    esbuild: {
      bundle: true,
      minify: false,
      sourcemap: true,
      exclude: ['aws-sdk'],
      target: 'node14',
      define: { 'require.resolve': undefined },
      platform: 'node',
      concurrency: 10,
    },
    dotenv: {
      path: './.env',
      include: Object.keys(configedEnv.parsed),
    },
  },
};

module.exports = serverlessConfiguration;
