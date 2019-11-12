<template>
  <div>
    <el-upload
      class="upload-demo"
      :headers="header"
      action="http://localhost:3000"
      :on-change="handleChange"
      :on-progress="handleProgress"
      :on-success="aaa"
      :on-preview="ccc"
      :file-list="fileList3">
    <el-button size="small" type="primary">点击上传</el-button>
</el-upload>
  </div>
</template>

<script>
export default {
    data() {
      return {
        fileList3: [],
        header: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }
    },
    methods: {
      handleChange (file, fileList) {
        console.log('aaa')
        console.log(fileList)
        
        this.fileList3 = fileList.slice(-3)
      },
      handleProgress (event, file, fileList) {
        console.log(event)
      },
      aaa () {
        console.log('成功啦')
      },
      ccc () {
        console.log('点我干嘛？')
      }
    }
  }
</script>
<style scoped>
</style>