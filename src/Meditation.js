import Iframe from 'react-iframe'


function Meditation() {
return(
    <div>
        <h1 className='wholeBodyCss'>MEDITATION</h1>
        <div>
        <Iframe  url = "https://www.youtube.com/embed/Oa6KtWWO2lY"
                    Position = "absolute" 
                    id = "myId" 
                    className = "myClassnameVideo" 
                    styles = { { высота : "100 пикселей",  } } /> </div> 

    </div>
)
}

export default Meditation;

