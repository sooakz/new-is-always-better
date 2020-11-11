import "./App.css";
function Login() {
    const loginUrl = "https://accounts.spotify.com/authorize?client_id=788a83da87b349d79ab6182bf8593f25&response_type=code&redirect_uri=http://localhost:3000&scope=user-read-recently-played,user-top-read,user-read-playback-position,user-read-playback-state,user-modify-playback-state,user-read-currently-playing,playlist-modify-public,playlist-modify-private,playlist-read-private,playlist-read-collaborative,user-library-modify,user-library-read"
    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get('code');
    if (myParam) {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({grant_type : "authorization_code", code : myParam, redirect_uri : "http://localhost:3000"})
        };
        fetch('https://accounts.spotify.com/api/token', requestOptions)
            .then(response => console.log(response))
            .then(data => console.log(data))
        return (
            <div className="boxModule">
                <h1 className= "boxTitle">Login</h1>
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