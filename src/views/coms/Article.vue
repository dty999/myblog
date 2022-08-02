<template>
  <div class="root">
    <el-row :gutter="20">
      <el-col :span="5" :push="1">
        <el-card>
          <el-input v-model="filterText" placeholder="Filter keyword" />
          <el-divider></el-divider>
          <el-scrollbar style="height: 30rem">
            <el-tree
              ref="treeRef"
              :data="titles"
              :props="defaultProps"
              @node-click="handleNodeClick"
              :highlight-current="true"
              :filter-node-method="filterNode"
            />
          </el-scrollbar>
        </el-card>
      </el-col>
      <el-col :span="16" :push="1">
        <el-card style="min-height: 60rem">
          <v-md-editor
            v-model="content"
            height="400px"
            mode="preview"
            right-toolbar="toc"
          ></v-md-editor>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { reactive, toRefs, watch, ref } from 'vue'
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
        { label: '树状结构展示', children: null },
        { label: '前端大文件下载', children: null },
        { label: '树状结构展示', children: null },
        { label: 'vue3使用注意事项', children: null },
        { label: '前端大文件下载', children: null },
        { label: '树状结构展示', children: null },
        { label: '前端大文件下载', children: null },
        { label: '树状结构展示', children: null }
      ],
      handleNodeClick: function (item) {
        console.log(item)
      },
      defaultProps: {
        children: 'children',
        label: 'label',
        class: 'custom-node'
      },
      append: function (data) {
        console.log('append:', data)
      },
      activeNode: null,
      treeRef: null,
      filterText: '',
      filterNode: (value, data) => {
        if (!value) return true
        return data.label.includes(value)
      }
    })
    // const filterText = ref('')
    watch(
      () => directory.filterText,
      (val) => {
        console.log(val)
        directory.treeRef.filter(val)
      }
    )
    const content = ref('### 标题Title')
    return {
      ...toRefs(directory),
      content
      // filterText
    }
  }
}
</script>

<style lang="less" scoped>
.root {
  // border: 1px solid #000;
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
<style lang="less">
.custom-node .el-tree-node__content {
  height: auto;
}
.custom-node .el-tree-node__content .el-tree-node__label {
  display: inline-block;
  line-height: 2.5rem;
  color: #626aef;
  font-size: 1rem !important;
}
</style>
