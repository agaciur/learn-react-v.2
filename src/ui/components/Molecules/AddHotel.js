import { useState, useRef } from "react"
import LoadingButton from "../Atoms/LoadingButton"

export default function AddHotel(props) {
  const imageRef = useRef()
  const [form, setForm] = useState({
    name: "",
    description: "",
    city: "",
    rooms: "",
    features: [],
    image: null,
    status: 0,
  })
  const [loading,setLoading] = useState(false)

  const submit = e => {
    setLoading(true)
    e.preventDefault()
    
    setTimeout(() => {
        setLoading(false)
    }, 500)
  }

  const changeFeatureHandler = e => {
    const value = e.target.value;
    const isChecked = e.target.checked

    if (isChecked) {
        const newFeatures = [...form.features, value]
        setForm ({...form, features: newFeatures})
    } else {
        const newFeatures = form.features.filter(x => x !== value);
        setForm({...form, features: newFeatures})
    }
  }
 
  return (
    <div className='container p-0'>
      <div className='card'>
        <div className='card-header'>Nowy Hotel</div>
        <div className='card-body'>
          <form onSubmit={submit}>
            <div className='form-group mb-3'>
              <label className='ps-1'>Nazwa:</label>
              <input
                value={form.name}
                onChange={e => setForm({...form, name: e.target.value})}
                type='text'
                className={`form-control ${false ? "is-invalid" : ""}`}
              />
              <div className='invalid-feedback'>Błąd</div>
              <div className='form-group mb-3'>
                <label className='ps-1'>Opis:</label>
                <textarea
                  type='text'
                  value={form.description}
                  onChange={e => setForm({...form, description: e.target.value})}
                  className={`form-control ${false ? "is-invalid" : ""}`}
                />
                <div className='invalid-feedback'>Błąd</div>
              </div>
            </div>
            <div className='form-group mb-3'>
              <label className='ps-1'>Miejscowość:</label>
              <input
                type='text'
                value={form.city}
                onChange={e => setForm({...form, city: e.target.value})}
                className={`form-control ${false ? "is-invalid" : ""}`}
              />
              <div className='invalid-feedback'>Błąd</div>
            </div>
            <div className='form-group mb-3'>
              <label className='ps-1'>Ilość pokoi:</label>
              <select
                className='form-select'
                value={form.rooms}
                onChange={e => setForm({...form, rooms: e.target.value})}>
                <option selected>Wybierz ilość:</option>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
              </select>
              <div className='invalid-feedback'>Błąd</div>
            </div>

            <div className='form-group mb-3'>
              <h5 className='p-1'>Udogodnienia:</h5>

              <div className='form-check'>
                <input
                  className='form-check-input'
                  type='checkbox'
                  value='tv'
                  id='flexCheckDefault'
                  checked={form.features.find(x => x === "tv")}
                  onChange={changeFeatureHandler}
                />
                <label
                  className='form-check-label'
                  for='flexCheckDefault'>
                  TV
                </label>
              </div>

              <div className='form-check'>
                <input
                  className='form-check-input'
                  type='checkbox'
                  value='wifi'
                  id='flexCheckDefault'
                  checked={form.features.find(x => x === "wifi")}
                  onChange={changeFeatureHandler}

                />
                <label
                  className='form-check-label'
                  for='flexCheckDefault'>
                  WiFi
                </label>
              </div>

              <div className='form-check'>
                <input
                  className='form-check-input'
                  type='checkbox'
                  value='parking'
                  id='flexCheckDefault'
                  checked={form.features.find(x => x === "parking")}
                  onChange={changeFeatureHandler}

                />
                <label
                  className='form-check-label'
                  for='flexCheckDefault'>
                  Parking
                </label>
              </div>
            </div>

            <div className='form-group mb-3'>
              <h5 className='ps-1 pb-2'>Zdjęcie: </h5>
              <input
                type='file'
                onChange={e => setForm({...form, image: e.target.files})}
                ref={imageRef}
              />
            </div>

            <div className='form-group mb-3'>
              <h5 className='ps-1'>Status: </h5>
              <div class='form-check'>
                <input
                  className='form-check-input'
                  type='radio'
                  value='1'
                  onChange={e => setForm({...form, status: e.target.value})}
                  checked={form.status == 1}
                />
                <label
                  className='form-check-label'
                  for='flexRadioDefault1'>
                  Aktywny
                </label>
              </div>
              <div className='form-check'>
                <input
                  className='form-check-input'
                  type='radio'
                  value='0'
                  onChange={e => setForm({...form, status: e.target.value})}
                  checked={form.status == 0}
                />
                <label
                  className='form-check-label'
                  for='flexRadioDefault1'>
                  Ukryty
                </label>
              </div>
            </div>

            <div className='d-flex justify-content-center'>
              <LoadingButton
                loading={loading}
                className='btn-success'>
                Dodaj hotel
              </LoadingButton>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
