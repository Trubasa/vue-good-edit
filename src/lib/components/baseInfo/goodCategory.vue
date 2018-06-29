<template>
  <div class="good-category">
    <!--<input type="text">-->
    <el-cascader
      :options="options"
      filterable
      separator=">"
      v-model="selectedOptions"
      @change="handleChange">
    </el-cascader>
  </div>
</template>

<script>
  export default {
    name: "good-category",
    data(){
      return {
        selectedOptions:[]
      }
    },
    props:['options','value'],
    watch:{
      value(val){
        console.log('value',val);
        if(val){
          var ary=val.split(',');
          this.selectedOptions=ary;
        }else{
          this.selectedOptions=[]
        }
      },
      selectedOptions(val){
        this.$emit('input',val.join(','))
      }
    },
    methods: {
      handleChange(value) {
        console.log(value);
      }
    }
  }
</script>

<style scoped>
.good-category{
  display: inline-block;
}
</style>
