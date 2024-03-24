import Iframe from 'react-iframe'

function OnTheBackYoga() {
return(
    <div>
        <h1 className='wholeBodyCss'>НА СПИНУ</h1>
        <div>
        <Iframe  url = "https://www.youtube.com/embed/73MLpw4CMQs"
            Position = "absolute" 
            id = "myId" 
            className = "myClassnameVideo" 
            styles = { { высота : "100 пикселей",  } } /> </div> 
    </div>
)
}

export default OnTheBackYoga;

