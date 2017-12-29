export default {
  data: () => ({
    usernameRules: [
      val => !!val || '用户名不能为空',
      val => (val && val.length < 15 && val.length > 2) || '长度在3～15位之间'
    ],
    passwordRules: [
      val => !!val || '密码不能为空',
      val => (val && val.length < 15 && val.length >= 6) || '长度在6～15位之间'
    ]
  })
}
