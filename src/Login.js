import "./App.css";
import React from 'react';
import Tracklist from './Tracklist.js';

function Login() {
    const [boxClass, setBoxClass] = React.useState("boxModule");
    //const redirectUrl = "http://localhost:3000";
    const redirectUrl = "https://new-is-always-better.netlify.app"
    const loginUrl = "https://accounts.spotify.com/authorize?client_id=788a83da87b349d79ab6182bf8593f25&response_type=token&redirect_uri=" + redirectUrl + "&scope=user-read-recently-played,user-top-read,user-read-playback-position,user-read-playback-state,user-modify-playback-state,user-read-currently-playing,playlist-modify-public,playlist-modify-private,playlist-read-private,playlist-read-collaborative,user-library-modify,user-library-read,user-read-recently-played"
    const urlParams = new URLSearchParams(String(window.location.hash).replace("#", "?"));
    const myParam = urlParams.get('access_token');
    if (myParam) {
        return (
            <div className="boxContainer">
                <div className="boxModule bigBox" id="tracklist">
                    <Tracklist token={myParam}></Tracklist>
                </div>
                    <div className="boxModule bigBox" id="recentSongs">
                </div>
             </div>
        );
    }
    else {
        return(
            <div className="boxContainer">
                <div className={boxClass} id="login">
                    <h1 className= "boxTitle">Login</h1>
                    <p className="boxText">Login to your spotify account to manage your liked songs playlist.</p>
                    <a className="custom-btn btn-3" onClick={ () => setBoxClass("boxModule bigBox")} href={loginUrl}><span>Login</span></a>
                </div>
                <div className="boxModule" id="explore">
                    <h1 className="boxTitle">Explore</h1>
                    <p className="boxText">Explore other projects using the spotify API.</p>
                </div>
            </div>
        );
    }
}

export default Login