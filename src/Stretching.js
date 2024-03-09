import Iframe from 'react-iframe'


function Stretching() {
return(
    <div>
        <h1 className='wholeBodyCss'>РАСТЯЖКА</h1>
        <div>
        <Iframe  url = "https://www.youtube.com/embed/4fNILsIrsEc"
                    Position = "absolute" 
                    id = "myId" 
                    className = "myClassnameVideo" 
                    styles = { { высота : "100 пикселей",  } } /> </div> 

    </div>
)
}

export default Stretching;