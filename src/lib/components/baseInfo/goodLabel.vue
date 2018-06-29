<template>
  <div class="good-label">
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
  </div>
</template>

<script>
  export default {
    name: "good-label",
    data() {
      return {
        selectValue: []
      }
    },
    props: ['options','value'],
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
      handleChange(value) {
        console.log(value);
      }
    }
  }
</script>

<style scoped>
  .good-label .el-select {
    width: 100%;
  }
</style>
