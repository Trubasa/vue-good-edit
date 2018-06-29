<template>
  <div class="good-edit">

    <div class="step_panel">
      <el-steps :active="activeStep" align-center finish-status="success">
        <el-step title="基本信息" description=""></el-step>
        <el-step title="详细信息" description=""></el-step>
        <el-step title="其他信息" description=""></el-step>
      </el-steps>
    </div>

    <div class="edit_panel_box">
      <div class="edit_panel" v-if="activeStep==0">
        <base-info ref="baseInfo" @next="nextStep"></base-info>
      </div>
      <div class="edit_panel" v-if="activeStep==1">
        <detail-info @pre="preStep" @next="nextStep"></detail-info>
      </div>
      <div class="edit_panel" v-if="activeStep==2">
        <other-info @pre="preStep" @next="nextStep"></other-info>
      </div>
    </div>


  </div>
</template>

<script>
  export default {
    name: 'good-edit',
    data() {
      return {
        activeStep: 0,
        msg: 'Welcome to Your Vue.js App 23'
      }
    },
    computed: {
      baseInfoVue() {
        return this.$refs.baseInfo
      },
    },
    mounted() {

    },
    methods: {
      nextStep() {
        this.activeStep++;
      },
      preStep() {
        this.activeStep--;
      },
    }
  }
</script>

<style>
  .good-edit {
    padding: 10px;
  }

  .step_panel {
    padding: 10px 10px 20px;
  }

  .edit_panel {
    margin: 0 auto;
    max-width: 1000px;
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
  }

  .edit_panel_box {
    /*background-color: #efefef;*/
    padding: 20px 0;
  }

  .good-edit .el-radio-group label {
    background-color: #fff;
  }
</style>

