import Vue from 'vue'
import Vuex  from 'vuex'

import { src1 } from './modules/src1'
import {src2} from './modules/src2'

Vue.use(Vuex)
export default new Vuex.Store(
    {
        modules:{
            src1,
            src2
        }
    }
)