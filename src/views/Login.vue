<template>
  <Form class="interface" @submit="check_account">
    <h2><i class="far fa-user-circle fa-lg"></i> Login</h2>
    <p><i class="fas fa-envelope"></i> Email</p>
    <Field placeholder="Please enter email" name="email" rules="email" v-model="email"/>
    <ErrorMessage name="email"/>
    <p><i class="fas fa-unlock-alt"></i> Password</p>
    <Field type="password" placeholder="Please enter password" name="password" rules="password" v-model="password"/>
    <ErrorMessage name="password"/>
    <button>Sign in</button>
  </Form>
</template>

<script>
import { Form, Field, ErrorMessage } from 'vee-validate'
import { mapActions } from 'vuex'

export default {
  data: () => ({
    email: '',
    password: ''
  }),
  components: {
    Form,
    Field,
    ErrorMessage
  },
  methods: {
    check_account () { this.checkAccount({ email: this.email, password: this.password }) },
    ...mapActions(['checkAccount'])
  }
}
</script>
