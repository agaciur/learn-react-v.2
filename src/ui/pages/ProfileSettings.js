import { useEffect, useState } from "react"
import LoadingButton from "../components/Atoms/LoadingButton"
import { validateEmail } from "../helpers/validations"

export default function ProfileSettings(props) {
  const [email, setEmail] = useState("email@email.com")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState({ email: "", password: "" })

  const buttonDisabled = Object.values(errors).filter(x => x).length

  const submit = e => {
    e.preventDefault()
    setLoading(true)

    setTimeout(() => {
      setLoading(false)
    }, 500)
  }

  useEffect(() => {
    if (validateEmail(email)) {
      setErrors({ ...errors, email: "" })
    } else {
      setErrors({ ...errors, email: "Niepoprawny email" })
    }
  }, [email])

  useEffect(() => {
    if (password.length > 4 || password.length === 0) {
      setErrors({ ...errors, password: "" })
    } else {
      setErrors({ ...errors, password: "Wymagane 5 znaków" })
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
