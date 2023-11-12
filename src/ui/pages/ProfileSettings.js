import { useEffect, useState } from "react"
import LoadingButton from "../components/Atoms/LoadingButton"
import { validateEmail } from "../helpers/validations"
import useAuth from "../hooks/useAuth"
import axios from "../../axios-auth"

export default function ProfileSettings(props) {
  const [auth, setAuth] = useAuth()
  const [email, setEmail] = useState(auth.email)
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState({ email: "", password: "" })

  const buttonDisabled = Object.values(errors).filter(x => x).length
  // console.log( window.localStorage)

  const submit = async e => {
    e.preventDefault()
    setLoading(true)
    try {
      const data = {
        idToken: auth.token,
        email: email,
        returnSecureToken: true,
      }
      if (password) {
        data.password = password
      }
      console.log(data)
      const res = await axios.post("accounts:update", data)
      // console.log(res)
      setAuth({
        email: res.data.email,
        token: res.data.idToken,
        userId: res.data.localId,
      })
    } catch (ex) {
      console.log(ex.response)
    }
    setLoading(false)
  }

  useEffect(() => {
    if (validateEmail(email)) {
      setErrors({ ...errors, email: "" })
    } else {
      setErrors({ ...errors, email: "Niepoprawny email" })
    }
  }, [email])

  useEffect(() => {
    if (password.length >= 6 || password.length === 0) {
      setErrors({ ...errors, password: "" })
    } else {
      setErrors({ ...errors, password: "Wymagane conajmniej 6 znaków" })
    }
  }, [password])

  return (
    <div>
      <h3>Ustawienia profilu</h3>
      <form onSubmit={submit}>
        <div className='mb-3'>
          <label>Adres email:</label>
          <input
            type='email'
            value={email}
            onChange={e => setEmail(e.target.value)}
            className={`form-control ${errors.email ? "is-invalid" : "is-valid"}`}
          />
          <div className='invalid-feedback'>{errors.email}</div>
          <div className='valid-feedback'>Poprawny email</div>
        </div>
        <div className='mb-3'>
          <label>Hasło:</label>
          <input
            type='password'
            onChange={e => setPassword(e.target.value)}
            className={`form-control ${errors.password ? "is-invalid" : ""}`}
          />
          <div className='invalid-feedback'>{errors.password}</div>
        </div>
        <LoadingButton
          loading={loading}
          disabled={buttonDisabled}>
          Zapisz zmiany
        </LoadingButton>
      </form>
    </div>
  )
}
