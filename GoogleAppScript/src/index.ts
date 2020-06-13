import { doGet } from "./do-get"

declare const global: {
  [x: string]: any ;
}

global.doGet = function(e: any) {
  return doGet(e)
}