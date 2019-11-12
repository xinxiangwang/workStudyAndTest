<template>
 <div>
   <!-- <el-form ref="news" :model="news">
     <el-form-item v-for="(item, index) in news.data" :key="index" :label="item.label">
       <el-input v-model="item.content" @input="handleInput($event, item.label)"></el-input>
     </el-form-item>
   </el-form> -->
   <el-form :model="ruleForm" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="名字" prop="$_name">
        <el-input v-model="$_name"></el-input>
      </el-form-item>
    </el-form>
 </div>
</template>
<script>
export default {
  data () {
    return {
      ruleForm: {}
    }
  },
  computed: {
    $_name: {
      get () {
        return this.name
      },
      set (value) {
        this.$emit('update:name', value)
      }
    }
  },
  props: {
    name: ''
  },
  methods: {
    // handleInput (e, label) {
    //   if (label === '计算区域') {
    //     this.$emit('update:cumputed', e)
    //   }
    // }
  }
}
</script>
<style scoped>
</style>
