<template>
  <div class="wrapper">
    <h1>编辑文章</h1>
    <el-form :model="news" ref="news" label-width="100px" class="demo-dynamic">

      <el-form-item  prop="title"  label="标题">
        <el-col :span="24"><el-input v-model="news.title"></el-input></el-col>
      </el-form-item>

      <transition-group name="slide-fade" tag="p">
      <el-form-item v-for="(item, index) in news.content"  :label="judgeType(item.type)"  :key="item.key" :prop="'content.' + index + '.section'" label-width="100px">
        <el-col :span='24' v-if="item.type === 1" class="list-item">
          <el-input type="textarea" autosize v-model="item.section" placeholder="在此处填写段落"></el-input>
          <i @click.prevent="removeDomain(item)" class="my-icon-delete el-icon-circle-close"></i>
          <i @click.prevent="test(item, index, 1)" class="my-icon-delete el-icon-top"></i>
          <i @click.prevent="test(item, index, -1)" class="my-icon-delete el-icon-bottom"></i>
        </el-col>
        <el-col :span="24" v-else-if="item.type === 3" class="list-item">
          <el-input v-model="item.section" placeholder="在此处填写标题"></el-input>
          <i @click.prevent="removeDomain(item)" class="my-icon-delete el-icon-circle-close"></i>
          <i @click.prevent="removeDomain(item)" class="my-icon-delete el-icon-top"></i>
          <i @click.prevent="removeDomain(item)" class="my-icon-delete el-icon-bottom"></i>
        </el-col>
        <el-col :span="24" v-else-if="item.type === 2" class="list-item">
          <input ref="img" type="file"  @change="fileChange($event, item)" multiple accept="image/gif,image/jpeg,image/jpg,image/png">
          <i @click.prevent="removeDomain(item)" class="my-icon-delete el-icon-circle-close"></i>
          <i @click.prevent="removeDomain(item)" class="my-icon-delete el-icon-top"></i>
          <i @click.prevent="removeDomain(item)" class="my-icon-delete el-icon-bottom"></i>
          <img :src="item.section" alt="" style="width: 50%">
        </el-col>
      <!-- <el-col :span="14" v-else-if="'src' in item">
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
      </el-col> -->
      </el-form-item>
      </transition-group>
      <el-form-item>
        <el-button type="primary" @click="submitForm('news')">提交</el-button>
        <el-button @click="addDomain(1)">新增段落</el-button>
        <el-button @click="addDomain(3)">新增标题</el-button>
        <el-button @click="addDomain(2)">新增图片</el-button>
        <!-- <el-button @click="resetForm('news')">重置</el-button> -->
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
          content: [

          ],
        }
      }
    },
    methods: {
      // 根据不同的type来生成不同的label
      judgeType (type) {
        switch (type) {
          case 1:
            return '段落'
            break;
          case 3:
            return '小标题'
            break;
          case 2:
            return '图片'
            break;
        }
      },
      // 图片上传预览功能
      fileChange (e, currentImg) {
        let file = e.target.files[0]
        if (file) {
          let reader = new FileReader()
          reader.readAsDataURL(file)
          let that = this
          reader.onload = function (e) {
            that.avatar = e.target.result
            currentImg.section = e.target.result
          }
        }
      },
      // 提交表单
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            console.dir(this.news)
            console.log(this.news)
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      // 重置
      // resetForm(formName) {
      //   this.$refs[formName].resetFields();
      //   this.$refs['img'].value = ''
      // },

      // 移动某一项 upOrDown: 1 向上移   -1  向下移
      test (item, index, upOrDown) {
        console.log(this.news.content)
        let data = this.news.content
        data.splice(index - upOrDown, 0, data.splice(index, 1)[0])
        console.log(data)
      },
      // 删除某一项
      removeDomain(item) {
        var index = this.news.content.indexOf(item)
        if (index !== -1) {
          this.news.content.splice(index, 1)
        }
      },
      // 新添一项
      addDomain(type) {
        switch (type) {
          case 1:
            var part = { type, section: '', key: Date.now() }
            break;
          case 3:
            var part = { type, section: '', key: Date.now() }
            break;
          case 2:
             var part = { type, section: '', key: Date.now() }
             break;
        }
        this.news.content.push(part)
        console.log(this.news)
      },
      // 图片上传
      // handleRemove(file, fileList) {
      //   console.log(file, fileList);
      // },
      // handlePreview(file) {
      //   console.log(file);
      // }
    }
  }
</script>
<style scoped>
h1 {
  width: 200px;
  color: #303133;
  margin: 25px auto;
}
.wrapper {
  width: 50%;
}
.my-icon-delete {
  font-size: 30px;
  transition: all 0.5s;
  color: #606266;
  margin-top: 10px;
  margin-right: 10px;
}
.my-icon-delete:hover {
  color: #F56C6C;
}
.list-enter-active, .list-leave-active {
  transition: all 0.7s;
}
.list-enter, .list-leave-to
/* .list-leave-active for below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
.slide-fade-enter-active {
  transition: all .7s;
}
.slide-fade-leave-active {
  transition: all .7s;
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(100px);
  opacity: 0;
}
</style>