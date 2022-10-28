
import './contentLeft.scss'
import { defineComponent, h } from 'vue'
import TrafficRoutes from './trafficRoutes'
import TrafficTools from './trafficTools'
import TrafficVolume from './trafficVolume'
const contentLeft = defineComponent({
  name: 'ContentLeft',
  setup() {
    return () => (
      <div class="container">
        <TrafficRoutes class="trafficRoutes"></TrafficRoutes>
        <TrafficTools class="trafficTools"></TrafficTools>
        <TrafficVolume class="trafficVolume"></TrafficVolume>
      </div>
    )
  }
})
export default contentLeft
