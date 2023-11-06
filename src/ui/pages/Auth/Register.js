import { useState } from "react"
import LoadingButton from "../../components/Atoms/LoadingButton"
import { validate } from "../../helpers/validations"
import Input from "../../components/Atoms/Input"
import axios from '../../../axios-auth'
import useAuth from "../../hooks/useAuth"
import { useHistory } from "react-router-dom"

export default function Register(props) {
  const history = useHistory()
  const [auth, setAuth] = useAuth()
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({
    email: {
      value: "",
      error: "",
      showError: false,
      rules: ["required", "email"],
    },
    password: {
      value: "",
      error: "",
      showError: false,
      rules: ["required", { rule: "min", length: 6 }],
    },
  })
  const [error, setError] = useState("")

  let valid = Object.values(form)
    .map(input => input.error)
    .filter(error => error).length

  const submit = async e => {
    setLoading(true)
    e.preventDefault()

    try {
      const res = await axios.post(
        "/accounts:signUp",
        {
          email: form.email.value,
          password: form.password.value,
          returnSecureToken: true,
        }
      )
      setAuth({
        email: res.data.email,
        token: res.data.idToken,
        userId: res.data.lokalId
      })
      history.push("/")
    } catch (ex) {
      const newError = ex.response.data.error.message
      if (newError === "EMAIL_EXISTS") {
        setError('Podany email już istnieje') ;
      }
      console.log(ex.response)
    }

    setLoading(false)
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
      },
    })
  }

  if (auth) {
    history.push("/")
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
            {error ? <div className='alert alert-danger mt-3'>{error}</div> : null}

            <div className='d-flex justify-content-center'>
              <LoadingButton
                loading={loading}
                className='btn-success mt-4'
                disabled={valid}>
                Zarejestruj się
              </LoadingButton>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
