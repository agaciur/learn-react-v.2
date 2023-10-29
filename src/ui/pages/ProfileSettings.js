export default function ProfileSettings(props) {
  return (
    <div>
      <h3>Ustawienia profilu</h3>
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
            placeholder='adres@email.com'
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
            placeholder='*****'
            className='form-control'
          />
        </div>
        <button
          type='submit'
          className='btn btn-primary'>
          Zapisz
        </button>
      </form>
    </div>
  )
}
