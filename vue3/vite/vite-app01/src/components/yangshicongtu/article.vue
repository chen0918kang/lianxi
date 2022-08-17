<template>
  <h1>文章标题：{{ title}}</h1>
  <h1>作者：{{ author }}</h1>
</template>

<script>
export default {
props:['title','author']
}
</script>

<style>

</style>