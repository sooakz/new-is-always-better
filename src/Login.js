import "./App.css";
import React from 'react';
import Tracklist from './Tracklist.js';

function Login() {
    const loginUrl = "https://accounts.spotify.com/authorize?client_id=788a83da87b349d79ab6182bf8593f25&response_type=token&redirect_uri=https://new-is-always-better.netlify.app&scope=user-read-recently-played,user-top-read,user-read-playback-position,user-read-playback-state,user-modify-playback-state,user-read-currently-playing,playlist-modify-public,playlist-modify-private,playlist-read-private,playlist-read-collaborative,user-library-modify,user-library-read,user-read-recently-played"
    const urlParams = new URLSearchParams(String(window.location.hash).replace("#", "?"));
    const myParam = urlParams.get('access_token');
    if (myParam) {
        return (
            <div className="boxModule">
                <Tracklist token={myParam}></Tracklist>
            </div>
        );
    }
    else {
        return(
            <div className="boxModule">
                <h1 className= "boxTitle">Login</h1>
                <p className="boxText">Login to your spotify account to manage your liked songs playlist.</p>
                <div>
                    <a className="custom-btn btn-3" href={loginUrl}><span>Login</span></a>
                </div>
            </div>
        );
    }
}

export default Login