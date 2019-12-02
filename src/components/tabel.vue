<template>
 <div>

   <div class="box" ref="box">
      <table ref='box1' border="1" :style="`position: absolute;${tableSize}`">
        <thead> <!--用来显示的表头-->
          <template v-for="(item, index) in tableData.head">
            <tr :key="index">
              <template v-for="(head, index) in item">
                <th :key="index" :colspan="head.col" :rowspan="head.row">
                  {{ head.val }} <!--生成表头-->
                </th>
              </template>
            </tr>
          </template>
        </thead>
      </table>

      <table border="1" ref="box2" :style="tableSize">
        <thead style="opacity: 0"> <!--用来占位置的-->
          <template v-for="(item, index) in tableData.head">
            <tr :key="index">
              <template v-for="(head, index) in item">
                <th :key="index" :colspan="head.col" :rowspan="head.row">
                  {{ head.val }} <!--生成表头-->
                </th>
              </template>
            </tr>
          </template>
        </thead>

        <tbody>
          <template v-for="(item, index) in tableData.body">
            <tr :key="index+tableData.head.length" :class="item.color ? item.color : ''">
              <td :colspan="item.col" :rowspan="item.row">
                {{ item.val }} <!-- 生成表格左侧标题 -->
              </td>
              <template v-if="item.children && item.children.length !== 0">
                <template v-for="(item, index) in item.children">
                  <td :key="index">
                    {{ item }} <!-- 生成F1~FN -->
                  </td>
                </template>
              </template>
            </tr>
          </template>
        </tbody>
      </table>
    </div>
 </div>
</template>
<script>
import Tdly from '../tableData/tdly'
import Zbfg from '../tableData/zbfg'
import Trqs from '../tableData/trqs'
import Stbc from '../tableData/stbc'
import Xz from '../tableData/xz'
export default {
  name: '',
  props: {
    tableSize: {
      type: String,
      default: 'width: 100%'
    }
  },
  data () {
    return {
      data: {},
      tableData: {
        head: [],
        body: []
      },
      country: []
    }
  },
  methods: {
    loadingMore () {
      console.log(this.$refs.box.scrollTop)
      this.$refs.box1.style.top = this.$refs.box.scrollTop + 'px'
      
    }
  },
  mounted () {
    this.tableData = Tdly()
    this.$refs.box.addEventListener('scroll', this.loadingMore, false);
  }
}
</script>
<style scoped>
.box {
  overflow: auto;
  width: 100%;
  height: 500px;
  position: relative;
}
table {
  border-collapse: collapse;
  letter-spacing: 2px;
  font-weight: normal;
}
th {
	text-align:center;
	background-color: #cfd8dc;
  padding: 8px 18px;
}
tr {
  text-align:center;
}
tr.leftHead {
  background-color: #cfd8dc;
}
tr.odd {
  background-color: #eceff1;
}
</style>
