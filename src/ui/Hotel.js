import img1 from "../images/img1.jpg"

function Hotel() {
  return (
    <div className='m-3 border border-info-emphasis rounded m-1'>
      <div class='row g-0'>
        <div class='col-md-5'>
          <img
            src={img1}
            class='img-fluid rounded-start'
            style={{
              height: "100%",
              backgroundSize: "cover",
            }}
            alt='hotel'
          />
        </div>
        <div class='col-md-7 p-3'>
          <div
            class='card-body d-flex flex-column justify-content-around'
            style={{
              height: "100%",
            }}>
            <div>
              {" "}
              <h5 class='card-title'>Nazwa</h5>
              <p className='pt-2'>miasto</p>
            </div>

            <p class='card-text'>
              This is a wider card with supporting text below as a natural lead-in to additional content. This content
              is a little bit longer.
            </p>
            <div class='d-grid gap-2 d-md-flex justify-content-md-end'>
              <a
                href='#'
                className='btn btn-warning px-4'>
                Pokaż
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hotel
