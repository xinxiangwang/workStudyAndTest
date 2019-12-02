<template>
 <div>
   <h1>{{ form.name }}</h1>
    <el-form :model="form">
      <el-form-item label="编号" prop="id">
        <el-input v-model="form.id"></el-input>
      </el-form-item>
      <el-form-item label="活动名称" prop="name">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
    </el-form>
 </div>
</template>
<script>
export default {
  name: '',
  props: ['form'],
  data () {
    return {
      
    }
  }
}
</script>
<style scoped>
</style>
