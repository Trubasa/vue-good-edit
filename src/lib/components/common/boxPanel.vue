<template>
  <div class="box-panel">
    <slot name="con"></slot>
  </div>
</template>

<script>
  export default {
    name: "box-panel",
    data(){
      return {

      }
    },
    mounted(){

    },
    methods: {

    }
  }
</script>

<style scoped>
.box-panel{
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.5);
}
</style>
