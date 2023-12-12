// Steg 1. Gör en fetch till 'https://api.sr.se/api/v2/channels/?format=json'

const ul = document.getElementById('channels');
const channelslist = document.createDocumentFragment();
const apiUrl = 'https://api.sr.se/api/v2/channels/?format=json&size=100';

fetch(apiUrl)
.then((response) => {
  return response.json();
})
.then((data) => {
  
  let channels = data.channels;

   channels.forEach(function(channel) {
    let channelStation = document.createElement('div');
    let stationBox = document.createElement('div');
    let name = document.createElement('h2');
    let image = document.createElement('img')
    let tagline = document.createElement('p');
    let liveaudio = document.createElement('audio');
    
    channelStation.style.backgroundColor = `${'#'+ channel.color}`;
    channelStation.classList.add("radioplayer");
    
    name.innerHTML = `${channel.name}`;
    name.classList.add("stationBox");
   
    image.src = `${channel.image}`;
    image.classList.add("stationart");


    tagline.innerHTML = `${channel.tagline}`;
    tagline.classList.add("tagline","stationBox");

    liveaudio.src = `${channel.liveaudio.url}`;
    liveaudio.controls = true;
    liveaudio.classList.add("stationBox");


    channelStation.appendChild(image);
    channelStation.appendChild(stationBox);
    stationBox.appendChild(name);
    stationBox.appendChild(tagline);
    stationBox.appendChild(liveaudio);
    channelslist.appendChild(channelStation);

  });
  ul.appendChild(channelslist);
  console.log(data);
});