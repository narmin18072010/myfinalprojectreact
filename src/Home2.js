import './App.css';
import * as React from 'react';
import { useState } from 'react';
import { data } from './dataForPhoto';
import StripeContainer from "./Stripe/StripeContainer";

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


  const [showMyImage, setShowMyImage] = useState(false)

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
  <p className='buy'>Можно преобрести:</p>
</div>

  <div>
  {showMyImage ? <StripeContainer /> : 
  <div className='btn3 containerOnThePhoto'>
  <button onClick={previousPerson} className='previous'>Previous</button>
  <div className='containerOnThePhoto'>
  <img src={photo} width="700px" alt='person' onClick={() => setShowMyImage(true)}/>
  </div>
  <button onClick={nextPerson}className='next'>Next</button>
  </div>
}
  </div>
  
  </div>







)
}

export default Home2