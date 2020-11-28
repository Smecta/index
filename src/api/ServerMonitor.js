// import axios from 'axios'
import http from "../http";
//获取服务器监控列表
export const getServerList = (params) => {
  try {
    return http.get('ServerMachines/getInfoList', {
      params
    })
  } catch (e) {
    console.error(e);
  }
}