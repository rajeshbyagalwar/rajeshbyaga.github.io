
import ContectCard from './ContectCard'
import "./Contect.css"

//
const Contect = ({contectRef}) => {
  

  return (
      <div className='container my-5' ref={contectRef}>
          <div className='contect my-3'>
              <h1 className='d-flex justify-content-center'>Contact</h1>

          </div>
          <p className='d-flex justify-content-center my-3'>I enjoy interacting with others from the field of technology. Feel ree to reach out to me at:</p>
          <ContectCard/>
    </div>
  )
}

export default Contect
