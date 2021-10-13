import { validate, defineRule, configure } from 'vee-validate'

configure({
  validateOnInput: true
})

defineRule('name', value => {
  // Field is empty, should pass
  if (!value || !value.length) {
    return 'Please enter username'
  }
  if (value.length < 3 || value.length > 14) {
    return 'Must between 3 ~ 14 character'
  }
  return true
})
defineRule('email', value => {
  if (!value || !value.length) {
    return 'Please enter email'
  }
  if (!/^([A-Za-z0-9-.])+@([A-Za-z0-9-.])+.([A-Za-z]{2,4})$/.test(value)) {
    return 'Wrong email format'
  }
  return true
})
defineRule('password', value => {
  // Field is empty, should pass
  if (!value || !value.length) {
    return 'Please enter password'
  }
  if (value.length < 6 || value.length > 12) {
    return 'Must between 6 ~ 12 character'
  }
  return true
})
defineRule('confirmed', (value, [target]) => {
  if (value !== target) {
    return 'Must be completely consistent'
  }
  return true
})
export default validate
