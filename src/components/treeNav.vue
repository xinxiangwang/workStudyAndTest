<template>
 <div>
   <el-col :span="2">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose">
      <el-submenu index="1">
        <template slot="title">
          <span>导航一</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="2">
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="3">
        <span slot="title">导航三</span>
      </el-menu-item>
    </el-menu>
  </el-col>
 </div>
</template>
<script>
export default {
  name: '',
  data () {
    return {
    }
  }
}
</script>
<style scoped>
</style>
