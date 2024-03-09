import Iframe from 'react-iframe'

function WholeBody() {
return(
    

    <div>
        <h1 className='wholeBodyCss'>НА ВСЕ ТЕЛО</h1>
        <div>
        <Iframe url = "https://www.youtube.com/embed/ESMmH-JfPCY"
                    Position = "absolute" 
                    id = "myId" 
                    className = "myClassnameVideo" 
                    controls = "controls"
                    styles = { { высота : "100 пикселей",  } } /> </div> 

    </div>
)
}

export default WholeBody;