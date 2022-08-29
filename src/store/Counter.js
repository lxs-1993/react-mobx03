/**
 * 1: 通过observable标识状态，使状态可观察
 * 2: 通过action标识修改状态的方法，状态只有通过action方法修改后才会去通知视图更新
 */


// makeObservable: 
// 第一个参数是this，这个this指的是当前类的实例对象。 
// 第2个参数：配置对象。在这个对象中可以指定哪些是属性，哪些是状态。
import { action, makeObservable, observable } from "mobx"
   
   class CounterStore {
     constructor() {
       this.count = 0
       makeObservable(this, {
         count: observable, // 方法
         increment: action.bound,
         decrement: action.bound,
       })
     }
     increment() {
      console.log("出阿飞")
       this.count += 1
       console.log("出阿飞",  this.count)
     }
     decrement() {
       this.count -= 1
     }
   }

   export default  CounterStore
