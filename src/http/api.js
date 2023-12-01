import Service from "./axios";

// 登录
export const loginApi = (data) => {
  return Service({
    url: "/api/authorizations",
    method: "post",
    data,
  });
};


// 用户信息
export const userApi = (data) => {
  return Service({
    url: "/api/user" + data,
    method: "get",
  });
};
