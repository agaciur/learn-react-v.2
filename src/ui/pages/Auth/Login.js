import { useState } from "react"
import useAuth from "../../hooks/useAuth"
import { useHistory } from "react-router-dom"
import LoadingButton from "../../components/Atoms/LoadingButton"

export default function Login() {
  const [auth, setAuth] = useAuth()
  const [email, setEmail] = useState("")
  const history = useHistory()
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [valid, setValid] = useState(null)

  const submit = e => {
    e.preventDefault()
    setLoading(true)

    setTimeout(() => {
      if (true) {
        setAuth(true)
        history.push("/")
      } else {
        setValid(false);
        setPassword('');
      }
      setLoading(false)
    }, 500)
  }

  return (
    <div className='container p-0'>
      <h2 className='py-4'>Logowanie</h2>
      {valid === false ? (
        <div className="alert alert-danger">Niepoprawne dane logowania</div>
      ) : null }
      <form onSubmit={submit}>
        <div className='mb-3'>
          <label>Adres email:</label>
          <input
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
            onChange={e => setPassword(e.target.value)}
            className='form-control'
          />
        </div>
        <LoadingButton loading={loading}>Zaloguj się</LoadingButton>
      </form>
    </div>
  )
}
