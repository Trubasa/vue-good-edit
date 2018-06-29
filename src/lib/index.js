
//自定义样式与方法
import '../../static/common/common.css'
import '../../static/app/app.css'

//依赖
import vueImgSort from 'vue-img-sort'
import vuePictureManager from 'vue-picture-manager'


//组件
import goodEdit from './goodEdit'
import baseInfo from './components/baseInfo'
import goodCategory from './components/baseInfo/goodCategory'
import goodGroup from './components/baseInfo/goodGroup'
import goodLabel from './components/baseInfo/goodLabel'
import goodImgList from './components/baseInfo/goodImgList'
import panelTitle from './components/common/panelTitle'
import boxPanel from './components/common/boxPanel'
import goodTransport from './components/baseInfo/goodTransport'
import detailInfo from './components/detailInfo'
import otherInfo from './components/otherInfo'

const plugin={
  install(Vue, options) {
    Vue.use(vuePictureManager);
    Vue.use(vueImgSort)

    Vue.component(goodEdit.name, goodEdit);
    Vue.component(baseInfo.name, baseInfo);
    Vue.component(goodCategory.name, goodCategory);
    Vue.component(goodGroup.name, goodGroup);
    Vue.component(goodLabel.name, goodLabel);
    Vue.component(goodImgList.name, goodImgList);
    Vue.component(panelTitle.name, panelTitle);
    Vue.component(boxPanel.name, boxPanel);
    Vue.component(goodTransport.name, goodTransport);
    Vue.component(detailInfo.name, detailInfo);
    Vue.component(otherInfo.name, otherInfo);


  }
}


if(typeof window !=='undefined' && window.Vue){
  window.Vue.use(plugin)
  /*window.Vue.use(elementUI);
  window.Vue.use(vueImgSort);
  window.Vue.use(vuePictureManager);
  window.Vue.config.productionTip = false*/
}

/*new Vue({
  el: '#app',
  render: h => h(App)
})*/

export default plugin;
