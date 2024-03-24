import Iframe from 'react-iframe'

function ForKidsYoga() {
return(
    <div>
        <h1 className='wholeBodyCss'>ДЛЯ ДЕТЕЙ</h1>
        <div>
        <Iframe  url = "https://www.youtube.com/embed/lvjh3_maMLQ"
            Position = "absolute" 
            id = "myId" 
            className = "myClassnameVideo" 
            styles = { { высота : "100 пикселей",  } } /> </div> 

    </div>
)
}

export default ForKidsYoga;