import "./App.css";
import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar'

function Track({name, artist, duration, date, albumName, image}) {
    return (<div>
                <p>{name}, {artist}, {duration}, {date}, {albumName}, {image}</p>
            </div>
    )
}

function displayTracklist(tracklist) {
    var returnList = [];
    for (var i in tracklist){
        for (var y in tracklist[i]) {
            var pageTracks = tracklist[i];
            var element = pageTracks[y];
            returnList.push(<Track key={element.track.name + i + y} name={element.track.name} artist={element.track.artists[0].name} duration={element.track.duration_ms} date={element.added_at} albumName={element.track.album.name} image={element.track.album.images[0].url}></Track>)
        }
    }
    return returnList;
}

function getLikedTracks(token, jsonTracks, url, setTracklist) {
    const requestOptions = {
        method : 'GET',
        headers : new Headers({'Authorization' : 'Bearer ' + token})
    };
    fetch(url, requestOptions)
    .then(response => {
        if(!response.ok) throw new Error(response.status);
        else return response.json();
    })
    .then(data => {
        if (data && data !== undefined) {
            jsonTracks.push(data.items);
            if (data.next !== null) {
                getLikedTracks(token, jsonTracks, data.next, setTracklist)
            }
            else {
                localStorage.setItem("tracklist", JSON.stringify(jsonTracks));
                return (setTracklist(jsonTracks));
            }
        }
        else {
            return console.log("ERROR REQUESTING SPOTIFY");
        }
    })
    .catch((error) => {
        console.log('error: ' + error);
        return;
    });
}

function Tracklist({token}) {
    const [tracklist, setTracklist] = React.useState([]);
    var url = "https://api.spotify.com/v1/me/tracks?limit=50";
    var savedTracklist = JSON.parse(localStorage.getItem("tracklist"));
    if (tracklist.length === 0 && !savedTracklist) {
        console.log("go fetch");
        getLikedTracks(token, [], url, setTracklist);
    }
    return(
        <div className="trackList">
            {(tracklist.length <= 0 || savedTracklist.length) <= 0 && <ProgressBar animated variant="success" now={tracklist.length <= 0 ? 50 : 90} />}
            {tracklist.length > 0 ? displayTracklist(tracklist) : displayTracklist(savedTracklist)}
        </div>
    );
}

export default Tracklist