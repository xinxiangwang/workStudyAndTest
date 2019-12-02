<template>
  <div>
    <el-col :span="12" :offset="2">
      <h1>{{ this.currentMonth }}</h1>
      <div class="el-calendar">
        <div class="el-clendar__body">
          <table cellspacing="0" cellpadding="0" class="el-calendar-table">
            <thead>
              <th>日</th>
              <th>一</th>
              <th>二</th>
              <th>三</th>
              <th>四</th>
              <th>五</th>
              <th>六</th>
            </thead>
            <tbody>
              <template v-for="(Item, index) in tableData">
                <tr class="el-calendar-table__row" :key="index">
                  <template v-for="item in Item">
                    <td :key="item.date + item.type" :class="item.type">
                      <div class="el-calendar-day">
                        <slot name="dateCell" :item="item">
                          <span>{{ item }}</span>
                        </slot>
                      </div>
                    </td>
                  </template>
                </tr>
              </template>
            </tbody>
          </table>
        </div>
      </div>
    </el-col>
</div>
</template>

<script>
export default {
    data() {
      return {
        preMon: [],
        curMon: [],
        nextMon: [],
        allDaysShow: []
      }
    },
    props: ['currentMonth'],
    computed: {
      tableData () {
        return this.allDays(this.currentMonth)
      }
    },
    methods: {
      allDays (days) {
        let year = days.getFullYear()
        let month = days.getMonth() + 1
        month = month < 10 ? '0' + month : month
        let lastDay = new Date(year,month,0) //Sat Nov 30 2019 00:00:00 GMT+0800 (中国标准时间)
        let lastDay_date = lastDay.getDate() //这个月的最后一天 30
        let firstDay = new Date(year,month-1,1) // Fri Nov 01 2019 00:00:00 GMT+0800 (中国标准时间)
        let firstDayOfWeek = firstDay.getDay() === 0 ? 7 : firstDay.getDay() //这个月第一天从周几开始 5
        let pDay =new Date(year,month-1,0);
        let last_p_day =pDay.getDate(); // 获取上个月最后一天 31

        // 获取应显示的上个月信息
        let preMonth = []
        for (let i = 0; i < firstDayOfWeek; i++) {
          preMonth.unshift({ date: last_p_day--, type: 'prev' })
        }
        this.preMon = preMonth

        // 获取应显示的这个月信息
        let curMonth = []
        for (let i = 1; i <= 42 - this.preMon.length; i++) {
          if (i <= lastDay_date) {
            i = i< 10 ? '0' + i : i
            curMonth.push({ date: year + '-' + month + '-' + i, type: 'current' })
          }
        }
        this.curMon = curMonth
        // 获取应显示的下个月信息
        let nextMonth = []
        for (let i = 1; i <= 42 - this.preMon.length - this.curMon.length; i++) {
            nextMonth.push({ date: i, type: 'next' })
        }
        this.nextMon = nextMonth

        this.allDaysShow = [...preMonth, ...curMonth, ...nextMonth]
        // this.tableData = this.sliceArray(this.allDaysShow, 7)
        return this.sliceArray(this.allDaysShow, 7)
      },
      sliceArray (array, size) {
        var result = [];
        for (var x = 0; x < Math.ceil(array.length / size); x++) {
          var start = x * size;
          var end = start + size;
          result.push(array.slice(start, end));
        }
        return result;
      }
    },
    mounted () {
      console.log(this.currentMonth)
    }
  }
</script>
<style>
*{
    margin: 0;
    padding: 0;
}
ul,li,ol{
    list-style: none;
}
.all {
    margin-right: auto;
    margin-left: auto;
}
.rili{
    margin-left: auto;
    margin-right: auto;
    width: 350px;
    border:1px #ddd solid;
}
.riliHeader{
  height: 50px;
  border-bottom:1px #ddd solid;
  background: #eee;
}
.riliHeader li, .riliContent li{
  float: left;
  width: 48px;
  height: 48px;
  line-height: 48px;
  font-size: 16px;
  text-align: center;
  border:1px #ddd solid;
}
.riliContent{
  height: 300px;
}
</style>