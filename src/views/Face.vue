<template>
  <div class="root">
    <div class="title">
      <h2>丁同亚</h2>
      <p>专精前端开发.扎实的计算机理论知识</p>
    </div>
    <el-divider />
    <div class="shower">
      <p>
        上邪<br />我欲与君相知<br />长命无绝衰<br />山无陵<br />江水为竭<br />冬雷震震<br />夏雨雪<br />天地合<br />乃敢与君绝<br />
      </p>
    </div>
    <el-divider />
    <div class="nav"></div>
  </div>
</template>

<script>
export default {
  setup() {
    return {}
  },
  data() {
    return {}
  }
}
</script>

<style lang="less" scoped>
.root {
  .title {
    text-align: center;
    h2 {
      font-size: 3rem;
      line-height: 6rem;
      font-family: 'fzssjt';
      letter-spacing: 0.5rem;
    }
    p {
      font-size: 2rem;
      line-height: 3rem;
      font-weight: normal;
      // font-family: 'fzssjt';
      font-family: 'FZ_hfxs_J';
      // font-style: italic;
      // text-indent: 8rem;
    }
  }
  .shower {
    p {
      margin: 0 auto;
      font-family: 'FZ_hfxs_J';
      font-size: 4rem;
      writing-mode: vertical-rl;
      height: 24rem;
    }
  }
  .nav {
    height: 12rem;
    display: flex;
  }
}
</style>
