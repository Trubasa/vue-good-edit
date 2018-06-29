<template>
  <div id="app">
    <good-edit
      ref="goodEditVue">
    </good-edit>


    <vue-picture-manager
      ref="pictureManager"
      :upload-path="uploadPath"
      :img-list="imgList"
      @upload-response="uploadResponse"
      @delete="deleteHandler"
      @selected="selected">
    </vue-picture-manager>

  </div>
</template>

<script>
  export default {
    name: 'app',
    data() {
      return {
        uploadPath:'http://localhost:8088/smallappM/vender/goodsInfo/uploadImg',
        selectedList: [],
        isShow: false,
        msg: 'Welcome to Your Vue.js App',
        imgList: []
      }
    },
    mounted:function () {
      //如果从第一个步骤开始，需要该赋值
      if(this.$refs.goodEditVue&&this.$refs.goodEditVue.baseInfoVue&&this.$refs.goodEditVue.baseInfoVue.basicData){
        this.$refs.goodEditVue.baseInfoVue.basicData.goodCategory=baseInfo.goodCategory
        this.$refs.goodEditVue.baseInfoVue.basicData.goodGroup=baseInfo.goodGroup
        this.$refs.goodEditVue.baseInfoVue.basicData.goodLabel=baseInfo.goodLabel
        this.$refs.goodEditVue.baseInfoVue.basicData.goodTransport=baseInfo.goodTransport
      }

      this.imgList=primevalImgList.map(function (ele) {
        return ele.url;
      })
    },
    methods: {
      deleteHandler(url){
        this.$message.info('删除的图片url为：'+url);
      },
      showPicManager() {
        var that = this;
        // this.isShow=true;
        this.$refs.pictureManager.show({
          defaultUrlList: [],  //默认选中的图片的地址数组
          ensureFun: function (res) {  //选中图片后点击'确定'的回调，返回选中的图片数组
            that.selectedList = res
          }
        });
      },
      uploadResponse(res){
        console.log(res);
        if(res.code==0){
          this.$message.success('上传成功')
        }else{
          this.$message.error('上传失败')
        }
      },
      selected(val) {
        console.log('选中的图片url：', val);
      }
    }
  }
</script>

<style>

</style>
