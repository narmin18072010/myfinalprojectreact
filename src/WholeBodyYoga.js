import Iframe from 'react-iframe'

function WholeBodyYoga() {
return(
    

    <div>
        <h1 className='wholeBodyCss'>НА ВСЕ ТЕЛО</h1>
        <div>
        <Iframe url = "https://www.youtube.com/embed/K-RTsYIVhJ0"
                    Position = "absolute" 
                    id = "myId" 
                    className = "myClassnameVideo" 
                    controls = "controls"
                    styles = { { высота : "100 пикселей",  } } /> </div> 

    </div>
)
}

export default WholeBodyYoga;