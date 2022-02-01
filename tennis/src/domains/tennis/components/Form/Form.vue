<template>
  <div>
    <h2>Vuelidate - Form Validation</h2>
    <form @submit.prevent="handleSubmit">
        <div class="form-group">
            <label for="firstName">First Name</label>
            <input type="text" 
              v-model="user.firstName" 
              name="firstName" 
              class="form-control" 
              :class="{ 'is-invalid': submitted && $v.user.firstName.$error }" />
              <div v-if="submitted && $v.user.firstName.$error" class="invalid-feedback">
                <span v-if="!$v.user.firstName.required">firstName is required</span>
                <span v-if="!$v.user.firstName.minLength">firstName required 4 characters minimum</span>
              </div>
        </div>

        <div class="form-group">
            <label for="lastName">Last Name</label>
            <input type="text" 
              v-model="user.lastName" 
              name="lastName" 
              class="form-control" 
              :class="{ 'is-invalid': submitted && $v.user.lastName.$error }" />
              <div v-if="submitted && $v.user.lastName.$error" class="invalid-feedback">
                <span v-if="!$v.user.lastName.required">lastName is required</span>
                <span v-if="!$v.user.lastName.minLength">lastName required 4 characters minimum</span>
              </div>
        </div>

        <div class="form-group">
            <label for="email">Email</label>
            <input type="email" 
              v-model="user.email" 
              name="email" 
              class="form-control" 
              :class="{ 'is-invalid': submitted && $v.user.email.$error }" />
            <div v-if="submitted && $v.user.email.$error" class="invalid-feedback">
                <span v-if="!$v.user.email.required">Email is required</span>
                <span v-if="!$v.user.email.email">Email is invalid</span>
            </div>
        </div>

        <div class="form-group">
            <label for="password">Password</label>
            <input type="password" 
              v-model="user.password" 
              name="password" 
              class="form-control" 
              :class="{ 'is-invalid': submitted && $v.user.password.$error }" />
            <div v-if="submitted && $v.user.password.$error" class="invalid-feedback">
                <span v-if="!$v.user.password.required">Password is required</span>
                <span v-if="!$v.user.password.minLength">Password must be at least 6 characters</span>
            </div>
        </div>

        <div class="form-group">
            <label for="confirmPassword">Confirm Password</label>
            <input type="password" 
              v-model="user.confirmPassword" 
              name="confirmPassword" 
              class="form-control" 
              :class="{ 'is-invalid': submitted && $v.user.confirmPassword.$error }" />
            <div v-if="submitted && $v.user.confirmPassword.$error" class="invalid-feedback">
                <span v-if="!$v.user.confirmPassword.required">Confirm Password is required</span>
                <span v-else-if="!$v.user.confirmPassword.sameAsPassword">Passwords must match</span>
            </div>
        </div>

        <div class="form-group">
            <button class="btn btn-primary">Register</button>
        </div>
    </form>
  </div>
</template>

<script>
import { required, email, minLength, sameAs } from "vuelidate/lib/validators";
import { validationMixin } from 'vuelidate';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
export default {
  data() {
      return {
          user: {
              firstName: "",
              lastName: "",
              email: "",
              password: "",
              confirmPassword: ""
          },
          submitted: false
      };
  },
  mixins: [validationMixin],
  validations: {
      user: {
          firstName: { required, minLength: minLength(4) },
          lastName: { required, minLength: minLength(4) },
          email: { required, email },
          password: { required, minLength: minLength(6) },
          confirmPassword: { required, sameAsPassword: sameAs('password') }
      }
  },
  methods: {
      handleSubmit() {
          this.submitted = true;

          // stop here if form is invalid
          this.$v.$touch();
          if (this.$v.$invalid) {
              return;
          }

          alert("SUCCESS!! :-)\n\n" + JSON.stringify(this.user));
      }
  }
};
</script>

<style src="./form.css"></style>