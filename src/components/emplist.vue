<template>
  <div>
   <table class="table table-bordered">
				<caption>雇员信息列表</caption>
				<thead>
					<tr>
						<th>姓名</th>
						<th>年龄</th>
						<th>性别</th>
						<th>操作</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="emp in emps">
						<td>{{emp.name}}</td>
						<td>{{emp.age}}</td>
						<td>{{emp.sex}}</td>
						<td>
							<button class="btn-default btn" @click="delete1(emp.eid)">删除</button>
							<button class="btn-default btn" @click="update(emp.eid)">修改</button>
						</td>
					</tr>

				</tbody>
			</table>
  </div>
</template>

<script>
export default {
  name: 'emplist',
  data () {
    return {
      emps:[]
    }
  },
  created:function(){
  	this.loademp();
  },
  methods:{
  	loademp:function(){
  		
  		this.$http.get("http://localhost:80/emp").then(
  			function(result){
  				this.emps = result.body;
  			},
  			function(error){
  				alert("加载数据失败");
  			}
  		)
  	},
  	update:function(eid){
  		this.$router.push({
  			path:"/empupdate",
  			query:{
  				eid:eid
  			}
  		})
  	},
  	delete1:function(eid){
  		this.$http.delete("http://localhost:80/emp",{
  			params:{
  				eid:eid
  			}
  		}).then(
  			function(result){
  				alert("删除成功");
  				this.emps = result.body;
  			},
  			function(error){
  				alert("加载数据失败");
  			}
  		)
  		
  	}
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
