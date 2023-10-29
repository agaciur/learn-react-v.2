export default function Login() {
return (
    <div className='container p-0'>
    <h2 className="py-4">Logowanie</h2>
    <form>
      <div className='mb-3'>
        <label
          for='email'
          className='form-label'>
          Adres email:
        </label>
        <input
          type='email'
          className='form-control'
        />
      </div>
      <div class='mb-3'>
        <label
          for='password'
          className='form-label'>
          Hasło:
        </label>
        <input
          type='password'
          className='form-control'
        />
      </div>
      <button
        type='submit'
        className='btn btn-primary'>
        Zaloguj się
      </button>
    </form>
  </div>
)
}
