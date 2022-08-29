<template>
<body>
    <div class="block">
        <section class="container">
				<div class="columns is-variable ">
                    <!-- <div class="column">
                        Auto
                    </div> -->
					<div class="column" v-for="isi in detail " :key="isi.text">
                         <div class="card">
                    <!-- <h1 class="title has-text-centered">{{isi.title}}</h1> -->
                <div class="card-content">
                    <h1 class="title is-4">{{isi.title}}</h1>
                       <!-- <b-image
                        v-bind:src="isi.image"
                        placeholder="https://samsat.acehprov.go.id/fs/public/plc_holder.png"
                        ratio="901by235"
                        ></b-image> -->
						<!-- <p class="is-size-4">{{isi.content}}</p> -->
						<div><vue-editor style="display:none"></vue-editor></div>
						<div v-html="isi.content" class="ql-editor"></div>
                </div>
            </div>

                       
						
						
					</div>
					<!-- <div class="column has-text-left">
						<div class="field">
							<label class="label">Name</label>
							<div class="control">
								<input class="input is-medium" type="text">
							</div>
						</div>
						<div class="field">
							<label class="label">Email</label>
							<div class="control">
								<input class="input is-medium" type="text">
							</div>
						</div>
						<div class="field">
							<label class="label">Message</label>
							<div class="control">
								<textarea class="textarea is-medium"></textarea>
							</div>
						</div>
						<div class="control">
							<button type="submit" class="button is-link is-fullwidth has-text-weight-medium is-medium">Send Message</button>
						</div>
					</div> -->
				</div>
        </section>
    </div>
    
</body>
</template>
<script>
import { VueEditor } from "vue2-editor";
export default {
	components: {
    VueEditor
  },
    metaInfo:{
        titleTemplate: '%s - Detail',
    },
    data(){
        return{
            id:this.$route.params.idnews,
			seen:false
        }
    },
    computed: {
        detail(){
            //this.$store.state.src1.carousel
            return this.$store.state.src1.news.filter(todo => todo.id === this.id)
            //return this.$store.getters.src1.getdetail_carousel(this.id)
        }
    }
}
</script>