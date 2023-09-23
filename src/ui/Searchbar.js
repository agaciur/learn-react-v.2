function Searchbar() {
  return (
    <div class='p-5 d-flex justify-content-center input-group'>
      <input
        type='text'
        class='border border-secondary rounded-start-2'
        // placeholder="Recipient's username"
        // aria-label="Recipient's username"
        // aria-describedby='button-addon2'
      />
      <button
        class='btn btn-secondary'
        type='button'
        // id='button-addon2'
        >
        Szukaj
      </button>
    </div>
  )
}

export default Searchbar
