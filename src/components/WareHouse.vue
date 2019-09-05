<template>
   <div>
       <h1>包裹入库</h1>
   <a-form
    :form="form"
    @submit="handleSubmit"
   >
    <a-form-item
      label="运单号"
      :label-col="{ span: 5 }"
      :wrapper-col="{ span: 12 }"
    >
   <a-input
        v-decorator="[
          'numid',
          {rules: [{ required: true, message: 'Please input your note!' }]}
        ]" 
    />
    </a-form-item>
    <a-form-item
      label="收件人"
      :label-col="{ span: 5 }"
      :wrapper-col="{ span: 12 }"
    >
    <a-input
        v-decorator="[
          'username',
          {rules: [{ required: true, message: 'Please input your note!' }]}
        ]" 
    />
    </a-form-item>
    <a-form-item
      label="电话"
      :label-col="{ span: 5 }"
      :wrapper-col="{ span: 12 }"
    >
    <a-input
        v-decorator="[
          'tel',
          {rules: [{ required: true, message: 'Please input your note!' }]}
        ]"  
      />
    </a-form-item>
        <a-form-item
      label="重量"
      :label-col="{ span: 5 }"
      :wrapper-col="{ span: 12 }"
    >
    <a-input
        v-decorator="[
          'weight',
          {rules: [{ required: true, message: 'Please input your note!' }]}
        ]"  
      />
    </a-form-item>
    <a-form-item >
        <a-button 
        type="primary"
        html-type="submit"
        >
        入库
        </a-button>
    </a-form-item>
   </a-form>
   </div>
</template>

<script>
import axios from 'axios'
export default {
    data () {
        return {
        formLayout: 'horizontal',
        form: this.$form.createForm(this),
        numid:"",
        username:"",
        tel:"",
        weight:"",
        };
    },
    methods:{
        // warehouse:function(){
        //     const url = "http://localhost:8080/packages";
        //     axios.post(url,{
        //         numid:this.numid,
        //         username:this.username,
        //         tel:this.tel,
        //         weight:this.weight
        //     }).then(function(response){
        //        console.log("成功创建")
        //     }).catch(function(error){
        //        console.log(error.response);
        //     });
        // }
        handleSubmit (e) {
            e.preventDefault();
            this.form.validateFields((err, values) => {
              this.$store.dispatch('createPackage',values);
              if (!err) {
                console.log('Received values of form: ', values);
              }
          });
        }
    }

}
</script>

<style>

</style>