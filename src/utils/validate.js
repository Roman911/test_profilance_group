const validate = (props) => {
  const { values, errors } = props
  const rules = {
    email: (value) => {
      if (!value) {
        errors.email = 'Required'
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(
          value
        )
      ) {
        errors.email = 'Некоректний емейл'
      }
    },
    password: (value) => {
      if (!value) {
        errors.password = 'Required';
      } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/.test(value)) {
        errors.password = 'Некоректний пароль'
      }
    }
  }
  Object.keys(values).forEach(key => rules[key] && rules[key](values[key]))
}

export default validate