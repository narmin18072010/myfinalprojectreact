import Iframe from 'react-iframe'


function ForKidsCharger() {
return(
    <div>
        <h1 className='wholeBodyCss'>ЗАРЯДКА</h1>
        <div>
        <Iframe  url = "https://www.youtube.com/embed/a3pMqrjRciI"
                    Position = "absolute" 
                    id = "myId" 
                    className = "myClassnameVideo" 
                    styles = { { высота : "100 пикселей",  } } /> </div> 

    </div>
)
}

export default ForKidsCharger;