import './App.css';
import * as React from 'react';
import { useState } from 'react';
import { data } from './dataForPhoto';





function Home2() {
  const [person, setPerson] = useState(0);
  const {photo} = data[person];

  const previousPerson = () =>{
    setPerson((person => {
      person --;
      if (person < 0) {
      return data.length - 1;
      }
      return person;
    }))
  }

  const nextPerson = () => {
    setPerson((person =>{
      person ++;
      if (person > data.length - 1) {
        person = 0;
      }
      return person;
    }))
  }
return(
  <div>
  <div className='bigcontainer'>                            
  <div className="en">
  <div className="p-4 p-md-5 mb-4 rounded text-bg-dark">
  <div className="col-md-6 px-0">
  <h1 className="display-5 fst-italic">ЭN - фитнес и йога для тела и души</h1>
  </div>
  </div>
  </div>
  <div className='prehistory'>
  <p className='prehistoryItem1'>Привет!</p>
  <p className='prehistoryItem2'>Если ты хочешь привести себя в порядок или ты не хочешь терять своё здоровье, то ты по адресу. Портал <i className='icss'>ЭN</i> для тебя, для того кто любит себя и дорожит собой.</p>
  <p className='prehistoryItem3'>Заниматься ты можешь в любом удобном тебе месте: дома, во дворе, в парке.</p>
  </div> 
  </div>
  
  <div>
  <div className='btn3 containerOnThePhoto'>
  <button onClick={previousPerson} className='previous'>Previous</button>
  <div className='containerOnThePhoto'>
  <img src={photo} width="700px" alt='person'/>
  </div>
  <button onClick={nextPerson}className='next'>Next</button>
  </div>
  </div>
  
  <div>
  <footer className="container py-5">
  <div className="row">
  <div className="col-12 col-md">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="d-block mb-2" role="img" viewBox="0 0 24 24"><title>Product</title><circle cx="12" cy="12" r="10"></circle><path d="M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83m13.79-4l-5.74 9.94"></path></svg>
  <small className="d-block mb-3 text-muted">© 2021–2024</small>
  <p className='contactcss'>Все права защищены.</p>
  </div>
  <div className="col-6 col-md">
  <h5>contact</h5>
  <ul classname="list-unstyled text-small">
  <p className='contactcss'>telegram:<br></br>@fitnessForBodyAndSoul</p>
  <p className='contactcss'>instagram:<br></br>fithessAndYogaAtHome</p>
  <p className='contactcss'>email:<br></br>fitnessandyoga@mail.ru</p>
  </ul>
  </div>
  <div className="col-6 col-md">
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

export default Home2