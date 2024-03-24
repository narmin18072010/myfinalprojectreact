import Iframe from 'react-iframe'

function ChargerYoga() {
return(
    <div>
        <h1 className='wholeBodyCss'>ЗАРЯДКА</h1>
        <div>
        <Iframe  url = "https://www.youtube.com/embed/2oxSXn4kIag"
            Position = "absolute" 
            id = "myId" 
            className = "myClassnameVideo" 
            styles = { { высота : "100 пикселей",  } } /> </div> 
    </div>
)
}

export default ChargerYoga;