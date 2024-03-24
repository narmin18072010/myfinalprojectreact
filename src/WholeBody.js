import { useParams, useNavigate } from 'react-router-dom';
import Iframe from 'react-iframe'
import { video } from "./data";

function WholeBody() {
    const navigate = useNavigate();
    const { group, title } = useParams();
return (
    <div>
    {video[group].filter((item) => item.title === title).map((elem, index) => {
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
    <button className='btn' onClick={() => navigate(-1)}></button>
    </div>
    )
})}
    </div>
)
}

export default WholeBody;