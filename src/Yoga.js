import {
     Link
} from "react-router-dom";
import { video } from "./data"

function Yoga() {
return (
     <div className="containerBigFitness">
     <div>
          <h1 className="fitnesscss">йога</h1>
     </div>
     <div>
     <div className="container3">
     {
          video['yoga'].map(item => (
          <Link className="link" to={`/yoga/${item.title}`}>
          <button className="btn">
               <polyline points="179,1 179,59 1,59 1,1 179,1" className="bg-line" />
               <polyline points="179,1 179,59 1,59 1,1 179,1" className="hl-line" />
               {item.type}
          </button>
          </Link>
          ))
     }
     </div>
     {/* <div className="treny">
          <h1>не тратьте время, купите у нас видео-тренировку на все тело!</h1>
     </div>
     {
          video['WholeBodyYoga'].map(item => (
          <Link className="link" to={`/WholeBodyYoga/${item.title}`}>
          <button className="btn2yoga">
               <polyline points="179,1 179,59 1,59 1,1 179,1" className="bg-line" />
               <polyline points="179,1 179,59 1,59 1,1 179,1" className="hl-line" />
               {item.type}
          </button>
          </Link>
          ))
     } */}
     </div>
     
     <img src="https://cdn.pixabay.com/photo/2023/07/13/16/32/woman-8125236_640.jpg" alt="yoga" className="photo" />
     </div>
)
}

export default Yoga;