<template>
 <div>
   <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="准备工作" name="first">
      <Form1 :name.sync="name" :mession="mession" :bh="bh"/>
    </el-tab-pane>
    <el-tab-pane label="配置管理" name="second">
      <Form2 :name.sync="name" :cumputed.sync="cumputed" />
    </el-tab-pane>
    <el-tab-pane label="角色管理" name="third">
      <Form3/>
    </el-tab-pane>
  </el-tabs>
 </div>
</template>
<script>
import Form1 from '../testVue/form1'
import Form2 from '../testVue/form2'
import Form3 from '../testVue/form3'
export default {
  name: '',
  data () {
    return {
      activeName: 'first',
      name: 'dwdw',
      cumputed: 'zzz',
      mession: '西安',
      bh: 1
    }
  },
  components: {
    Form1,
    Form2,
    Form3
  },
  methods: {
    handleClick(tab, event) {
        console.log(tab, event);
      }
  }
}
</script>
<style scoped>
</style>
