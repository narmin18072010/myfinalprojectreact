import {
     Link
} from "react-router-dom";

function Fitness() {
return(
<div className="containerBigFitness">
<div>
     <h1 className="fitnesscss">фитнес</h1>
</div>


<div className="containerButton">
<div class="container0">
<div class="center">
     <button class="btn">
     <polyline points="179,1 179,59 1,59 1,1 179,1" class="bg-line" />
     <polyline points="179,1 179,59 1,59 1,1 179,1" class="hl-line" />
     <nav>
          <Link className="link" to="/wholebody" target="_blank">На всё тело</Link>
     </nav>
     </button>
</div>
</div>

<div class="container0">
<div class="center">
     <button class="btn">
     <polyline points="179,1 179,59 1,59 1,1 179,1" class="bg-line" />
     <polyline points="179,1 179,59 1,59 1,1 179,1" class="hl-line" />
     <nav>
          <Link className="link" to="/ontheback" target="_blank">На спину</Link>
     </nav>
     </button>
</div>
</div> 

<div class="container0">
<div class="center">
     <button class="btn">
     <polyline points="179,1 179,59 1,59 1,1 179,1" class="bg-line" />
     <polyline points="179,1 179,59 1,59 1,1 179,1" class="hl-line" />
     <nav>
          <Link className="link" to="/inyourarms" target="_blank">На руки</Link>
     </nav>
     </button>
</div>
</div> 

<div class="container0">
<div class="center">
     <button class="btn">
     <polyline points="179,1 179,59 1,59 1,1 179,1" class="bg-line" />
     <polyline points="179,1 179,59 1,59 1,1 179,1" class="hl-line" />
     <nav>
          <Link className="link" to="/onthestomach" target="_blank">На живот</Link>
     </nav>
     </button>
</div>
</div>
</div>









<div className="containerButton">

<div class="container2">
<div class="center">
     <button class="btn">
     <polyline points="179,1 179,59 1,59 1,1 179,1" class="bg-line" />
     <polyline points="179,1 179,59 1,59 1,1 179,1" class="hl-line" />
     <nav>
          <Link className="link" to="/onyourfeet" target="_blank">На ноги</Link>
     </nav>
     </button>
</div>
</div> 

<div class="container2">
<div class="center">
     <button class="btn">
     <polyline points="179,1 179,59 1,59 1,1 179,1" class="bg-line" />
     <polyline points="179,1 179,59 1,59 1,1 179,1" class="hl-line" />
     <nav>
          <Link className="link" to="/charger" target="_blank">Зарядка</Link>
     </nav>   
     </button>
</div>
</div> 


<div class="container2">
<div class="center">
     <button class="btn">
     <polyline points="179,1 179,59 1,59 1,1 179,1" class="bg-line" />
     <polyline points="179,1 179,59 1,59 1,1 179,1" class="hl-line" />
     <nav>
          <Link className="link" to="/stretching" target="_blank">Растяжка</Link>
     </nav>   
     </button>
</div>
</div> 


<div class="container2">
<div class="center">
     <button class="btn">
     <polyline points="179,1 179,59 1,59 1,1 179,1" class="bg-line" />
     <polyline points="179,1 179,59 1,59 1,1 179,1" class="hl-line" />
     <nav>
          <Link className="link" to="/onthebuttocks" target="_blank">На ягодицы</Link>
     </nav>   
     </button>
</div>
</div> 
</div>

<img src="https://cdn.pixabay.com/photo/2016/03/27/23/00/weight-lifting-1284616_960_720.jpg" alt="fitness" className="photo1"/>



 
<div>
        <footer class="container py-5">
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
              </footer>
        
        </div>
</div>
)
}
    
export default Fitness;