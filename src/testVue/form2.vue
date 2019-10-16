<template>
 <div>
   <!-- <el-form ref="news" :model="news">
     <el-form-item v-for="(item, index) in news.data" :key="index" :label="item.label">
       <el-input v-model="item.content"></el-input>
     </el-form-item>
   </el-form> -->
   <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="活动名称1" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="活动区域2" prop="region">
        <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="动态名称" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="人员数量" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
    </el-form>
 </div>
</template>
<script>
export default {
  name: '',
  data () {
    return {
      form: {
        name: '',
        age: '',
        getters: ''
      },
      news: {
        data: [
          {
            label: '计算区域',
            content: 'alt'
          },
          {
            label: '任务名称',
            content: '新疆'
          },
          {
            label: '任务编号',
            content: 0
          }
        ]
      }
    }
  },
  props: {
    cumputed: {
      type: String,
      default: ''
    }
  },
  watch: {
    cumputed (newValue) {
      this.news.data[0].content = newValue
    }
  }
}
</script>
<style scoped>
</style>
