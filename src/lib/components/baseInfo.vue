<template>
  <div class="base-info">
    <panel-title title="基本信息"></panel-title>

    <el-form :model="goodForm" :rules="rules" ref="goodForm" label-width="100px" class="demo-goodForm">
      <el-form-item label="商品名称" prop="name">
        <el-input v-model="goodForm.name"></el-input>
      </el-form-item>

      <el-form-item label="商品图片" prop="imgList">
        <el-button type="primary" size="small" @click="selectImage">选择图片</el-button>
        <span class="explain">（拖拽可调整图片顺序，第一张为<span class="main_color">主图</span>）</span>
        <good-img-list
          v-model="goodForm.imgList"
          :primevalImgList="primevalImgList"
        ></good-img-list>
      </el-form-item>
      <el-form-item label="商品类目" prop="category">
        <good-category
          v-model="goodForm.category"
          :options="basicData.goodCategory">
        </good-category>
        <span class="remark">（选项不够？点击<span class="click_text">新增</span>）</span>
      </el-form-item>
      <el-form-item label="商品分组" prop="group">
        <good-category
          v-model="goodForm.group"
          :options="basicData.goodGroup">
        </good-category>
        <span class="remark">（选项不够？点击<span class="click_text">新增</span>）</span>
        <!--<good-group
          v-model="goodForm.group"
          :options="basicData.goodGroup">
        </good-group>-->
      </el-form-item>

      <el-form-item label="商品类型" prop="type">
        <el-radio-group v-model="goodForm.type">
          <el-radio border  :label="1">实物商品<span class="explain">（物流发货）</span></el-radio>
          <el-radio border  :label="2">海淘商品<span class="explain">（买家需填身份证）</span></el-radio>
          <el-radio border  :label="3">虚拟产品<span class="explain">（不进行实体发货）</span></el-radio>
        </el-radio-group>
      </el-form-item>

      <el-form-item label="商品标签" prop="label">
        <good-label
          v-model="goodForm.label"
          :options="basicData.goodLabel">
        </good-label>
      </el-form-item>
      <el-form-item label="运费设置" prop="transport">

        <good-transport
          v-model="goodForm.transport"
          :options="basicData.goodTransport">
        </good-transport>
      </el-form-item>


      <el-form-item label="备注" prop="desc">
        <el-input type="textarea" v-model="goodForm.desc"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm('goodForm')">下一步</el-button>
        <el-button @click="resetForm('goodForm')">重置</el-button>
      </el-form-item>
    </el-form>


  </div>
</template>

<script>
  export default {
    name: "base-info",
    data() {


      return {

        primevalImgList:[],

        basicData:{
          goodCategory:[],
          goodGroup:[],
          goodTransport:[]
        },

        goodForm: {
          group:'',
          type:'',
          category:'',
          name: '',
          desc: '',
          imgList:'',
          transport:''
        },
        rules: {
          name: [
            {required: true, message: '请输入商品名称', trigger: 'blur'},
            {min: 3, max: 100, message: '长度在 3 到 100 个字符', trigger: 'blur'}
          ],
          category: [
            {required: true, message: '请选择商品类别', trigger: 'change'}
          ],
          type:[
            {required: true, message: '请选择商品类型', trigger: 'change'}
          ],
          imgList:[
            {required: true, message: '请选择商品图片', trigger: 'change'}
          ],
          transport:[
            {required: true, message: '请选择运费类型', trigger: 'blur'}
          ],
        }
      };
    },
    mounted(){
      this.primevalImgList=primevalImgList
    },
    methods: {
      mapData(urlList,dataList,key){
        var ary=[];
        for(var i=0;i<urlList.length;i++){
          for(var j=0;j<dataList.length;j++){
            if(urlList[i]==dataList[j][key]){
              ary.push(dataList[j]);
              break;
            }
          }
        }
        return ary;
      },
      selectImage(){
        var that=this;
          window.appVue.$refs.pictureManager.show({
            defaultUrlList: that.goodForm.imgList!=''?that.mapData(that.goodForm.imgList.split(','),primevalImgList,'id').map(function (ele) {
              return ele.url
            }):[],  //默认选中的图片的地址数组
            ensureFun: function (res) {  //选中图片后点击'确定'的回调，返回选中的图片数组
              /*console.log(res);
              that.goodForm.imgList=res.join(',')*/

              console.log('选中的图片url：', res);

              var imgList=that.mapData(res,primevalImgList,'url');
              var ary=imgList.map(function (ele) {
                return ele.id
              });

              that.goodForm.imgList=ary.join(',')

            }
          });

      },
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

</style>
<style>
   .vue-img-sort .delete_item {
    line-height: normal;
  }
</style>
