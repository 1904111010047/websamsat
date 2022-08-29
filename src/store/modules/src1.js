import Svc1 from '@/utils/usrc1';

export const src1 = {
    namespaced: true,
    state:{
        atas:[],
        bawah:[],
        carousel:[],
        layanan_umum:[],
        syarat_keringanan:[],
        syarat_tahunan:[],
        syarat_ganti_stnk:[],
        alur_layanan:[],
        self_samsat:[],
        news:[],
        faqs:[]
    },
    actions:{
        home({state}){
            //return new Promise((resolve, reject)=>{
                return Svc1.home().then(
                hasil => {
                    state.atas=hasil.data.details.wilsamsat
                    state.bawah=hasil.data.details.lynsamsat.unggulan
                    state.carousel=hasil.data.details.carousel
                    state.layanan_umum=hasil.data.details.lynsamsat.umum
                    state.syarat_keringanan=hasil.data.details.syarat_prov.keringanan.persyaratan
                    state.syarat_tahunan=hasil.data.details.syarat_prov.tahunan
                    state.syarat_ganti_stnk=hasil.data.details.syarat_prov.ganti_stnk
                    state.alur_layanan=hasil.data.details.alur
                    state.self_samsat=hasil.data.details.selfsamsat
                    state.news=hasil.data.details.news
                    state.faqs=hasil.data.details.faq
                    //console.log(hasil.data.details)
                }).catch(error => {
                    //reject(error)
                    console.log(error)
                })
            //})
        }
    },
    getters: {
        getdetail_carousel: (state) => (id) => {
          return state.carousel.find(detx => detx.text === id)
        }
    }
}