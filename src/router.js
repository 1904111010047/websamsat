import Vue from 'vue'
import Router from 'vue-router'
import store from './store'

//Public Layout
import Home from '@/views/Home.vue'
import Home2 from '@/views/Home2.vue'
import About from '@/views/About.vue'
import Details from '@/views/Details.vue'
import Info_pajak from '@/views/Info_Pajak.vue'
import Info_publik from '@/views/Info_Publik.vue'
import Detail_layanan from '@/views/Detail_Layanan.vue'
import Profil from '@/views/Profil.vue'
import Persyaratan from '@/views/Persyaratan.vue'
import Alur from '@/views/Alur.vue'
import Detail_news from '@/views/Detail_news.vue'
import Faq from '@/views/Faq.vue'
import Berita from '@/views/Berita.vue'
import Agenda from '@/views/Agenda.vue'
import Regulasi from '@/views/Regulasi.vue'
import Laporan from '@/views/Laporan.vue'
import Pengumuman from '@/views/Pengumuman.vue'

//Layout
import PublicLayout from '@/layouts/Public.vue'
import AdminLayout from '@/layouts/Admin.vue'

//Admin Layout
import Login from '@/admviews/Login.vue'
import Home_admin from '@/admviews/Home.vue'
import Profile_admin from '@/admviews/Profile.vue'
import Media from '@/admviews/Media.vue'
import Post from '@/admviews/Post.vue'

//import ViewPost from '@/admviews/ViewPost.vue'

Vue.use(Router)

const routes =[
    {
        path: '/',
        component: PublicLayout,
        children: [
            {
                path:'',
                component:Home2
            },
            {
                path: '/2',
                name: 'home',
                component: Home
            },
            {
                path: '/about',
                name: 'about',
                component: About
            },
            {
                path: '/details',
                name: 'details',
                component: Details
            },
            {
                path: '/info-pajak',
                name: 'info-pajak',
                component: Info_pajak
            },
            {
                path: '/info-publik',
                name: 'info-publik',
                component: Info_publik
            },
            {
                path: '/detail_layanan/:idlayanan',
                name: 'detail_layanan',
                component: Detail_layanan
            },
            {
                path: '/profil',
                name: 'profil',
                component: Profil
            },
            {
                path: '/persyaratan',
                name: 'persyaratan',
                component: Persyaratan
            },
            {
                path: '/alur',
                name: 'alur',
                component: Alur
            },
            {
                path: '/detail_news/:idnews',
                name: 'detail_news',
                component: Detail_news
            },
            {
                path: '/faq',
                name: 'faq',
                component: Faq
            },
            {
                path: '/Berita',
                name: 'Berita',
                component: Berita
            },
            {
                path: '/Agenda',
                name: 'Agenda',
                component: Agenda
            },
            {
                path: '/Regulasi',
                name: 'Regulasi',
                component: Regulasi
            },
            {
                path: '/Laporan',
                name: 'Laporan',
                component: Laporan
            },
            {
                path: '/Pengumuman',
                name: 'Pengumuman',
                component: Pengumuman
            },
            
        ]
    },
    {
        path: '/admin',
        name:"admin",
        component: AdminLayout,
        children: [
            {
                path:'',
                name:"home",
                component:Home_admin,
                meta: { requiresAuth: true },
            },
            {
                path:'login',
                component:Login
            },
            {
                path:'profile',
                name:"profile",
                component:Profile_admin,
                meta: { requiresAuth: true },
            },
            {
                path:'post',
                name:"post",
                component:Post,
                meta: { requiresAuth: true },
            },
            {
                path:'media',
                component:Media,
                meta: { requiresAuth: true },
            }

        ]
    },
]

const router= new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

  
router.beforeEach((to, from, next)=>{
    if(to.matched.some(record => record.meta.requiresAuth)){
        if(store.state.src2.username!=null){
            next()
        return
        }
        next('/admin/login')
    }else{
        next()
    }
})
  
  export default router;