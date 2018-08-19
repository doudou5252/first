//ajax请求函数
//返回值是一个promise对象(异步返回的是数据)
import axios from 'axios'

export default function ajax(url, data = {}, type = 'get') {
  return new Promise((resolve, reject) => {
    let promise;
    if (type === 'GET') {
      //准备 url query参数数据
      let dataStr = ''//数据拼接字符串
      Object.keys(data).forEach(key => {
        dataStr += key + '=' + data[key] + '&'
      })
      if (dataStr !== '') {
        dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'))
        url = url + '?' + dataStr
      }
      promise = axios.get(url)
    } else {
      promise = axios.post(url, data)
    }
    promise.then((response)=>{
      resolve(response.data)
    }).catch((error)=>{
      reject(error)
    })
  })
}
// let promise
// if (type === 'GET') {
//   //准备 url query参数数据
//   let dataStr = ''//数据拼接字符串
//   Object.keys(data).forEach(key => {
//     dataStr += key + '=' + data[key] + '&'
//   })
//   if (dataStr !== '') {
//     dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'))
//     url = url + '?' + dataStr
//   }
//   promise = axios.get(url)
// } else {
//   promise = axios.post(url, data)
// }
// return promise
// }
