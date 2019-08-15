<template>
  <div>
     <input type="file" name="file" />
    <input type="button" value="提交" v-on:click="upload"/>
  </div>
</template>

<script>
export default {
  name: 'uploadtest2',
  methods:{
  	upload:function(){
  		var formdata=new FormData();
  		formdata.append("file",document.querySelector("input[name=file]").files[0])
  		this.$http.post("http://localhost:80/upload2",formdata,{
  			headers:{
  				"Content-type":"multipart/form-data"
  			}
  		}).then(
  			function(result){
  				console.log(result);
  				alert("成功")
  			},
  			function(error){
  				
  			}
  		)
  	}
  }
  
  }
 
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
