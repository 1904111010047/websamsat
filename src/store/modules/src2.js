import axios from "axios";
const url=process.env.VUE_APP_URL1+'/st/v1/';


const userx = JSON.parse(localStorage.getItem('a12samsataceh'));
const userx1=userx ? userx.username : null;
const userx2=userx ? userx.token : null;
export const src2 = {
    namespaced: true,
    state:{
        isloading:false,
        username: userx1,
        token:userx2
    },
    actions:{
        LogIn({state},user) {
            state.isloading = true
            return axios.post(url + "login", {
                username: user.username,
                password: user.password
            }).then(response => {
                
                if(response.data.rc=='00') {
                  localStorage.setItem('a12samsataceh', JSON.stringify(response.data.details));
                  state.username=response.data.details.username;
                  state.token=response.data.details.token;
                  return response.data;
                }
                
                if(response.data.rc !='00'){
                    return response.data;
                }
              });
        },
        LogOut({commit}){
            localStorage.removeItem('a12samsataceh');
            let user = null;
            commit("logout", user);
        }
    },
    mutations:{
        setUsername(state,username){
            state.username= username
        },
        logout(state,user){
            state.username=user
        }
    },
    getters:{
        isAuthenticated: (state) => !!state.username,
    }
}