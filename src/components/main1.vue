<template>
 <div>
   <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="准备工作" name="first">
      <Form1 :name.sync="name"/>
    </el-tab-pane>
    <el-tab-pane label="配置管理" name="second">
    </el-tab-pane>
    <el-tab-pane label="角色管理" name="third">
    </el-tab-pane>
  </el-tabs>
 </div>
</template>
<script>
/** 
 * 多个子组件同步更新 keywords: prop .sync this.$emit computed get&set
*/
import Form1 from '../testVue/form1'

export default {
  name: '',
  data () {
    return {
      activeName: 'first',
      name: 'dwdw',
    }
  },
  components: {
    Form1
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
