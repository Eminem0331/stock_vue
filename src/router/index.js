import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

export default new VueRouter({
    routes: [

        {
            path: '/',
            component: () => import('@/views/navmenu'),
            name:"主页",
            children:[
                {
                    path: '/one',
                    name:"测试表格",
                    component: () => import('@/views/chartone')
                },
                {
                    path: '/view/factorlib/list',
                    name:"测试可视化",
                    component: () => import('@/views/formtwo')
                },
                                {
                    path: '/view/factorlib/universe',
                    name:"股票池选项",
                    component: () => import('@/views/stock')
                },

            ]

        },
        {
                            path: '/factor',
                            name:"因子",
                            component: () => import('@/views/factor_1'),
        }



    ]
})