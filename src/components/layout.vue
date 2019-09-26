<template>
  <div>
    <el-row>
      <el-col :span="24"><div class="box">布局初体验</div></el-col>
      <el-col :span="6"><div class="box six"></div></el-col>
      <el-col :span="6"><div class="box six"></div></el-col>
      <el-col :span="6"><div class="box six"></div></el-col>
      <el-col :span="6"><div class="box six"></div></el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="24"><div class="box">在el-row里添加:gutter控制间距</div></el-col>
      <el-col :span="4"><div class="box"></div></el-col>
      <el-col :span="4"><div class="box"></div></el-col>
      <el-col :span="4"><div class="box"></div></el-col>
      <el-col :span="4"><div class="box"></div></el-col>
      <el-col :span="4"><div class="box"></div></el-col>
      <el-col :span="4"><div class="box"></div></el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="24"><div class="box">使用offset进行偏移</div></el-col>
      <el-col :span="6" :offset="3"><div class="box">1</div></el-col>
      <el-col :span="6" :offset="6"><div class="box">2</div></el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="24"><div class="box">响应式栅格</div></el-col>
      <el-col :xs="8" :sm="6" :md="8" :lg="3" :xl="1"><div class="box"></div></el-col>
      <el-col :xs="4" :sm="6" :md="4" :lg="9" :xl="11"><div class="box"></div></el-col>
      <el-col :xs="4" :sm="6" :md="4" :lg="9" :xl="11"><div class="box"></div></el-col>
      <el-col :xs="8" :sm="6" :md="8" :lg="3" :xl="1"><div class="box"></div></el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
    }
  },
  methods: {},
}
</script>
<style scoped>
.box {
  margin-top: 10px;
  border-radius: 4px;
  height: 36px;
  background: #e5e9f2;
}
.six {
  margin-right: 10px;
}
</style>