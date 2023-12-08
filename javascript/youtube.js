

const tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
const firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

let player;
const setVideo = (videoId)=> {
    console.log(videoId)
    player = new YT.Player('player',{
        videoId: videoId,
        events: {
            'onStateChange': onPlayerStateChange
        }
    });
}


var done = false;
var lastInterval = null;
let keyframesFunctions= {}
function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING) {
        lastInterval = setInterval(function () {
           // keyframesFunctions contains seconds and functions like {5:()=>console.log("five seconds!")} I want that this will always call the appropriate function based on the time but still taking to considerations interval hiccups
            const currentTime = player.getCurrentTime();
            const timeInSeconds = Math.floor(currentTime);
            if (keyframesFunctions[timeInSeconds]) {
                keyframesFunctions[timeInSeconds]();
            }
        }, 1000);
    }
}


export function startVideo(title,videoId, _keyframesFunctions){
    keyframesFunctions = _keyframesFunctions
    const lastContainer = document.getElementById("youtube-container")
    if(lastContainer){
        lastContainer.remove()
        clearInterval(lastInterval)
    }
    const ytContainer = document.createElement('div');
    ytContainer.style.position="absolute"
    ytContainer.style.top="50px"
    ytContainer.style.left="50px"
    ytContainer.style.zIndex="101"
    ytContainer.setAttribute("id","youtube-container")


    const videoContainerWindow = document.createElement('div');
    videoContainerWindow.style.width="100%"
    videoContainerWindow.style.height="30px"
    videoContainerWindow.style.background="#5e5e5e"
    videoContainerWindow.style.cursor="move";
    videoContainerWindow.style.display= "flex";
    videoContainerWindow.style.alignItems= "center";
    const titleEl = document.createElement('span')
    titleEl.style.flexGrow= "1";
    titleEl.style.padding= "4px";
    titleEl.appendChild(document.createTextNode(title))

    videoContainerWindow.appendChild(titleEl);
    //Add minimize and exit:
    const minimizeButton = document.createElement('button');
    minimizeButton.style.marginRight = "5px";
    minimizeButton.innerHTML = "-";

    minimizeButton.onclick = () => {
        document.getElementById("player").hidden=!document.getElementById("player").hidden
    }

    const exitButton = document.createElement('button');
    exitButton.innerHTML = "X";
    exitButton.style.marginRight="5px";

    exitButton.onclick = () => {
        ytContainer.remove();
    }

    videoContainerWindow.appendChild(minimizeButton);
    videoContainerWindow.appendChild(exitButton);



    let drag = {x: 0, y: 0};
    let dragging = false;
    videoContainerWindow.onmousedown = (e) => {
        drag.x = e.clientX - ytContainer.offsetLeft;
        drag.y = e.clientY - ytContainer.offsetTop;
        dragging=true
    }

    document.onmousemove = (e) => {
        if (e.buttons === 1 && dragging) {
            ytContainer.style.left = `${e.clientX - drag.x}px`;
            ytContainer.style.top = `${e.clientY - drag.y}px`;
        }
    }

    document.onmouseup = (e) => {
        drag = {x: 0, y: 0};
        dragging=false;
    }


    ytContainer.appendChild(videoContainerWindow)
    const ytPlayer = document.createElement('div');
    ytPlayer.setAttribute("id","player")
    ytContainer.appendChild(ytPlayer)
    document.body.appendChild(ytContainer);
    setVideo(videoId)
}