import './tweets.css'
export default function tweet(props){
    return(
        <div className="div-Tweet">
            <div className="Top-Tweet">
                <img id="img-Tweeter" src="logo192.png" alt="X"></img>
                <h1>{props.userName}</h1>
            </div>
            <div className="main-Tweet">
                <h1>{props.tweet}</h1>
            </div>
            <div className="result-Tweet">
                <h1>{props.date}</h1>
            </div>
        </div>
    )
}