import React from 'react'
import TechStack from './TechStack'
import { v4 as uuidv4 } from 'uuid';

const Backend = () => {
  const backendTechStack = [
    {
      img: "https://taher-ahmed.vercel.app/nodejs-icon.svg",
      name: "Node.js",
    },
    {
      img: "https://taher-ahmed.vercel.app/express.svg",
      name: "Express.js",
    },
    {
      img: "https://taher-ahmed.vercel.app/mongodb.svg",
      name: "MongoDB",
    },
    {
      img: "https://taher-ahmed.vercel.app/postman-icon.svg",
      name: "Postman",
    },
  ]
  return (
    <div>
      <div>
        <div className="frontend my-3 mx-2">
          <h4 className='d-flex justify-content-center'>Back End:</h4>
        </div>
        <div className="d-flex flex-wrap justify-content-center" >
          
        {
            backendTechStack.map((item) => {
              return (<TechStack key={uuidv4()} img={item.img} name={ item.name}/>)
            })
          }
        </div>
        
      </div>
    </div>
  )
}

export default Backend
