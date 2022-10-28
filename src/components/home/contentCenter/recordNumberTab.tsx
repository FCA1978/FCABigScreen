
import { defineComponent, h } from 'vue'
import './recordNumberTab.scss'
const recordNumberTab = defineComponent({
  name: 'RecordNumberTab',
  setup() {
    return () => (
      <div class="recordNumberTab borderOne">
        <h3 class="title lineOne">广东省疫情数据情况</h3>
        <ul class="recordNumber">
          <li>
            <p class="alert">67</p> <h3>当月确诊数</h3>
          </li>
          <li>
            <p class="congestion">2</p> <h3>当月死亡数</h3>
          </li>
          <li>
            <p>1525</p> <h3>当月疑似数</h3>
          </li>
        </ul>
      </div>
    )
  }
})
export default recordNumberTab
