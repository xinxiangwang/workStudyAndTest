<template>
  <div>
    <el-date-picker
      v-model="month"
      type="month"
      placeholder="选择月">
    </el-date-picker>
    <el-button @click="bbb">测试</el-button>
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
      month: new Date(),
      result: []
    }
  },
  methods: {
    bbb () {
      var data = [
        {
          day: '2019-11-1',
          long: '3'
        },
        {
          day: '2019-11-19',
          long: '20'
        },
        {
          day: '2019-11-8',
          long: '10'
        }
      ]
      data.forEach(item => {
        var startTime = this.myGetDate(item.day)
        var endTime = startTime.getTime() + item.long*(1000*60*60*24)
        endTime = new Date(endTime)
        var list = this.formatEveryDay(startTime, endTime)
        this.result = this.result.concat(list)
      });
      console.log(this.result)
    },
    formatEveryDay (startTime, endTime) {
      let dateList = []; 
      // var startTime = this.getDate(start);
      // var endTime = this.getDate(end);
      while ((endTime.getTime() - startTime.getTime()) >= 0) {
        var year = startTime.getFullYear();
        var month = startTime.getMonth() + 1 < 10 ? '0' + (startTime.getMonth() + 1) : startTime.getMonth() + 1;
        var day = startTime.getDate().toString().length == 1 ? "0" + startTime.getDate() : startTime.getDate();
        dateList.push(year + "-" + month + "-" + day);
        startTime.setDate(startTime.getDate() + 1);
      }
      return dateList;
    },
    myGetDate (datestr) {
      var temp = datestr.split("-");
      var date = new Date(temp[0], temp[1] - 1, temp[2]);
      return date;
    },
    aaa (val) {
      var jiaban = [1, 2, 3, 4, 5]
      var chuchai = [6, 7, 8, 9, 10]
      var tiaoxiu = [11, 12, 13, 14, 15]
      if (val.type === 'current') {
        var html = ''
        this.result.find(item => {
          if (item == val.date) {
            html = `<svg class="icon" aria-hidden="true">
                      <use xlink:href="#icon-jiaban1"></use>
                    </svg>`
          }
        })
        // chuchai.find(item => {
        //   if (item == val.date) {
        //     html = `<svg class="icon" aria-hidden="true">
        //               <use xlink:href="#icon-chucha"></use>
        //             </svg>`
        //   }
        // })
        // tiaoxiu.find(item => {
        //   if (item == val.date) {
        //     html = `<svg class="icon" aria-hidden="true">
        //               <use xlink:href="#icon-tiaoxiushenqing"></use>
        //             </svg>`
        //   }
        // })
      }
      return html
    }
  }
}
</script>
<style scoped>
</style>
