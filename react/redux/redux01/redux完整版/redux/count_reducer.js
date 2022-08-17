// reducer的本质是一个函数
// 会有两个参数分别是：之前的状态（preState），动作对象（action）
// 引入规范代码
import {JIA,JIAN} from './constant'

export default function countReducer(preState,action){
    if(preState===undefined) preState=0
    console.log(preState)
  // 从action对象中获取type,data
  const {type,data} =action

  switch(type){
    case  JIA :  //加
        return preState + data;
    case  JIAN :  //减
        return preState -data;
   default:
    return preState


  }
}