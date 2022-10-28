
import { defineComponent, onMounted, reactive } from 'vue'
const lllegalData = defineComponent({
  name: 'LllegalData',
  setup() {
    const className = 'radarCharts'
    const width = '100%'
    const height = '100%'
    const datavaule = [900, 1600, 300, 1200, 300]
    const indicator = reactive([
      { name: '现有确诊', max: 1700 },
      { name: '累计确诊', max: 1700 },
      { name: '境外输入', max: 1700 },
      { name: '累计治愈', max: 1700 },
      { name: '无症状感染者', max: 1700 }
    ])
    const option = {
      title: {
        text: '',
        top: '30%',
        left: '1%',
        textStyle: {
          color: '#fff',
          fontSize: '18'
        }
      },
      radar: {
        // shape: 'circle',
        indicator: indicator,
        axisName: {
          color: '#fff',
          fontSize: '18',
          borderRadius: 3,
          padding: [3, 5],
          formatter: (value: string) => {
            return '「' + value + '」'
          }
        },
        splitLine: {
          lineStyle: {
            width: 1,
            color: [
              'rgba(0,206,209, 0.1)',
              'rgba(0,206,209, 0.2)',
              'rgba(0,206,209, 0.3)',
              'rgba(0,206,209, 0.4)',
              'rgba(0,206,209, 0.5)',
              'rgba(0,206,209, 0.6)'
            ].reverse()
          }
        },
        splitArea: {
          areaStyle: {
            color: [
              'rgba(0,255,255, 0.1)',
              'rgba(0,255,255, 0.2)',
              'rgba(0,255,255, 0.3)',
              'rgba(0,255,255, 0.4)',
              'rgba(0,255,255, 0.5)',
              'rgba(0,255,255, 0.6)'
            ].reverse(),
            shadowColor: 'rgba(0, 0, 0, 1)',
            shadowBlur: 30,
            shadowOffsetX: 10,
            shadowOffsetY: 10
          }
        },
        axisLine: {
          //指向外圈文本的分隔线样式
          lineStyle: {
            color: 'rgba(0,0,0,0)'
          }
        }
      },
      series: [
        {
          type: 'radar',
          areaStyle: {
            color: 'rgba(255,237,145, 0.5)'
          },
          itemStyle: {
            color: 'rgba(255,237,145,0.8)',
            borderColor: 'rgba(255,237,145,0.2)',
            borderWidth: 10
          },
          lineStyle: {
            color: 'rgba(255,237,145, 0.6)',
            width: 2
          },
          label: {
            show: true
          },
          data: [
            {
              value: datavaule
            }
          ]
        }
      ]
    }
    return () => (
      <div class="borderOne">
        <echarts className={className} width={width} height={height} options={option}></echarts>
      </div>
    )
  }
})
export default lllegalData
