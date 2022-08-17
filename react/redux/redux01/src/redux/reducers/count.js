// reducer的本质是一个函数
// 会有两个参数分别是：之前的状态（preState），动作对象（action）
// 引入规范代码
import {JIA,JIAN} from '../constant'

export default function countReducer(preState,action){
    if(preState===undefined) preState=0
  // 从action对象中获取type,data
  const {type,data} =action

  switch(type){
    case  JIA :  return preState + data;//加
    case  JIAN : return preState -data; //减
    default: return preState  //用于初始化
  }
}