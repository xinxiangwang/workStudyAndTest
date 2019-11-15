<template>
  <div>
    <el-date-picker
      v-model="month"
      type="month"
      placeholder="选择月">
    </el-date-picker>
    <MyCalendara :currentMonth="month">
      <template slot='dateCell' slot-scope="{ item }">
        <p>{{ item.date }}</p>
        <div v-html="aaa(item)"></div>
      </template>
    </MyCalendara>
  </div>
</template>

<script>
import MyCalendara from './common/myCalendar'
export default {
  components: {
    MyCalendara
  },
  props: {},
  data() {
    return {
      month: new Date()
    }
  },
  methods: {
    aaa (val) {
      var jiaban = [1, 2, 3, 4, 5]
      var chuchai = [6, 7, 8, 9, 10]
      var tiaoxiu = [11, 12, 13, 14, 15]
      if (val.type === 'current') {
        var html = ''
        jiaban.find(item => {
          if (item == val.date) {
            console.log(item, val.date)
            html = `<svg class="icon" aria-hidden="true">
                      <use xlink:href="#icon-jiaban1"></use>
                    </svg>`
          }
        })
        chuchai.find(item => {
          if (item == val.date) {
            html = `<svg class="icon" aria-hidden="true">
                      <use xlink:href="#icon-chucha"></use>
                    </svg>`
          }
        })
        tiaoxiu.find(item => {
          if (item == val.date) {
            html = `<svg class="icon" aria-hidden="true">
                      <use xlink:href="#icon-tiaoxiushenqing"></use>
                    </svg>`
          }
        })
      }
      return html
    }
  }
}
</script>
<style scoped>
</style>
