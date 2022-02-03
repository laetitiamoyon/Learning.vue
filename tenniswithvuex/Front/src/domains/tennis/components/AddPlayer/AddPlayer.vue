<template>
  <div>
    <h2>Ajouter un nouveau joueur</h2>
    <form @submit.prevent="handleSubmit">
        <div class="form-group">
            <label for="firstName">Prénom</label>
            <input type="text" 
              v-model="newPlayer.firstName" 
              name="firstName" 
              class="form-control" 
              :class="{ 'is-invalid': submitted && $v.newPlayer.firstName.$error }" />
              <div v-if="submitted && $v.newPlayer.firstName.$error" class="invalid-feedback">
                <span v-if="!$v.newPlayer.firstName.required">firstName is required</span>
                <span v-if="!$v.newPlayer.firstName.minLength">firstName required 4 characters minimum</span>
              </div>
        </div>

        <div class="form-group">
            <label for="lastName">Nom</label>
            <input type="text" 
              v-model="newPlayer.lastName" 
              name="lastName" 
              class="form-control" 
              :class="{ 'is-invalid': submitted && $v.newPlayer.lastName.$error }" />
              <div v-if="submitted && $v.newPlayer.lastName.$error" class="invalid-feedback">
                <span v-if="!$v.newPlayer.lastName.required">lastName is required</span>
                <span v-if="!$v.newPlayer.lastName.minLength">lastName required 4 characters minimum</span>
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
export default {
  data() {
      return {
          newPlayer: {
              firstName: "",
              lastName: "",
          },
          submitted: false
      };
  },
  mixins: [validationMixin],
  validations: {
      newPlayer: {
          firstName: { required, minLength: minLength(4) },
          lastName: { required, minLength: minLength(4) },
      }
  },
  props: ['players', 'addPlayer'],
  methods: {
      handleSubmit () {
          this.submitted = true;

          // stop here if form is invalid
          this.$v.$touch();
          if (this.$v.$invalid) {
              return;
          }

          alert("SUCCESS!! :-)\n\n" + JSON.stringify(this.newPlayer));
          this.addPlayer(this.newPlayer.firstName, this.newPlayer.lastName)
      }
  }
};
</script>

<style src="./addPlayer.css"></style>