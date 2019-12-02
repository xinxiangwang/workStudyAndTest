<template>
 <div>
   <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="准备工作" name="first">
      <Form1 :form="form"/>
    </el-tab-pane>
    <el-tab-pane label="配置管理" name="second">
      <Form2/>
    </el-tab-pane>
  </el-tabs>
 </div>
</template>
<script>
import Form1 from '../testVue2/form1'
import Form2 from '../testVue2/form2'
export default {
  name: '',
  data () {
    return {
      activeName: 'first',
      
      form: {
        'id': 1,
        'name': 'wxx'
      }
    }
  },
  components: {
    Form1,
    Form2
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
