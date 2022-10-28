
import type { DefineComponent } from 'vue' //用于给vue类型
import Echarts from './echarts/index'
const coms: any = {
  install(app: DefineComponent) {
    // 此处形参为main.ts文件中use()方法自动传进来的Vue实例
    app.component('Echarts', Echarts)
  }
}
export default coms
