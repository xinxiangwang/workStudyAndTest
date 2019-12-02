<template>
  <div id="app">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-menu-item v-for="(item, index) in routes" :index="item.name" :key="index">{{ item.name }}</el-menu-item>
    </el-menu>
    <router-view/>
  </div>
</template>

<script>
import { routes } from './router'
console.log(routes)
export default {
  name: 'App',
  data () {
    return {
      routes
    }
  },
  computed: {
    activeIndex () {
      return this.$route.path.replace('/', '')
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
      this.$router.push({
        name: key
      })
    }
  }
}
</script>

<style>
/*公共样式--开始*/
html, body, div, ul, li, h1, h2, h3, h4, h5, h6, p, dl, dt, dd, ol, form, input, textarea, th, td, select {
    margin: 0;
    padding: 0;
}
*{box-sizing: border-box;}
html, body {
    min-height: 100%;
}

body {
    font-family: "Microsoft YaHei";
    font-size:14px;
    color:#333;
}
h1, h2, h3, h4, h5, h6{font-weight:normal;}
ul,ol {
    list-style: none;
}

img {
    border: none;
    vertical-align: middle;
}

a {
    text-decoration: none;
    color: #232323;
}

table {
    border-collapse: collapse;
    table-layout: fixed;
}

input, textarea {
    outline: none;
    border: none;
}

textarea {
    resize: none;
    overflow: auto;
}

.clearfix {
    zoom: 1;
}

.clearfix:after {
    content: ".";
    width: 0;
    height: 0;
    visibility: hidden;
    display: block;
    clear: both;
    overflow:hidden;
}

.fl {
    float: left
}

.fr {
    float: right
}

.tl {
    text-align: left;
}

.tc {
    text-align: center
}

.tr {
    text-align: right;
}

.ellipse {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.inline{
    display: inline-block;
    *display: inline;
    *zoom: 1;
}
.icon {
  width: 3em;
  height: 3em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
