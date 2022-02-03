<template>
  <div>
    <h2>Ajouter un nouveau joueur</h2>
    <form @submit.prevent="handleSubmit">
        <div class="form-group">
            <label for="firstname">Prénom</label>
            <input type="text" 
              v-model="newPlayer.firstname" 
              name="firstname" 
              class="form-control" 
              :class="{ 'is-invalid': submitted && $v.newPlayer.firstname.$error }" />
              <div v-if="submitted && $v.newPlayer.firstname.$error" class="invalid-feedback">
                <span v-if="!$v.newPlayer.firstname.required">firstname is required</span>
                <span v-if="!$v.newPlayer.firstname.minLength">firstname required 4 characters minimum</span>
              </div>
        </div>

        <div class="form-group">
            <label for="lastname">Nom</label>
            <input type="text" 
              v-model="newPlayer.lastname" 
              name="lastname" 
              class="form-control" 
              :class="{ 'is-invalid': submitted && $v.newPlayer.lastname.$error }" />
              <div v-if="submitted && $v.newPlayer.lastname.$error" class="invalid-feedback">
                <span v-if="!$v.newPlayer.lastname.required">lastname is required</span>
                <span v-if="!$v.newPlayer.lastname.minLength">lastname required 4 characters minimum</span>
              </div>
        </div>
        <div class="form-group">
            <button class="btn btn-primary">Ajouter</button>
        </div>
    </form>
  </div>
</template>

<script>
import { required, minLength } from "vuelidate/lib/validators";
import { validationMixin } from 'vuelidate';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Vuex from 'vuex'
export default {
  data() {
      return {
          newPlayer: {
              firstname: "",
              lastname: "",
          },
          submitted: false
      };
  },
  mixins: [validationMixin],
  validations: {
      newPlayer: {
          firstname: { required, minLength: minLength(4) },
          lastname: { required, minLength: minLength(4) }
      }
  },
  methods: {
  
    ...Vuex.mapActions(["addPlayer"]),
    handleSubmit(event) {
      this.submitted = true;
      this.$v.$touch();
          if (this.$v.$invalid) {
              return;
          }
      event.preventDefault();
      this.addPlayer({firstname : this.newPlayer.firstname, lastname: this.newPlayer.lastname});
      this.$router.push('/'); 
  }
  }
}
</script>

<style src="./addPlayer.css"></style>