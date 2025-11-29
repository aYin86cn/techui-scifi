import { fetchLocl } from "./request"
export const httpGetMap = (url,params) => { return fetchLocl("get",url+params)}
//export const apiUser = (parmas) => { return http("post", "/mock/user", parmas) };