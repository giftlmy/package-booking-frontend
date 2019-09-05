<template>
<div class="main">
<router-link to="/WareHouse">包裹入库</router-link>     
<table class="gridtable" >
    <tr>
        <th>运单号</th><th>收件人</th><th>电话</th><th>状态</th><th>预约时间</th>
    </tr>
    <tr v-for="(item,index) in packages" :key="index">
        <td>{{item.numid}}</td>
        <td>{{item.username}}</td>
        <td>{{item.tel}}</td>
        <td>{{item.state}}</td>
        <td>{{item.time}}</td>
    </tr>
</table>
</div>
</template>

<script>
export default {
    computed: {
        packages: function () {
            return this.$store.getters.getpackages;
        }
    },

}
</script>


<style>
table.gridtable {
	font-family: verdana,arial,sans-serif;
	font-size:11px;
	color:#333333;
	border-width: 1px;
	border-color: #666666;
	border-collapse: collapse;
}
table.gridtable th {
	border-width: 1px;
	padding: 8px;
	border-style: solid;
	border-color: #666666;
	background-color: #dedede;
}
table.gridtable td {
	border-width: 1px;
	padding: 8px;
	border-style: solid;
	border-color: #666666;
	background-color: #ffffff;
}
.main {
  text-align: center;
  
}

</style>