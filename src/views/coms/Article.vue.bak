<template>
  <div class="root">
    <el-row :gutter="0">
      <el-col :span="5" :push="1">
        <ul class="directory">
          <el-scrollbar height="35rem">
            <li
              v-for="(item, index) in titles"
              :key="item.label"
              @click="handleNodeClick(item, $event)"
            >
              {{ index + 1 }}.{{ item.label }}
            </li>
          </el-scrollbar>
        </ul>
      </el-col>
      <el-col :span="16">markdown文本展示</el-col>
    </el-row>
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
export default {
  data() {
    return {}
  },
  setup() {
    const directory = reactive({
      titles: [
        { label: 'vue3使用注意事项', children: null },
        { label: '前端大文件下载', children: null },
        { label: '树状结构展示', children: null },
        { label: '前端大文件下载', children: null },
        { label: '树状结构展示', children: null },
        {
          label: 'vue3使用注意',
          children: null
        },
        { label: '前端大文件下载', children: null },
        { label: '树状结构展示', children: null },
        { label: '前端大文件下载', children: null },
        { label: '树状结构展示', children: null },
        { label: 'vue3使用注意事项', children: null },
        { label: '前端大文件下载', children: null },
        { label: '树状结构展示', children: null },
        { label: '前端大文件下载', children: null },
        { label: '树状结构展示', children: null }
      ],
      handleNodeClick: function (item, e) {
        // console.log('点击节点,参数为:', item, [e.target])
        let node = e.target
        directory.activeNode = node
        node.classList.add('active')
        node.parentNode.childNodes.forEach((value, index, array) => {
          if (value != node && value.nodeName == 'LI') {
            value.classList.remove('active')
            // console.log('node', [value])
          }
        })
      },
      defaultProps: {
        children: 'children',
        label: 'label',
        class: 'custom-node'
      },
      append: function (data) {
        console.log('append:', data)
      },
      activeNode: null
    })
    return {
      ...toRefs(directory)
    }
  }
}
</script>

<style lang="less" scoped>
.root {
  border: 1px solid #000;
}
.custom-node > .el-tree-node__content {
  color: #626aef;
}
ul.directory {
  list-style-type: none;
  cursor: pointer;
  // height: 10rem;
  // overflow: scroll;
  li {
    text-align: left;
    font-size: 1rem;
    line-height: 2.4rem;
    &:hover {
      font-weight: bold;
    }
  }
  .active {
    font-weight: bold;
  }
}
</style>
