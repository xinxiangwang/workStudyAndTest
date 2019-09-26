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
* {
  margin: 0;
  padding: 0;
}
a {
  text-decoration: none;
}
</style>
