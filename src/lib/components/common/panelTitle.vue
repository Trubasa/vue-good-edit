<template>
  <div class="panel-title">
    <h3>{{title}}</h3>
  </div>
</template>

<script>
  export default {
    name: "panel-title",
    data(){
      return {

      }
    },
    props:['title'],
    mounted(){

    },
    methods: {

    }
  }
</script>

<style scoped>
  .panel-title{
    position: relative;
    padding: 1px 20px;

  }
.panel-title:before{
  content:'';
  position: absolute;
  left: 0;
  width: 6px;
  top: 10px;
  bottom: 10px;
  background-color: #409eff;
}
</style>
