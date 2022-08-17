// 引入规范代码
import {JIA,JIAN} from './constant'
// 创建action
// 同步action，action返回值是对象
export const jiaYunSuan = data => ({type:JIA,data})
export const jianYunSuan = data => ({type:JIAN,data})
// 异步action，action返回值是函数
export const jiaYiBuYunSuan = (data,time) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(jiaYunSuan(data))
    },time)
  }
}
