function createTrackItem(index,name,duration){
    let trackItem = document.createElement('div');
    trackItem.setAttribute("class", "playlist-track-cn");
    trackItem.setAttribute("id", "ptc-"+index);
    trackItem.setAttribute("data-index", index);
    
  
    let playbuttonItem = document.createElement('div');
    playbuttonItem.setAttribute("class", "playlist-button-play");
    playbuttonItem.setAttribute("id", "pbp-"+index);
    document.querySelector("#ptc-"+index).appendChild(playbuttonItem);
  
    let buttonImg = document.createElement('i');
    buttonImg.setAttribute("class", "fas fa-play");
    buttonImg.setAttribute("height", "40");
    buttonImg.setAttribute("width", "40");
    buttonImg.setAttribute("id", "p-img-"+index);
    document.querySelector("#pbp-"+index).appendChild(buttonImg);
  
    let trackInfoItem = document.createElement('div');
    trackInfoItem.setAttribute("class", "playlist-info-track");
    trackInfoItem.innerHTML = name
    document.querySelector("#ptc-"+index).appendChild(trackInfoItem);
  
    let trackDurationItem = document.createElement('div');
    trackDurationItem.setAttribute("class", "playlist-duration");
    trackDurationItem.innerHTML = duration
    document.querySelector("#ptc-"+index).appendChild(trackDurationItem);
  }
 
  // declaring audio files
  let listAudio= [
    {
        name:"Netrum & Halvorsen - Shivers",
        path:"music/Netrum & Halvorsen - Shivers [NCS Release].mp3",
        duration:"03:15"
      },
      {
        name:"ROY KNOX - Waterfall",
        path:"music\ROY KNOX - Waterfall (Feat. Ellen Louise) [NCS Release].mp3",
        duration:"03:15"
      },
      {
        name:"Rival - Lonely Way (ft. Caravn)",
        path:"music\Rival - Lonely Way (ft. Caravn) [NCS Release].mp3",
        duration:"2:25"
      }

  ]

  for (let i = 0; i < listAudio.length; i++) {
    createTrackItem(i,listAudio[i].name,listAudio[i].duration);
}
let indexAudio = 0;

// function to load new track

function loadNewTrack(index){
  var player = document.querySelector('#source-audio')
  player.src = listAudio[index].file
  document.querySelector('.title').innerHTML = listAudio[index].name
  this.currentAudio = document.getElementById("myAudio");
  this.currentAudio.load()
  this.toggleAudio()
  this.updateStylePlaylist(this.indexAudio,index)
  this.indexAudio = index;
}

let playListItems = document.querySelectorAll(".playlist-track-cn");



for (let i = 0; i < playListItems.length; i++){
  playListItems[i].addEventListener("click", getClickedElement.bind(this));
}
=


document.querySelector('#source-audio').src = listAudio[indexAudio].file
document.querySelector('.title').innerHTML = listAudio[indexAudio].name


var currentAudio = document.getElementById("myAudio");

currentAudio.load()

currentAudio.onloadedmetadata = function() {
      document.getElementsByClassName('duration')[0].innerHTML = this.getMinutes(this.currentAudio.duration)
}.bind(this);

var interval1;


//function to change the audio
function toggleAudio() {

    if (this.currentAudio.paused) {
      document.querySelector('#icon-play').style.display = 'none';
      document.querySelector('#icon-pause').style.display = 'block';
      document.querySelector('#ptc-'+this.indexAudio).classList.add("active-track");
      this.playToPause(this.indexAudio)
      this.currentAudio.play();
    }else{
      document.querySelector('#icon-play').style.display = 'block';
      document.querySelector('#icon-pause').style.display = 'none';
      this.pauseToPlay(this.indexAudio)
      this.currentAudio.pause();
    }
  }

//function to pause the audio
  function pauseAudio() {
    this.currentAudio.pause();
    clearInterval(interval1);
  }
 
  //function to change the seekbar

function setBarProgress(){
    var progress = (this.currentAudio.currentTime/this.currentAudio.duration)*100;
    document.getElementById("myBar").style.width = progress + "%";
  }


  //function to play next song on the list
  function next(){
    if (this.indexAudio <listAudio.length-1) {
        var oldIndex = this.indexAudio
        this.indexAudio++;
        updateStylePlaylist(oldIndex,this.indexAudio)
        this.loadNewTrack(this.indexAudio);
    }
  }
  
    //function to previous next song on the list
  function previous(){
    if (this.indexAudio>0) {
        var oldIndex = this.indexAudio
        this.indexAudio--;
        updateStylePlaylist(oldIndex,this.indexAudio)
        this.loadNewTrack(this.indexAudio);
    }
  }

  // change the icon from play to pause
  function playToPause(index){
    var ele = document.querySelector('#p-img-'+index)
    ele.classList.remove("fa-play");
    ele.classList.add("fa-pause");
  }
 
