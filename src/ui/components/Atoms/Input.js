import { useRef } from "react"
const InputText = props => {
  return (
    <div className="form-group">
      <label>{props.label}</label>
      <input 
        value={props.value}
        onChange={e => props.onChange(e.target.value)}
        type={props.type} 
        className={`form-control ${props.error && props.showError ? 'is-invalid' : ''}`} />
      <div className="invalid-feedback">
        {props.error}
      </div>
    </div>
  );
}


const InputTextarea = props => {
  return (
    <div className='form-group mb-3'>
      <label className='ps-1'>{props.label}</label>
      <textarea
        type={props.type}
        value={props.value}
        onChange={e => props.onChange(e.target.value)}
        className={`form-control ${props.error && props.showError ? "is-invalid" : ""}`}
      />
      <div className='invalid-feedback'>{props.error}</div>
    </div>
  )
}

const InputSelect = props => {
  return (
    <div className='form-group mb-3'>
      <label
        className='ps-1'
        key={props.value}>
        {props.label}
      </label>
      <select
        type={props.type}
        value={props.value}
        onChange={e => props.onChange(e.target.value)}
        className={`form-select ${props.error && props.showError ? "is-invalid" : ""}`}>
        {props.options.map(option => (
          <option value={option.value}>{option.label}</option>
        ))}
      </select>
      <div className='invalid-feedback'>{props.error}</div>
    </div>
  )
}

const InputCheckbox = props => {
  const changeFeatureHandler = e => {
    const value = e.target.value
    const isChecked = e.target.checked

    if (isChecked) {
      const newValue = [...props.value, value]
      props.onChange(newValue)
    } else {
      const newValue = props.value.filter(x => x !== value)
      props.onChange(newValue)
    }
  }
  return (
    <>
      {props.options.map(option => (
        <div
          className='form-check'
          key={option.value}>
          <input
            className='form-check-input'
            type='checkbox'
            value={option.value}
            id={option.value}
            checked={props.value.find(x => x === option.value)}
            onChange={changeFeatureHandler}
          />
          <label
            className='form-check-label'
            htmlFor={option.value}>
            {option.label}
          </label>
        </div>
      ))}
    </>
  )
}

const InputRadio = props => {
  return (
    <>
      {props.options.map(option => (
        <div className='form-check'>
          <input
            className='form-check-input'
            type='radio'
            value={option.value}
            name={props.name}
            key={option.value}
            id={`radio-${option.value}-${props.name}`}
            checked={props.value == option.value}
            onChange={e => props.onChange(e.target.value)}
          />
          <label
            className='form-check-label'
            htmlFor={`radio-${option.value}-${props.name}`}>
            {option.label}
          </label>
        </div>
      ))}
    </>
  )
}

const InputFile = props => {
  const fileRef = useRef()
  const changeHandler = e => {
    props.onChange(e.target.files[0])
  }
  return (
    <input
      type='file'
      onChange={changeHandler}
      ref={props.fileRef}
    />
  )
}

function Input(props) {
  switch (props.type) {
    case "textarea":
      return <InputTextarea {...props} />
    case "select":
      return <InputSelect {...props} />
    case "checkbox":
      return <InputCheckbox {...props} />
    case "file":
      return <InputFile {...props} />
    case "radio":
      return <InputRadio {...props} />
    default:
      return <InputText {...props} />
  }
}
Input.defaultProps = {
  type: "text",
  error: false,
  showError: false,
}
export default Input
