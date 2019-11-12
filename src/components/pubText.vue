<script>
/**
 * 动态发表文章页面
 */
export default {
  data() {
    return {
      news: {
        title: '',
        content: []
      },
      viewType: ''
    }
  },
  methods: {
    // 根据不同的type来生成不同的label
    judgeType(type) {
      switch (type) {
        case 1:
          return '段落'
        case 3:
          return '小标题'
        case 2:
          return '图片'
      }
    },
    // 图片上传预览功能
    fileChange(e, currentImg) {
      let file = e.target.files[0]
      if (file) {
        let reader = new FileReader()
        reader.readAsDataURL(file)
        let that = this
        reader.onload = function(e) {
          that.avatar = e.target.result
          currentImg.section = e.target.result
        }
      }
    },
    // 提交表单
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          console.dir(this.news)
          console.log(this.news)
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },

    // 移动某一项 upOrDown: 1 向上移   -1  向下移
    test(item, index, upOrDown) {
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
      var part
      switch (type) {
        case 1:
          part = { type, section: '', key: Date.now() }
          break
        case 3:
          part = { type, section: '', key: Date.now() }
          break
        case 2:
          part = { type, section: '', key: Date.now() }
          break
      }
      this.news.content.push(part)
      console.log(this.news)
    },
    viewChange(val) {
      this.viewType = val
    }
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

<template>
  <div>
    <el-button @click="viewChange('pj01')">气候评价</el-button>
    <el-button @click="viewChange('pj02')">土壤质量评价(?)</el-button>
    <el-button @click="viewChange('pj03')">侵蚀评价</el-button>
    <el-button @click="viewChange('pj04')">植物群落评价</el-button>
    <el-button @click="viewChange('pj05')">塌陷区评价</el-button>
    <el-button @click="viewChange('pj06')">复垦评价</el-button>
    <div class="wrapper">
      <el-row :gutter="20">
        <el-col :span="12">
          <div class="left">
          <h1>编辑文章</h1>
          <el-form :model="news" ref="news" label-width="100px" class="demo-dynamic">
            <el-form-item prop="title" label="标题">
              <el-col :span="22">
                <el-input v-model="news.title"></el-input>
              </el-col>
            </el-form-item>
            <transition-group name="slide-fade" tag="div">
              <el-form-item
                v-for="(item, index) in news.content"
                :label="judgeType(item.type)"
                :key="item.key"
                :prop="'content.' + index + '.section'"
                label-width="100px">
                <el-col :span="22" v-if="item.type === 1" class="list-item">
                  <el-input type="textarea" autosize v-model="item.section" placeholder="在此处填写段落"></el-input>
                  <i @click.prevent="removeDomain(item)" class="my-icon el-icon-circle-close"></i>
                  <i @click.prevent="test(item, index, 1)" class="my-icon el-icon-top"></i>
                  <i @click.prevent="test(item, index, -1)" class="my-icon el-icon-bottom"></i>
                </el-col>
                <el-col :span="22" v-else-if="item.type === 3" class="list-item">
                  <el-input v-model="item.section" placeholder="在此处填写标题"></el-input>
                  <i @click.prevent="removeDomain(item)" class="my-icon el-icon-circle-close"></i>
                  <i @click.prevent="test(item, index, 1)" class="my-icon el-icon-top"></i>
                  <i @click.prevent="test(item, index, -1)" class="my-icon el-icon-bottom"></i>
                </el-col>
                <el-col :span="22" v-else-if="item.type === 2" class="list-item">
                  <input
                    ref="img"
                    type="file"
                    @change="fileChange($event, item)"
                    multiple
                    accept="image/gif, image/jpeg, image/jpg, image/png"/>
                  <i @click.prevent="removeDomain(item)" class="my-icon el-icon-circle-close"></i>
                  <i @click.prevent="test(item, index, 1)" class="my-icon el-icon-top"></i>
                  <i @click.prevent="test(item, index, -1)" class="my-icon el-icon-bottom"></i>
                  <!-- <img :src="item.section" alt style="width: 50%"/> -->
                </el-col>
              </el-form-item>
            </transition-group>
            <el-form-item>
              <el-button type="primary" @click="submitForm('news')">提交</el-button>
              <el-button @click="addDomain(1)">新增段落</el-button>
              <el-button @click="addDomain(3)">新增标题</el-button>
              <el-button @click="addDomain(2)">新增图片</el-button>
            </el-form-item>
          </el-form>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="right">
          <h1>文章预览</h1>
          <ul>
            <li class="title">{{ news.title }}</li>
            <li v-for="(item, index) in news.content" :key="index">
              <p class="small-title" v-if="item.type === 3">{{ item.section }}</p>
              <p class="para" v-if="item.type === 1">{{ item.section }}</p>
              <img v-if="item.type === 2" :src="item.section"/>
            </li>
          </ul>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<style scoped>
h1 {
  color: #303133;
  text-align: center;
  background: linear-gradient( #bdd0e4, rgb(221, 222, 253));
  font-size: 16px;
  font-weight: bold;
  height: 40px;
  line-height: 40px;
  letter-spacing: 10px;
  border-radius: 10px 10px 0 0;
}
ul, p, img {
  padding: 0;
  margin: 0;
}
li {
  list-style: none;
}
a {
  text-decoration: none;
}
.wrapper .el-col-12 {
  box-sizing: border-box;
}
.left, .right {
  min-height: 500px;
  border-radius: 10px;
  box-shadow: 0 -1px 10px rgb(168, 168, 168);
}
/** 左侧样式 */
.my-icon {
  font-size: 20px;
  transition: all 0.5s;
  color: #606266;
  margin-top: 10px;
  margin-right: 5px;
}
.my-icon:hover {
  color: #f56c6c;
}
.list-enter-active,
.list-leave-active {
  transition: all 0.7s;
}
.list-enter, .list-leave-to
/* .list-leave-active for below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
.slide-fade-enter-active {
  transition: all 0.7s;
}
.slide-fade-leave-active {
  transition: all 0.7s;
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(100px);
  opacity: 0;
}
.left {
  background-color: #eee;
}

/** 右侧样式 */
.right {
  background-color: #eee;
  z-index: 500;
}
.right ul {
  padding: 0 10px;
  color: #303133;
}
.title {
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 5px;
  margin-bottom: 8px;
}
.right .small-title {
  margin: 8px 0;
  font-weight: 800;
}
.right .para {
  text-indent: 2em;
  font-size: 14px;
}
.right img {
  margin: 0 auto;
  max-width: 500px;
  display: block;
}
</style>
<style>
.el-main {
  overflow-y: auto !important;
}
</style>
