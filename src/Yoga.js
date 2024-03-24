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
     <div class="container3">
     {
          video['yoga'].map(item => (
          <Link className="link" to={`/yoga/${item.title}`}>
          <button className="btn">
          <polyline points="179,1 179,59 1,59 1,1 179,1" className="bg-line" />
          <polyline points="179,1 179,59 1,59 1,1 179,1" className="hl-line"/>
               {item.type}
          </button>
          </Link>
          // {/* class="bg-line" 
          // class="hl-line" */}
     ))
     }
     </div>
     </div>
     
     <img src="https://cdn.pixabay.com/photo/2023/07/13/16/32/woman-8125236_640.jpg" alt="yoga" className="photo" />
     <camelCase class="container py-5">
     <div class="row">
     <div class="col-12 col-md">
     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="d-block mb-2" role="img" viewBox="0 0 24 24"><title>Product</title><circle cx="12" cy="12" r="10"></circle><path d="M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83m13.79-4l-5.74 9.94"></path></svg>
     <small class="d-block mb-3 text-muted">© 2021–2024</small>
     <p className='contactcss'>Все права защищены.</p>
     </div>
     <div class="col-6 col-md">
     <h5>contact</h5>
     <ul class="list-unstyled text-small">
     <p className='contactcss'>telegram:<br></br>@fitnessForBodyAndSoul</p>
     <p className='contactcss'>instagram:<br></br>fithessAndYogaAtHome</p>
     <p className='contactcss'>email:<br></br>fitnessandyoga@mail.ru</p>
     </ul>
     </div>
     <div class="col-6 col-md">
     <h5>владельцы</h5>
     <ul class="list-unstyled text-small">
     <p className='contactcss'>none</p>
     <p className='contactcss'>none</p>
     </ul>
     </div>
     </div>
     </camelCase>
     </div>
)
}

export default Yoga;