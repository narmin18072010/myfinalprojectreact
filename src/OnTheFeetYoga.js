import Iframe from 'react-iframe'


function OnYourFeetYoga() {
return(
    <div>
        <h1 className='wholeBodyCss'>НА НОГИ</h1>
        <div>
        <Iframe  url = "https://www.youtube.com/embed/4JdkNR72ZBU"
                    Position = "absolute" 
                    id = "myId" 
                    className = "myClassnameVideo" 
                    styles = { { высота : "100 пикселей",  } } /> </div> 

    </div>
)
}
export default OnYourFeetYoga;