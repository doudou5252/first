//包含n个接口请求的函数
/*1、根据经纬度获取位置详情](#1根据经纬度获取位置详情)<br/>
[2、获取食品分类列表](#2获取食品分类列表)<br/>
[3、根据经纬度获取商铺列表](#3根据经纬度获取商铺列表)<br/>
[4、根据经纬度和关键字搜索商铺列表](#4根据经纬度和关键字搜索商铺列表)<br/>
[5、获取一次性验证码](#5获取一次性验证码)<br/>
[6、用户名密码登陆](#6用户名密码登陆)<br/>
[7、发送短信验证码](#7发送短信验证码)<br/>
[8、手机号验证码登陆](#8手机号验证码登陆)<br/>
[9、根据会话获取用户信息](#9根据会话获取用户信息)<br/>
[10、用户登出](#10用户登出)<br/*/
import ajax from './ajax'
export const reqAddress=(geohash)=>ajax(`/position/${geohash}`)
export const reqFoodsTypes=()=>ajax('/index_category')
export const reqShops=(latitude,longitude)=>ajax('/shops',{longitude,latitude})
export const reqSearchShops=(geo,keyword)=>ajax('/search_shops',{geo,keyword})
export const reqCaptcha=()=>ajax('/captcha')
export const reqLogin_pwd=(name,pwd,captcha)=>ajax('/login_pwd',{name,pwd,captcha})
export const reqSendCode=(phone)=>ajax('/sendcode',phone)
export const reqLogin_sms=(phone,code)=>ajax('/login_sms',{phone,code})
export const reqUserInfo=()=>ajax('/userinfo')
export const reqLogOut=()=>ajax('/logout')
