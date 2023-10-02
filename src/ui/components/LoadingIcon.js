export default function LoadingIcon(props) {
  return (
    <div className='text-center mt-5'>
      <div
        className={`spinner-border text-${props.theme}`}
        role='status'>
        <span className='visually-hidden'>Ładowanie...</span>
      </div>
    </div>
  )
}
