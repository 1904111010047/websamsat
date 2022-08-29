<template>
    <div class="container">
        <div class="card sa_01">
        <div class="card-content">
            <div class="content">
             <section>
                <h2 class="title has-text-centered">Samsat Bersama Kota Banda Aceh</h2>
                <form @submit.prevent="onSubmit">
                <b-field label="Username">
                    <b-input 
                        name="username" 
                        v-model="form.username"
                    ></b-input>
                </b-field>

                <b-field label="Password">
                    <b-input 
                        type="password"
                        name="password"
                        password-reveal
                        v-model="form.password"
                    ></b-input>
                </b-field>

                <div class="buttons">
                    <b-button 
                        type="is-light" 
                        @click="onSubmit"
                        :disabled='bt_login_disable'
                    >Login</b-button>
                </div>
                </form>
            </section>
            </div>
        </div>
        </div>
       
    </div>
</template>

<script>
export default {
    metaInfo:{
        titleTemplate: '%s - Login',
    },
    data() {
        return {
            form:{
                username:'',
                password:''
            },
            bt_login_disable:false,
            showError: false
        }
    },
    methods: {
        onSubmit(){
            if (this.form.username && this.form.password) {
                this.bt_login_disable=true

                this.$store.dispatch('src2/LogIn', this.form).then(
                    data => {
                    if(data.rc=="00"){
                        this.$router.push('/admin/profile')
                    }else{
                        this.$buefy.toast.open({
                            message: "Username atau Password Anda Salah",
                            type: 'is-danger'
                        })
                        this.bt_login_disable=false
                    }
                        this.bt_login_disable=false
                    },
                    error => {
                        this.bt_login_disable=true
                        console.log("131 "+error)
                    }
                )
                
            }
            
        }
    }
}
</script>

<style>
.sa_01{
    margin-top: 5rem;
    justify-content: center
}

.sa_11{
    align-items: center;
    
}
</style>