import Iframe from 'react-iframe'


function InYourArms() {
return(
    <div>
        <h1 className='wholeBodyCss'>НА РУКИ</h1>
        <div>
        <Iframe  url = "https://www.youtube.com/embed/GQJOj4Q7h0A"
                     Position = "absolute" 
                    id = "myId" 
                    className = "myClassnameVideo" 
                    styles = { { высота : "100 пикселей",  } } /> </div> 

    </div>
)
}

export default InYourArms;