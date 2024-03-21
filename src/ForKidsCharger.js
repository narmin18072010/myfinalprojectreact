// import Iframe from 'react-iframe'


// function ForKidsCharger() {
// return(
//     <div>
//         <h1 className='wholeBodyCss'>ЗАРЯДКА</h1>
//         <div>
//         <Iframe  url = "https://www.youtube.com/embed/a3pMqrjRciI"
//                     Position = "absolute" 
//                     id = "myId" 
//                     className = "myClassnameVideo" 
//                     styles = { { высота : "100 пикселей",  } } /> </div> 

//     </div>
// )
// }

// export default ForKidsCharger;











import { useParams, useNavigate } from 'react-router-dom';
import Iframe from 'react-iframe'
import { video } from "./dataForKids";

function WholeBody() {
    const navigate = useNavigate();
    const { title } = useParams();

    return (
        <div>
            {video.filter((item) => item.title === title).map((elem, index) => {
                return (
                    <div key={index}>
                        <h3>{elem.type}</h3>
                        <Iframe
                            url={elem.video}
                            position="absolute"
                            width="100%"
                            id="myId"
                            className="myClassnameVideo"
                            height="100%"
                            styles={{ height: "500px" }}
                        />
                        <button className='btn' onClick={() => navigate(-1)}>
                        </button>
                    </div>
                )
            })}
        </div>
    )
}

export default WholeBody;