<template>
  <div class="good-group">
    <el-select
      v-model="selectValue"
      multiple
      filterable
      placeholder="请选择">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>

    <el-cascader
      :options="options"
      filterable
      change-on-select
      separator=">"
      v-model="selectedOptions"
      @change="treeSelectChange"
    @blur="treeSelectBlur">
    </el-cascader>
  </div>
</template>

<script>
  export default {
    name: "good-group",
    data() {
      return {
        selectValue: [],
        selectedOptions:[]
      }
    },
    props: ['options', 'value'],
    watch: {
      value(val) {
        console.log('value', val);
        if (val) {
          var ary = val.split(',');
          this.selectValue = ary;
        } else {
          this.selectValue = []
        }
      },
      selectValue(val) {
        this.$emit('input', val.join(','))
      }
    },
    methods: {
      treeSelectBlur(){
        console.log(this.selectedOptions);
      },
      treeSelectChange(val){

      },
      handleChange(value) {
        console.log(value);
      }
    }
  }
</script>

<style scoped>
  .good-group .el-select {
    width: 100%;
  }
  .good-group .el-cascader{
    width:100%;
  }
</style>
