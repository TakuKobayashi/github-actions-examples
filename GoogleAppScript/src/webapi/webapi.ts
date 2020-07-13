import { doGet } from './do-get';
import { doPost } from './do-post';

// プロパティが無いと言われるのを防ぐ程度の型定義
declare const global: {
  [x: string]: any;
};

global.doGet = function (e: any) {
  return doGet(e);
};

global.doPost = function (e: any) {
  return doPost(e);
};
