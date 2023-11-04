import { useState } from "react"
import LoadingButton from "../../components/Atoms/LoadingButton"
import { validate } from '../../helpers/validations'
import Input from "../../components/Atoms/Input"

export default function Register(props) {
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({
    email: {
      value: "",
      error: "",
      valid: false,
      showError: false,
      rules: ["required", "email"],
    },
    password: {
      value: "",
      error: "",
      valid: false,
      showError: false,
      rules: ["required",'check'],
    },
  })

const valid = Object.values(form).map(input => input.error).filter(error => error).length

  const submit = e => {
    setLoading(true)
    e.preventDefault()

    setTimeout(() => {
      setLoading(false)
    }, 500)
  }

  const changeHandler = (value, fieldName) => {
    const error = validate(form[fieldName].rules, value)
    setForm({
      ...form,
      [fieldName]: {
        ...form[fieldName],
        value,
        showError: true,
        error: error,
        valid: true
      },
    })
  }
  
  return (
    <div className='container p-0'>
      <div className='card'>
        <div className='card-header'>Rejestracja</div>
        <div className='card-body'>
          <form onSubmit={submit}>
            <Input
              label='Email'
              type='email'
              value={form.email.value}
              onChange={val => changeHandler(val, "email")}
              error={form.email.error}
              showError={form.email.showError}
            />
            <Input
              label='Hasło'
              type='password'
              value={form.password.value}
              onChange={val => changeHandler(val, "password")}
              error={form.password.error}
              showError={form.password.showError}
            />

            <div className='d-flex justify-content-center'>
              <LoadingButton
                loading={loading}
                className='btn-success mt-4'
                disabled={valid}
              >
                Zarejestruj się
              </LoadingButton>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
