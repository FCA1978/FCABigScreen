import { defineComponent, h } from 'vue'
import './headerTab.scss'
const headerTab = defineComponent({
  name: 'headerTab',
  setup() {
    return	()	=>	{
      return <div class="headerTab">
        <p>疫情实时数据监控平台</p>
      </div>
    }
  },
});
export default headerTab