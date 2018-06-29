<template>
  <div class="good-img-list">
    <div class="img_list_box">
      <vue-img-sort :key="dateKey"
                    ref="vueImgSort"
                    :img-list="localImgList"
                    @delete="deleteItem"
                    @sorted="sorted">
      </vue-img-sort>
    </div>

  </div>
</template>

<script>
  export default {
    name: "good-img-list",
    data() {
      return {
        dateKey:'',
        selectValue: [],
        localImgList:[]
        /*imgList:[{
          id: 1,
          url: 'https://placeimg.com/195/400/any?1',
        }, {
          id: 2,
          url: 'http://img5.imgtn.bdimg.com/it/u=1666831888,2888550101&fm=200&gp=0.jpg',
        }, {
          id: 3,
          url: 'https://placeimg.com/400/195/any?2',
        }]*/
      }
    },
    props: ['primevalImgList','value'],
    watch: {
      primevalImgList(){


      },
      value(val) {
        this.dateKey=new Date().getTime();
        console.log('value', val);
        if (val) {
          var ary = val.split(',');
          this.localImgList = this.mapData(ary,this.primevalImgList,'id');
        } else {
          this.localImgList = []
        }
      },
      localImgList(val) {
        this.$emit('input', val.map(function (ele) {
          return ele.id;
        }).join(','))
      }
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
      deleteItem(data){
        console.log(data);
        // console.log('被删除的数据',data.url);
      },
      sorted(list) {
        this.localImgList=list;
        console.log('sortedList',list);
       /* this.$emit('input', list.map(function (ele) {
          return ele.id;
        }).join(','))*/
      },
      handleChange(value) {
        console.log(value);
      }
    }
  }
</script>

<style scoped>
  .good-img-list .el-select {
    width: 100%;
  }

</style>
<style>
  .item-content>img {
    display: block;
    border-radius: 6px;
    height: 160px !important;
  }
</style>
