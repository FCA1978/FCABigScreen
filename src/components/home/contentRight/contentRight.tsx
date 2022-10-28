
import './contentRight.scss'
import { defineComponent, h } from 'vue'
import LllegalData from './lllegalData'
import PoliceDistribution from './policeDistribution'
import InterProvincialData from './interProvincialData'
const contentRight = defineComponent({
  name: 'ContentRight',
  setup() {
    return () => (
      <div class="container">
        <LllegalData class="lllegalData"></LllegalData>
        <InterProvincialData class="interProvincialData"></InterProvincialData>
        <PoliceDistribution class="policeDistribution"></PoliceDistribution>
      </div>
    )
  }
})
export default contentRight
