import { useState } from "react"

function Searchbar(props) {
  const [term, setTerm] = useState("")

  const search = () => {
    props.onSearch(term)
  }

  const onKeyDownHendler = e => {
    if (e.key === "Enter") {
      search()
    }
  }

  return (
    <div className='position-absolute top-50 start-50 translate-middle'>
      <div className="d-flex">
        <input
          value={term}
          onKeyDown={onKeyDownHendler}
          onChange={e => setTerm(e.target.value)}
          type='text'
          className='border border-secondary m-0 p-2 '
          placeholder='Szukaj...'
        />
        <button
          onClick={search}
          className={`btn btn-${props.theme} rounded-0 ms-1 p-2 m-0`}
          type='button'>
          Szukaj
        </button>
      </div>
    </div>
  )
}

export default Searchbar
