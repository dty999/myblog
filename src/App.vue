<template>
  <div class="root">
    <el-row class="head">
      <el-col :span="24" :push="0">
        <el-menu
          v-if="menuIf"
          ref="elmenuRef"
          :default-active="activeIndex"
          class="header_menu"
          mode="horizontal"
          :ellipsis="false"
          @select="handleSelect"
        >
          <!-- <el-menu-item index="logo">LOGO</el-menu-item> -->
          <div class="logo">
            <el-avatar> DTY </el-avatar>
          </div>
          <div class="flex-grow" />
          <el-menu-item
            v-for="item in menuList"
            :index="item.index"
            :key="item.index"
            >{{ item.label }}</el-menu-item
          >
          <!-- <el-menu-item index="about">关于</el-menu-item> -->
        </el-menu>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="22" :push="1">
        <el-main style="width: 100%; min-height: 300px">
          <router-view></router-view>
        </el-main>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import { reactive, ref, onMounted, inject, toRefs, nextTick } from 'vue'
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'
export default {
  setup() {
    const $axios = inject('$axiosOne')
    const $router = useRouter()
    const menu = reactive({
      elmenuRef: null,
      menuIf: true
    })
    const activeIndex = ref('face')
    const handleSelect = (key, keyPath) => {
      console.log(key, keyPath)
      try {
        $router.push({ name: key })
      } catch (error) {
        // console.log('导航失败', { error })
        ElMessage({
          type: 'error',
          duration: 1000,
          offset: 200,
          message: error.message
        })
        menu.menuIf = false
        nextTick(() => {
          menu.menuIf = true
          $router.push({ name: 'face' })
        })
      }
    }
    const networkData = reactive({
      menuList: [{ path: '/about', label: '关于', index: '/about' }]
    })

    onMounted(() => {
      $axios.get('/menuList/headerMenuList').then((res) => {
        networkData.menuList = res.data
      })
    })
    return {
      activeIndex,
      handleSelect,
      ...toRefs(networkData),
      ...toRefs(menu)
    }
  }
}
</script>
<style lang="less" scoped>
.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
}

.el-main {
  // background-color: #e9eef3;
  color: #333;
  text-align: center;
}
.flex-grow {
  flex-grow: 1;
}
.root {
  .head {
    .header_menu {
      display: flex;
      padding-left: 6rem;
      padding-right: 3rem;
      .logo {
        display: flex;
        flex-direction: column;
        justify-content: center;
        justify-items: center;
        text-align: center;
      }
    }
  }
}
</style>
