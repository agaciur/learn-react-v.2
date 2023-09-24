function Searchbar() {
  return (
    <div class='p-5 d-flex justify-content-center input-group'>
      <input
        type='text'
        class='border border-secondary rounded-start-2 p-2'
        placeholder='Szukaj...'
      />
      <button
        class='btn btn-secondary'
        type='button'>
        Szukaj
      </button>
    </div>
  )
}

export default Searchbar
