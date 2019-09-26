<template>
  <div class="wrapper">
    <h1>编辑文章</h1>
<el-form :model="news" ref="news" label-width="100px" class="demo-dynamic">
  <el-form-item  prop="title"  label="标题">
    <el-col :span="12"><el-input v-model="news.title"></el-input></el-col>
  </el-form-item>

  <el-form-item v-for="(item, index) in news.start"  :label="'段落' + ++index"  :key="item.key" :prop="'start.' + --index + '.content'" label-width="100px">

    <el-col :span='14' v-if="'content' in item">
      <el-input type="textarea" autosize v-model="item.content" placeholder="在此处填写段落"></el-input>
      <el-button @click.prevent="removeDomain(item)" class="delete">删除</el-button>
    </el-col>

    <el-col :span="14" v-else-if="'title' in item">
      <el-input v-model="item.title" placeholder="在此处填写标题"></el-input><el-button @click.prevent="removeDomain(item)" class="delete">删除</el-button>
    </el-col>
    
    <el-col :span="14" v-else-if="'src' in item">
      <el-upload :span="14"
        class="upload-demo"
        :on-preview="handlePreview"
        :on-remove="handleRemove"
        :file-list="item.src"
        list-type="picture">
      <el-button size="small" type="primary">点击上传</el-button>
      </el-upload>
        <el-button @click.prevent="removeDomain(item)" class="delete">删除</el-button>
        <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
    </el-col>

  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitForm('news')">提交</el-button>
    <el-button @click="addDomain('content')">新增段落</el-button>
    <el-button @click="addDomain('title')">新增标题</el-button>
    <el-button @click="addDomain('src')">新增图片</el-button>
    <el-button @click="resetForm('news')">重置</el-button>
  </el-form-item>
</el-form>
  </div>
</template>

<script>
export default {
    data() {
      return {
        news: {
          title: '',
          start: [

          ],
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        console.log(formName)
        this.$refs[formName].resetFields();
      },
      removeDomain(item) {
        var index = this.news.start.indexOf(item)
        if (index !== -1) {
          this.news.start.splice(index, 1)
        }
      },
      addDomain(type) {
        switch (type) {
          case 'content':
            var part = { content: '', key: Date.now() }
            break;
          case 'title':
            var part = { title: '', key: Date.now() }
            break;
          case 'src':
            var part = { src: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}] }
            break;
        }
        this.news.start.push(part)
        // this.news.start.push({
        //   type: '',
        //   key: Date.now()
        // });
        console.log(this.news)
      },
      // 图片上传
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      }
    }
  }
</script>
<style scoped>
h1 {
  width: 200px;
  color: #303133;
  margin: 25px auto;
}
</style>