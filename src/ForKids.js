import {
     Link
} from "react-router-dom";

import { video } from "./data"

function Fitness() {
return (
     <div className="containerBigFitness">
     <div>
          <h1 className="fitnesscss">детям</h1>
     </div>
     <div>
     <div className="container0">
     {
          video['forkids'].map(item => (
          <Link className="link" to={`/forkids/${item.title}`}>
          <button className="btn">
               <polyline points="179,1 179,59 1,59 1,1 179,1" className="bg-line" />
               <polyline points="179,1 179,59 1,59 1,1 179,1" className="hl-line" />
               {item.type}
          </button>
          </Link>
          ))
     }
     </div>
     </div>
     
     <img src="https://media.istockphoto.com/id/1330898040/ru/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D0%B0%D1%8F/%D0%BC%D0%B0%D1%82%D1%8C-%D0%B8-%D0%B4%D0%BE%D1%87%D1%8C-%D0%BE%D0%B1%D0%BD%D0%B8%D0%BC%D0%B0%D1%8E%D1%82%D1%81%D1%8F.jpg?s=612x612&w=0&k=20&c=Kym8q469B29WcXu1fa-jGYQA4OaDIyQdzmQsw5km7Vg=" alt="forkids" className="photo" />
     </div>
)
}

export default Fitness;