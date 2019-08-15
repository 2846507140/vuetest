import Vue from 'vue'
import Router from 'vue-router'
import emplist from '@/components/emplist'
import empadd from '@/components/empadd'
import empupdate from '@/components/empupdate'
import uploadtest from '@/components/uploadtest'
import uploadtest2 from '@/components/uploadtest2'
Vue.use(Router)

export default new Router({
	mode:'history',
  routes: [
  {
  	 path: '/',
      name: 'emplist',
      component: emplist
  },
    {
      path: '/empadd',
      name: 'empadd',
      component: empadd
    },
    {
      path: '/empupdate',
      name: 'empupdate',
      component: empupdate
    },
    {
      path: '/uploadtest',
      name: 'uploadtest',
      component: uploadtest
    },
    {
      path: '/uploadtest2',
      name: 'uploadtest2',
      component: uploadtest2
    }
  ]
})
