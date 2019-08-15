<template>
  <div>
   <form  enctype="multipart/form-data" method="post"  action="http://localhost:80/upload">
    <input type="file" name="file" />
    <input type="submit" value="提交" />
   </form>
  </div>
</template>

<script>
export default {
  name: 'uploadtest'
  
  }
 
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
