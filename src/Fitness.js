import {
     Link,
} from "react-router-dom";
import { video } from "./data";


function Fitness() {
return (
     <div className="containerBigFitness">
     <div>
          <h1 className="fitnesscss">фитнес</h1>
     </div>
     <div>
     <div className="container3">
     {
          video['fitness'].map(item => (
          <Link className="link" to={`/fitness/${item.title}`} key={item.title} path="/stripe">
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
            video['WholeBodyFitness'].map(item => (
            <Link className="link" to={`/WholeBodyFitness/${item.title}`} key={item.title}>
            <button className="btn2">
                 <polyline points="179,1 179,59 1,59 1,1 179,1" className="bg-line" />
                 <polyline points="179,1 179,59 1,59 1,1 179,1" className="hl-line" />
                 {item.type}
            </button>
            </Link>
            ))
       } */}
     </div>
     
     <img src="https://media.istockphoto.com/id/1924559795/ru/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D0%B0%D1%8F/%D0%BC%D0%BE%D0%BB%D0%BE%D0%B4%D0%B0%D1%8F-%D0%B6%D0%B5%D0%BD%D1%89%D0%B8%D0%BD%D0%B0-%D0%B2-%D0%BC%D0%B8%D0%BB%D0%BE%D0%B9-%D0%BF%D0%B8%D0%B6%D0%B0%D0%BC%D0%B5-%D1%80%D0%B0%D1%81%D1%82%D1%8F%D0%B3%D0%B8%D0%B2%D0%B0%D0%B5%D1%82%D1%81%D1%8F-%D0%B7%D0%B0%D0%BD%D0%B8%D0%BC%D0%B0%D0%B5%D1%82%D1%81%D1%8F-%D0%B9%D0%BE%D0%B3%D0%BE%D0%B9-%D1%81%D1%87%D0%B0%D1%81%D1%82%D0%BB%D0%B8%D0%B2%D0%B0%D1%8F-%D0%B4%D0%B5%D0%B2%D0%BE%D1%87%D0%BA%D0%B0.jpg?s=612x612&w=0&k=20&c=29cADGy4BfDQ7YVLL_ahAOF-DEDvNNB0JiCjLmSGzLs=" alt="fitness" className="photo" />
     </div>
)
}

export default Fitness;