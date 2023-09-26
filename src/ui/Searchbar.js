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
    <div class='p-5 d-flex justify-content-center input-group'>
      <input
        value={term}
        onKeyDown={onKeyDownHendler}
        onChange={e => setTerm(e.target.value)}
        type='text'
        class='border border-secondary rounded-start-2 p-2'
        placeholder='Szukaj...'
      />
      <button
        onClick={search}
        class='btn btn-secondary'
        type='button'>
        Szukaj
      </button>
    </div>
  )
}

export default Searchbar
