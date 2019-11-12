<template>
  <div>
    <el-form :model="form">
      <el-form-item label="第一个值">
        <el-input v-model.number="form.num1"></el-input>
      </el-form-item>
      <el-form-item label="第二个值">
        <el-input v-model.number="form.num2"></el-input>
      </el-form-item>
      <el-form-item label="第三个值">
        <el-input v-model.number="form.num3"></el-input>
      </el-form-item>
    </el-form>
    <h3>{{sum }}</h3>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      form: {
        num1: 10,
        num2: 20,
        num3: 30
      }
    }
  },
  methods: {
    isNumber (n) {
      return typeof n === 'number' ? n : 0
    }
  },
  computed: {
    sum: {
      get () {
        return this.isNumber(this.form.num1) + this.isNumber(this.form.num2) + this.isNumber(this.form.num3)
      }
    }
  }
}
</script>
<style scoped>
</style>