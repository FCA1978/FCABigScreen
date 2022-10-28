
import './contentCenter.scss'
import { defineComponent, h } from 'vue'
import RecordNumberTab from './recordNumberTab'
import ContentMap from './contentMap'
import RealTimeDataCard from './realTimeDataCard'
const contentCenter = defineComponent({
  name: 'ContentCenter',
  setup() {
    return () => (
      <div class="container">
        <RecordNumberTab></RecordNumberTab>
        <ContentMap class="Map"></ContentMap>
        <RealTimeDataCard></RealTimeDataCard>
      </div>
    )
  }
})
export default contentCenter
