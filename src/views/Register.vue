<template>
  <Form class="interface" @submit="register_account">
    <h2><i class="fas fa-user-plus"></i> Register</h2>
    <p><i class="fas fa-user"></i> Name</p>
    <Field placeholder="Please enter username" name="name" rules="name" v-model="name"/>
    <ErrorMessage name="name"/>
    <p><i class="fas fa-envelope"></i> Email</p>
    <Field class="input" placeholder="Please enter email" name="email" rules="email" v-model="email"/>
    <ErrorMessage class="errorMessage" name="email"/>
    <p><i class="fas fa-unlock-alt"></i> Password</p>
    <Field type="password" class="input" placeholder="Please enter password" name="password" rules="password" v-model="password"/>
    <ErrorMessage class="errorMessage" name="password"/>
    <p><i class="fas fa-check"></i> Confirm</p>
    <Field type="password" placeholder="Please enter password again" name="confirmed" rules="confirmed:@password"/>
    <ErrorMessage name="confirmed"/>
    <button>Register</button>
  </Form>
</template>

<script>
import { Field, Form, ErrorMessage } from 'vee-validate'
import { mapActions } from 'vuex'

export default {
  data: () => ({
    name: '',
    email: '',
    password: ''
  }),
  components: {
    Field,
    Form,
    ErrorMessage
  },
  methods: {
    register_account () {
      this.registerAccount({
        name: this.name,
        email: this.email,
        password: this.password
      })
    },
    ...mapActions(['registerAccount'])
  }
}
</script>
