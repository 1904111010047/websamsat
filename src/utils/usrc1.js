import axios from 'axios';

//const url='https://samsat.acehprov.go.id/wesamsatbck/st/v1/';
const url=process.env.VUE_APP_URL1+'/st/v1/';
const host = window.location.host;

console.log(host);
class Svc1{
    home(){
        return axios.get(url + 'home');
    }
}

export default new Svc1();