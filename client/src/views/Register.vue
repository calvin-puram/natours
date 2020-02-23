<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 mx-auto xs-12 mt-12">
        <v-form ref="form" v-model="valid">
          <v-text-field
            v-model="name"
            :counter="20"
            :rules="nameRules"
            label="Name"
            required
          ></v-text-field>

          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
          ></v-text-field>

          <v-text-field
            v-model="password"
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required, rules.min]"
            :type="show1 ? 'text' : 'password'"
            name="input-10-1"
            label="Password"
            hint="At least 8 characters"
            counter
            @click:append="show1 = !show1"
          ></v-text-field>

          <v-text-field
            v-model="confirmPassword"
            :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required, rules.min]"
            :type="show2 ? 'text' : 'password'"
            name="input-10-1"
            label="Confirm Password"
            hint="At least 8 characters"
            counter
            @click:append="show2 = !show2"
          ></v-text-field>

          <div class=" d-flex justify-content-between align-items-center mt-4">
            <v-btn
              :disabled="!valid || authLoading"
              color="#009432"
              class="white--text "
              @click="handleSubmit"
            >
              <i class="fas fa-spin fa-spinner" v-if="authLoading"></i>
              {{ authLoading ? '' : 'Register' }}
            </v-btn>

            <router-link to="/login">Already have an account?</router-link>
          </div>
        </v-form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  computed: mapGetters(['getAuthErrors', 'authLoading']),
  data: () => ({
    valid: true,
    name: '',
    nameRules: [
      v => !!v || 'Name is required',
      v => (v && v.length <= 20) || 'Name must be less than 20 characters'
    ],
    show1: false,
    show2: false,
    password: '',
    confirmPassword: '',
    rules: {
      required: value => !!value || 'Required.',
      min: v => v.length >= 8 || 'Min 8 characters',
      emailMatch: () => "The email and password you entered don't match"
    },
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
    ]
  }),

  methods: {
    ...mapActions(['register']),
    handleSubmit() {
      if (this.$refs.form.validate()) {
        this.snackbar = true;
        const user = {
          name: this.name,
          email: this.email,
          password: this.password,
          passwordConfirm: this.confirmPassword
        };
        this.register(user).then(res => {
          if (res && res.data.success) {
            this.$router.push('/');
            this.$noty.success("You're registered successfully!");
          } else {
            this.$noty.error(this.getAuthErrors);
          }
        });
      }
    }
  }
};
</script>
