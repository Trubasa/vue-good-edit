/**
 * Created by Trubasa 1141521502@qq.com on 2018/6/26.
 */
var baseInfo = {
  goodTransport:[{
    id:'1',
    name:'默认配置',
    first:'1',
    firstCost:'12',
    more:'1',
    moreCost:'2',
    remark:'所有地区'
  },{
    id:'2',
    name:'仅限珠三角',
    first:'10',
    firstCost:'20',
    more:'10',
    moreCost:'5',
    remark:'仅限珠三角'
  },{
    id:'3',
    name:'所有地区（偏远地区除外）',
    first:'5',
    firstCost:'10',
    more:'1',
    moreCost:'2',
    remark:'所有地区（偏远地区除外）'
  },{
    id:'4',
    name:'虚拟商品',
    first:'0',
    firstCost:'0',
    more:'0',
    moreCost:'0',
    remark:'虚拟商品，虚拟商品不需要运费'
  }],
  goodCategory: [{
    value: 'shipin',
    label: '食品',
    children: [{
      value: 'jinkoulingshi',
      label: '进口零食',
    }, {
      value: 'xiuxianlingshi',
      label: '休闲零食'
    }, {
      value: 'yinyangbaojian',
      label: '营养保健',
    }],
  },{
    value: 'meizhuanghufu',
    label: '美妆护肤',
    children: [{
      value: 'xiangshui',
      label: '香水',
    }, {
      value: 'toufa',
      label: '美发/护发/假发'
    }, {
      value: 'kouqiang',
      label: '口腔护理',
    }],
  },{
    value: 'fushi',
    label: '服饰',
    children: [{
      value: 'nvzhuang',
      label: '女装',
    }, {
      value: 'nanzhuang',
      label: '男装'
    }],
  },],
  goodImgList:[],
  goodGroup:[{
    value: '1',
    label: '分组1',
    children: [{
      value: '4',
      label: '分组4',
    }, {
      value: '5',
      label: '分组5',
      children:[{
          value: '6',
          label: '分组6'
      }]
    }]
  },{
    value: '2',
    label: '分组2'
  },{
    value: '3',
    label: '分组2'
  },],
  goodLabel:[{
    value: 'fashion',
    label: '时尚'
  },{
    value: 'cheap',
    label: '折扣'
  },{
    value: 'hot',
    label: '热门'
  },]
}


var primevalImgList=[
  {
    id: '2',
    url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1528290656336&di=4e0f860cb8a078356935dbfd77303071&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01b34e595da4c1a8012193a3b0a930.jpg%402o.jpg'
  },
  {
    id: '3',
    url: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3650821734,216302652&fm=27&gp=0.jpg'
  },
  {
    id: '4',
    url: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=863946972,1320437579&fm=27&gp=0.jpg'
  },
  {
    id: '5',
    url: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2331418472,997892443&fm=27&gp=0.jpg'
  },
  {
    id: '6',
    url: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2168851560,2127087326&fm=27&gp=0.jpg'
  },
  {
    id: '7', url: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=189016275,904273216&fm=27&gp=0.jpg'
  },
  {
    id: '8',
    url: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3624658227,1873430595&fm=27&gp=0.jpg'
  },
  {
    id: '9',
    url: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2269707447,3312642447&fm=27&gp=0.jpg'
  },
  {
    id: '10',
    url: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4076705715,3109825956&fm=27&gp=0.jpg'
  },
  {
    id: '11',
    url: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1643364463,3040105054&fm=27&gp=0.jpg'
  },
  {
    id: '12',
    url: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3957931430,771077774&fm=27&gp=0.jpg'
  },
  {
    id: '1',
    url: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=4024491638,1929347796&fm=27&gp=0.jpg'
  },
]
