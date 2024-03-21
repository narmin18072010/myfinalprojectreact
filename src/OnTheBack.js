import Iframe from 'react-iframe'


function OnTheBack() {
return(
    <div>
        <h1 className='wholeBodyCss'>НА СПИНУ</h1>
        <div>
        <Iframe  url = "https://www.youtube.com/embed/lQwpksc8Gf8"
                    Position = "absolute" 
                    controls
                    id = "myId" 
                    className = "myClassnameVideo" 
                    styles = { { высота : "100 пикселей",  } } /> </div> 

    </div>
)
}

export default OnTheBack;





