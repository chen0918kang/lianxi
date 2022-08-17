<template>
  <h1>这是App根组件</h1>
<p>这是app根组件里的p标签</p>
<p>这是app根组件里的p标签</p>
<hr>
<my-text></my-text>
<hr>
<MyArticle title="面朝大海,春暖花开" author='海子'></MyArticle>

<hr>
<LeiMing></LeiMing>



</template>

<script>
import leiming from '../ceshi/dong_tai_gaibianleiming.vue'
import text from './text.vue'
import article from './article.vue'
export default {
components:{
  'MyText': text,
  'MyArticle':article,
  'LeiMing':leiming
}
}
</script>

<style lang='less' scoped>
    p{
          color: red;
      }
       :deep(.text1) {
        color: blue;
      }
</style>