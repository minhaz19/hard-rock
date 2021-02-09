const songSearch = async() =>{
    const songInput = document.getElementById("songInput").value;
    url = `https://api.lyrics.ovh/suggest/${songInput}`;
    const res = await fetch(url);
    const data = await res.json();
    songDetails(data.data);
}
// const songSearch = () =>{
//     const songInput = document.getElementById("songInput").value;
//     url = `https://api.lyrics.ovh/suggest/${songInput}`;
//     fetch(url)
//     .then(res => res.json())
//     .then(data => songDetails(data.data))
// }

const songDetails = songs =>{
    const songName =document.getElementById("songName");
    songName.innerHTML="";
    songs.forEach(song => {
        console.log(song.title)
        const songDiv = document.createElement("div");
        songDiv.className = 'single-result row align-items-center my-3 p-3';
        songDiv.innerHTML = `
        <div class="col-md-9">
            <h3 class="lyrics-name">${song.title}</h3>
            <p class="author lead">Album by ${song.artist.name} <span>Washed Out</span></p>

            <audio controls>
                <source src="${song.preview}" type="audio/mpeg">
            </audio>
        </div>

        <div class="col-md-3 text-md-right text-center">
            <button onclick="displayLyrics('${song.artist.name}/${song.title}')"} class="btn btn-success">Get Lyrics</button>
        </div>
        `
        songName.appendChild(songDiv);
    });

}

const displayLyrics = async(name)=>{
    url = `https://api.lyrics.ovh/v1/${name}`;
    const res =await fetch(url);
    const data =await res.json();
    lyrics(data);
}
// const displayLyrics = (name)=>{
//     url = `https://api.lyrics.ovh/v1/${name}`;
//     fetch(url)
//     .then(res => res.json())
//     .then(data => lyrics(data))
// }

const lyrics = (song) =>{
    const songLyrics = document.getElementById("songLyrics");
    songLyrics.innerText = song.lyrics;

}