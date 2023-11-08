import { useState } from "react"
import LoadingButton from "../components/Atoms/LoadingButton"
import Input from "../components/Atoms/Input"
import { validate } from "../helpers/validations"
import axios from "../../axios"
import { useHistory } from "react-router-dom"
import useAuth from "../hooks/useAuth"

export default function AddHotel(props) {
  const [auth] = useAuth()
  const history = useHistory()
  const [form, setForm] = useState({
    name: {
      value: "",
      error: "",
      showError: false,
      rules: ["required", { rule: "min", length: 4 }],
    },
    description: {
      value: "",
      error: "",
      showError: false,
      rules: ["required", { rule: "min", length: 10 }],
    },
    city: {
      value: "",
      error: "",
      showError: false,
      rules: ["required"],
    },
    rooms: {
      value: 2,
      error: "",
      showError: false,
      rules: ["required"],
    },
    features: {
      value: [],
      error: "",
      showError: false,
    },
    image: {
      value: null,
      error: "",
      showError: false,
    },
    status: {
      value: 0,
      error: "",
      showError: false,
      rules: ["required"],
    },
  })
  const [loading, setLoading] = useState(false)

  const valid = Object.values(form)
    .map(input => input.error)
    .filter(error => error).length

  const submit = async e => {
    setLoading(true)
    e.preventDefault()
    try {
      await axios.post("/hotels.json", {
        name: form.name.value,
        descrition: form.description.value,
        city: form.city.value,
        rooms: form.rooms.value,
        features: form.features.value,
        status: form.status.value,
        user_id: auth.userId
      })
      history.push("profil/hotele")
    } catch (ex) {
      console.log(ex.response)
    }
    setLoading(false)
  }
  const changeHandler = (value, fieldName) => {
    const error = validate(form[fieldName].rules, value)
    setForm({
      ...form,
      [fieldName]: {
        ...form[fieldName],
        value,
        showError: true,
        error: error,
      },
    })
  }

  return (
    <div className='container p-0'>
      <div className='card'>
        <div className='card-header'>Nowy Hotel</div>
        <div className='card-body'>
          <form onSubmit={submit}>
            <Input
              label='Nazwa'
              value={form.name.value}
              onChange={val => changeHandler(val, "name")}
              error={form.name.error}
              showError={form.name.showError}
            />
            <Input
              label='Opis:'
              value={form.description.value}
              type='textarea'
              onChange={val => changeHandler(val, "description")}
              error={form.description.error}
              showError={form.description.showError}
            />
            <Input
              label='Miejscowość'
              value={form.city.value}
              onChange={val => changeHandler(val, "city")}
              error={form.city.error}
              showError={form.city.showError}
            />
            <Input
              label='Ilość pokoi'
              value={form.rooms.value}
              type='select'
              onChange={val => changeHandler(val, "rooms")}
              options={[
                { value: 1, label: 1 },
                { value: 2, label: 2 },
                { value: 3, label: 3 },
                { value: 4, label: 4 },
              ]}
              error={form.rooms.error}
              showError={form.rooms.showError}
            />

            <div className='form-group mb-3'>
              <h5 className='p-1'>Udogodnienia:</h5>
              <Input
                type='checkbox'
                value={form.features.value}
                onChange={val => changeHandler(val, "features")}
                options={[
                  { value: "tv", label: "TV" },
                  { value: "wifi", label: "WiFi" },
                  { value: "parking", label: "Parking" },
                ]}
              />
            </div>

            <div className='form-group mb-3'>
              <h5 className='ps-1 pb-2'>Zdjęcie: </h5>
              <Input
                type='file'
                onChange={val => changeHandler(val, "image")}
                error={form.image.error}
                showError={form.image.showError}
              />
            </div>

            <div className='form-group mb-3'>
              <h5 className='ps-1'>Status: </h5>

              <Input
                type='radio'
                name='status'
                value={form.status.value}
                onChange={val => changeHandler(val, "status")}
                options={[
                  { value: "1", label: "Aktywny" },
                  { value: "0", label: "Ukryty" },
                ]}
                error={form.status.error}
                showError={form.status.showError}
              />
            </div>

            <div className='d-flex justify-content-center'>
              <LoadingButton
                loading={loading}
                className='btn-success'
                disabled={valid}>
                Dodaj hotel
              </LoadingButton>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
