
import { defineComponent, onMounted, ref } from 'vue'
import * as echarts from 'echarts'
import gzData from '@/assets/json/gdData.json'
import chinaData from '@/assets/json/chinaData.json'
type EChartsOption = echarts.EChartsOption
// 定义类型设置为只读
const PropsType = {
  // 图表类名
  className: {
    type: String,
    default: 'charts'
  },
  // 图表宽度
  width: {
    type: String,
    require: true
  },
  // 图表高度
  height: {
    type: String,
    require: true
  },
  // 图表数据项
  options: {
    type: Object,
    default: () => ({})
  }
}
const index = defineComponent({
  name: 'Echarts',
  props: PropsType,
  setup(props) {
    const myChart = ref<HTMLElement>() //也可以用const myChart = ref<any>();
    const myCharts = ref()
    // const { prefixCls } = toRefs(props);
    // const options=props.options
    /**
     * 初始化echart
     * @param data 数据项
     * @param clearCaching 是否清缓存
     */
    const initChart = (data?: EChartsOption, clearCaching = false) => {
      if (data || props.options) {
        myCharts.value.setOption(data || props.options, clearCaching)
      }
    }
    // mounted
    onMounted(() => {
      myCharts.value = echarts.init(myChart.value!)
      echarts.registerMap('广东', gzData as any)
      echarts.registerMap('中国', chinaData as any)
      initChart()
    })
    return () => (
      <div
        ref={myChart}
        class={props.className}
        style={{
          width: props.width,
          height: props.height
        }}
      ></div>
    )
  }
})
export default index
