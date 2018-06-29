<template>
  <div>
    <panel-title title="基本信息"></panel-title>
    <UEditor :config=config ref="ueditor"></UEditor>
    <br>
    <el-button type=""   icon="plus" @click="$emit('pre')">上一步</el-button>
    <el-button type="primary"   icon="plus" @click="getContent">下一步</el-button>
  </div>
</template>

<script>
  import UEditor from './detailInfo/ueditor.vue'

  export default {
    name: 'detail-info',
    components: {UEditor},
    data() {
      return {
        config: {
          //可以在此处定义工具栏的内容
          // toolbars: [
          //  ['fullscreen', 'undo', 'redo','|','bold', 'italic', 'underline',
          //  '|','superscript','subscript','|', 'insertorderedlist', 'insertunorderedlist',
          //  '|','fontfamily','fontsize','justifyleft','justifyright','justifycenter','justifyjustify']
          // ],
          autoHeightEnabled: false,
          autoFloatEnabled: true,
          initialContent: '请输入内容',   //初始化编辑器的内容,也可以通过textarea/script给值，看官网例子
          autoClearinitialContent: true, //是否自动清除编辑器初始内容，注意：如果focus属性设置为true,这个也为真，那么编辑器一上来就会触发导致初始化的内容看不到了
          initialFrameWidth: null,
          initialFrameHeight: 450,
          BaseUrl: '',
          UEDITOR_HOME_URL: 'static/ueditor/'
        },
        addFormVisible: false
      }
    },
    methods: {
      //获取文档内容
      getContent: function () {
        let content = this.$refs.ueditor.getUEContent();
        console.log(content);
        alert(content);
        this.$emit('next')
      }
    }
  }
</script>
