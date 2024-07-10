//40. ALBUM
//Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. 
//Print each return value to show that Objects are storing the album information correctly. 
//Add an optional parameter to make_album() that allows you store the number of tracks on a album. If the calling line includes a value for the number of tracks, add that value to the album's Object. 
function make_album(artist, album_title, tracks_created) {
    var album = {
        artist_name: artist,
        title: album_title,
    };
    if (tracks_created !== undefined) {
        album.tracks = tracks_created;
    }
    return album;
}
var album_1 = make_album("Hafiza", "Album title: 1");
console.log(album_1);
var album_2 = make_album("Umera", "Album title: 2");
console.log(album_2);
//Task: Make atleast one new function call that includes the number of tracks on an album.
var album_3 = make_album("Aliya", "Album title: 3", 12);
console.log(album_3);
