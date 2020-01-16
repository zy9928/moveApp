/**
 * @desc 封装fetch请求
 * @author 孙如意
 */

import 'whatwg-fetch'

export default class Http{

  static async request(method, url, data){
    //判断请求的类型
    let response = ''
    if (method === 'GET') {
      const params = this.objToString(data)
      response = await fetch(`${url}?${params}`)
    }
    else if (method === 'POST') {
      response = await fetch(`${url}`,{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
    }
    // 判断是否成功
    return this.isSuccess(response);
  };

  // 将对象参数转换为字符串参数
  static objToString(obj) {
    if(!obj ) {
        return "";
    } else {
        var arr = [];
        for(var key in obj) {
            arr.push(key + "=" + obj[key]);
        }
        return arr.join("&");
    } 
	}

  // 判断响应结果是否成功
  static isSuccess(res){
    if(res.status >= 200 && res.status < 300){
      return res;
    }else{
      this.requestExpection(res);
    }
  };

  // 构建失败对象
  static requestExpection(res){
    throw new Error(res);
  };

  // get便捷方法
  static get(url, data){
    return this.request('GET', url, data);
  };

  // post便捷方法
  static post(url, data){
    return this.request('POST', url, data);
  }
}





// import Api from './api';
// import axios from 'axios';

// export default class Http{

//   static async request(method, url, data){
//     // 发送请求
//     const response = await axios.request({
//       method,
//       url,
//       params: method === 'GET' ? data : null,
//       data: method === 'POST' ? data : '',
//       withCredentials: true
//     });
//     // 判断是否成功
//     return this.isSuccess(response);
//   };

//   // 判断响应结果是否成功
//   static isSuccess(res){
//     if(res.status >= 200 && res.status < 300){
//       return res;
//     }else{
//       this.requestExpection(res);
//     }
//   };

//   // 构建失败对象
//   static requestExpection(res){
//     throw new Error(res);
//   };

//   // get便捷方法
//   static get(url, data){
//     return this.request('GET', url, data);
//   };

//   // post便捷方法
//   static post(url, data){
//     return this.request('POST', url, data);
//   }

// }
