<template>
  <div>
  <h1>预约取件</h1>
  <a-form
    :form="form"
    @submit="handleSubmit"
   >
    <a-form-item
      label="运单号"
      :label-col="{ span: 5 }"
      :wrapper-col="{ span: 12 }"
    >
        <a-input />
    </a-form-item>
    <a-form-item
      label="取件时间"
      :label-col="{ span: 5 }"
      :wrapper-col="{ span: 12 }"
    >
    <a-input
        v-decorator="[
          'note',
          {rules: [{ required: true, message: 'Please input your note!' }]}
        ]"
    />
    </a-form-item>
     <a-form-item >
        <a-button >预约</a-button>
        <a-button >取消</a-button>
      </a-form-item>
   </a-form>
   </div>
</template>

<script>
export default {

}
</script>

<style>

</style>