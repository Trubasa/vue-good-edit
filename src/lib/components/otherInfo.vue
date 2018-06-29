<template>
  <div class="other-info">
    <panel-title title="其他信息"></panel-title>

    <el-form :model="otherForm" :rules="rules" ref="otherForm" label-width="120px" class="demo-otherForm">
      <el-form-item label="初始销量" prop="originalSales">
        <el-input v-model="otherForm.originalSales" type="number" min="0" style="max-width: 200px;"></el-input>
      </el-form-item>
      <el-form-item label="会员价" prop="isUseVipPrice">
        <el-switch
          v-model="otherForm.isUseVipPrice">
        </el-switch>
      </el-form-item>
      <el-form-item label="库存计算方式" prop="calculateType">
        <el-radio-group v-model="otherForm.calculateType">
          <el-radio :label="1">下单减库存<span class="explain">（可能存在恶拍风险）</span></el-radio>
          <el-radio :label="2">支付减库存</el-radio>
        </el-radio-group>
        <span class="explain"></span>
      </el-form-item>
      <el-form-item label="上架时间" prop="putawayType">
        <el-radio-group v-model="otherForm.putawayType">
          <el-radio :label="1">立即上架</el-radio>
          <el-radio :label="2">暂不上架</el-radio>
          <el-radio :label="3">定时上架</el-radio>

          <div class="date_box" v-if="otherForm.putawayType=='3'">
            <el-date-picker
              v-model="otherForm.putawayTime"
              type="datetime"
              placeholder="选择日期时间"
              default-time="24:00:00">
            </el-date-picker>
          </div>

        </el-radio-group>
        <span class="explain"></span>
      </el-form-item>
      <el-form-item>
        <el-button type="" @click="$emit('pre')">上一步</el-button>
        <el-button type="primary" @click="submitForm('otherForm')">保存</el-button>
      </el-form-item>
    </el-form>


  </div>
</template>

<script>
  export default {
    name: "other-info",
    data() {
      var that=this;
      var putawayTypeVerify = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('上架时间必选'));
        }
        if(value=='3'&&!that.otherForm.putawayTime){
          return callback(new Error('请选择上架时间'));
        }
        return callback();
      };

      return {
        otherForm: {
          originalSales:0,
          isUseVipPrice:false,
          calculateType:'',
          putawayType:'',
          putawayTime:''
        },
        rules: {
          calculateType: [
            {required: true, message: '库存计算方式必选', trigger: 'change'}
          ],
          putawayType: [
            { validator: putawayTypeVerify, trigger: 'blur' }
          ],
        }
      };
    },
    mounted(){
      this.primevalImgList=primevalImgList
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          console.log(valid);
          if (valid) {
            this.$message.success('验证通过，可调用提交接口');
            this.$emit('next');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
    }
  }
</script>

<style scoped>
  .other-info{
    max-width: 700px;
    margin: 0 auto;
  }
.date_box{
  padding-left: 20px;
  display: inline-block;
}
</style>
<style>
   .vue-img-sort .delete_item {
    line-height: normal;
  }

</style>
