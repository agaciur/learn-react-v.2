import { useState } from "react"
import useAuth from "../../hooks/useAuth"
import { useHistory } from "react-router-dom"
import LoadingButton from "../../components/Atoms/LoadingButton"
import axios from "../../../axios-auth"

export default function Login(props) {
  const [auth, setAuth] = useAuth()
  const [email, setEmail] = useState("")
  const history = useHistory()
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [valid, setValid] = useState(null)
  const [error, setError] = useState("")

  const submit = async e => {
    e.preventDefault()
    setLoading(true)

    try {
      const res = await axios.post("accounts:signInWithPassword", {
        email,
        password,
        returnSecureToken: true,
      })
      console.log(res)
      setAuth({
        email: res.data.email,
        token: res.data.idToken,
        userId: res.data.localId,
      })
      console.log(res.data.localId)
      history.push("/")
    } catch (ex) {
      console.log(ex.response)

      setLoading(false)
      setError("Podane dane logowania są niepoprawne")
    }
  }
  if (auth) {
    history.push("/")
  }

  return (
    <div className='container p-0'>
      <h2 className='py-4'>Logowanie</h2>
      {valid === false ? <div className='alert alert-danger'>Niepoprawne dane logowania</div> : null}
      <form onSubmit={submit}>
        <div className='mb-3'>
          <label htmlFor='email-input'>Adres email:</label>
          <input
            id='email-input'
            type='email'
            value={email}
            onChange={e => setEmail(e.target.value)}
            className='form-control'
          />
        </div>
        <div className='mb-3'>
          <label>Hasło:</label>
          <input
            type='password'
            value={password}
            onChange={e => setPassword(e.target.value)}
            className='form-control'
          />
        </div>
        {error ? <div className='alert alert-danger mt-3'>{error}</div> : null}
        <LoadingButton loading={loading}>Zaloguj się</LoadingButton>
      </form>
    </div>
  )
}
