import Iframe from 'react-iframe'


function Charger() {
return(
    <div>
        <h1 className='wholeBodyCss'>ЗАРЯДКА</h1>
        <div>
        <Iframe  url = "https://www.youtube.com/embed/brpsAUxg2P8"
                    Position = "absolute" 
                    id = "myId" 
                    className = "myClassnameVideo" 
                    styles = { { высота : "100 пикселей",  } } /> </div> 

    </div>
)
}

export default Charger;