import Iframe from 'react-iframe'


function OnTheButtocks() {
return(
    <div>
        <h1 className='wholeBodyCss'>НА ЯГОДИЦЫ</h1>
        <div>
        <Iframe  url = "https://www.youtube.com/embed/mTHyadfJ6UE"
                    Position = "absolute" 
                    id = "myId" 
                    className = "myClassnameVideo" 
                    styles = { { высота : "100 пикселей",  } } /> </div> 

    </div>
)
}

export default OnTheButtocks;

