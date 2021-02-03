//async is used when we want to use await
async function loadSongs(artist){
    let response = await fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q="+artist, { //make it searchable with any artist 
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "ff335281edmsh6eb1b377fba8ab7p12fa49jsn1f14aa952114",
		"x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com"
	}
})
// .then(response => {  -> from API originally but we don't need them 
// 	console.log(response);
// })
// .catch(err => {
// 	console.error(err);
// });

    let songsResponse = await response.json()
    console.log(songsResponse)
}
