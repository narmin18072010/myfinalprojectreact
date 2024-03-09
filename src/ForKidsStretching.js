import Iframe from 'react-iframe'


function ForKidsStretching() {
return(
    <div>
        <h1 className='wholeBodyCss'>РАСТЯЖКА</h1>
        <div>
        <Iframe  url = "https://www.youtube.com/embed/1gK5fPj0QjU"
                    Position = "absolute" 
                    id = "myId" 
                    className = "myClassnameVideo" 
                    styles = { { высота : "100 пикселей",  } } /> </div> 

    </div>
)
}
export default ForKidsStretching()