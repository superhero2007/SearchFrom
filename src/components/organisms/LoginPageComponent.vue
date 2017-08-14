<template>
  <v-container>
      <v-layout class="pa-4">
        <v-flex xs12>
          <h3 class="text-xs-center grey--text text--darkten-1">Login to Cross-Platform Search</h3>
        </v-flex>
      </v-layout>
      <v-layout class="pa-4">
        <v-flex xs6 offset-xs3 v-if="error">≠
          <h6 class="text-xs-center red--text text--darkten-4">You have entered an invalid username or password</h6>
        </v-flex>
        <v-flex xs8 offset-xs2>
          <v-text-field type="text" name="user-name" label="Username" id="user-name" v-model="credentials.username" class="aaa"></v-text-field>
          <v-text-field name="input-10-1" label="Password" v-model="credentials.password" :append-icon="e1 ? 'visibility' : 'visibility_off'" :append-icon-cb="() => (e1 = !e1)" :type="e1 ? 'password' : 'text'"></v-text-field>
          <v-btn error light large v-on:click.native="login()">Enter</v-btn>
        </v-flex>
      </v-layout>
  </v-container>
</template>

<script>

export default {
  data() {
    return {
      msg: '',
      error: '',
      e1: true,
      credentials: {
        username: '',
        password: '',
      },
    };
  },
  methods: {
    login() {
      const credentials = {
        username: this.credentials.username,
        password: this.credentials.password,
      };
      this.$http.post('http://localhost:3000/login', credentials).then((data) => {
        const json = JSON.parse(data.bodyText);
        if (json.loginError === false) {
          this.$router.replace('/');
        } else {
          this.error = 'true';
        }
      });
    },
  },
};
</script>

<style scoped>
div {
  background: transparent !important;
}

button {
  width: 100%;
}
</style>
