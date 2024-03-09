import Iframe from 'react-iframe'


function OnTheStomach() {
return(
    <div>
        <h1 className='wholeBodyCss'>НА ЖИВОТ</h1>
        <div>
        <Iframe  url = "https://www.youtube.com/embed/r9xd8umAnZQ"
                    Position = "absolute" 
                    id = "myId" 
                    className = "myClassnameVideo" 
                    styles = { { высота : "100 пикселей",  } } /> </div> 

    </div>
)
}

export default OnTheStomach;