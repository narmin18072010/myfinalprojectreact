import Iframe from 'react-iframe'

function OnYourFeet() {
return(
    <div>
        <h1 className='wholeBodyCss'>НА НОГИ</h1>
        <div>
        <Iframe  url = "https://www.youtube.com/embed/VV7zQVW3dBQ"
            Position = "absolute" 
            id = "myId" 
            className = "myClassnameVideo" 
            styles = { { высота : "100 пикселей",  } } /> </div> 
    </div>
)
}

export default OnYourFeet;