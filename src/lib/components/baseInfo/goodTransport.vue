<template>
  <div class="good-transport">
    <el-select
      v-model="selectValue"
      filterable
      placeholder="请选择">
      <el-option
        v-for="item in options"
        :key="item.id"
        :label="item.name"
        :value="item.id">
      </el-option>
    </el-select>
    <span v-if="value" @click="isShowDetail=!isShowDetail">
      <span class="click_text" v-if="isShowDetail" >收起详情</span>
      <span class="click_text" v-if="!isShowDetail">展开详情</span>
    </span>

    <el-table
      v-if="value&&isShowDetail"
      :data="curRow"
      border
      style="width: 100%">
      <el-table-column
        prop="first"
        label="首件">
      </el-table-column>
      <el-table-column
        prop="firstCost"
        label="首件费用">
      </el-table-column>
      <el-table-column
        prop="more"
        label="续件">
      </el-table-column>
      <el-table-column
        prop="moreCost"
        label="续件费用">
      </el-table-column>
      <el-table-column
        prop="remark"
        label="备注"
        min-width="120">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    name: "good-transport",
    data() {
      return {
        isShowDetail:true,
        selectValue: []
      }
    },
    props: ['options','value'],
    watch: {
      value(val){
        this.selectValue=val;
      },
      selectValue(val) {
        this.$emit('input', val)
      }
    },
    computed:{
      curRow(){
        var element={}
        for(var i=0;i<this.options.length;i++){
          if(this.options[i].id==this.value){
            element=this.options[i];
            break;
          }
        }
        var ary=[];
        if(element){
          ary.push(element)
        }
        return ary;
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

</style>
