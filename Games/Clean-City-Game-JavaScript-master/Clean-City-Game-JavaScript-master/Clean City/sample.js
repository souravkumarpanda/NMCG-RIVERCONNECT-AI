let dragged;
let dropObject;
var level1 = 7
var FinalLevel;
function onDragOver(event) {
    event.preventDefault();
}

function onDragLeave(event) {
    event.target.style.background = '';
//    console.log("hi2");
}

function onDragEnter(event) {
    const target = event.target;
    console.log(target);
    if (target && dragged) {
        event.preventDefault();
        event.dataTransfer.dropEffect = 'move'
    }
}
var score = 0;
function onDrop(event) {
    const target = event.target;
    var scoreCnt = 0;
    var garbageType = dragged.getAttribute("data-garbageType");
    var dustbinType = target.getAttribute("data-dustbinType");
//    var dustbinType = target.getAttribute("data-dustbinType");
    if (garbageType === dustbinType)
    {
        scoreCnt++;
    } else
    {
        scoreCnt--;
    }
    score += scoreCnt;
    if (target && dragged) {
        target.style.backgroundColor = '';
        event.preventDefault();
        dragged.parentNode.removeChild(dragged);
        dragged.style.opacity = '';
        totalGarbageThing--;
    }
    document.getElementById("Score").innerHTML = score;
}

function onDragStart(event) {
    if (document.getElementById("flag").value == "true")
    {
        let target = event.target;
        if (target && target.nodeName === 'IMG') { // If target is an image
            dragged = target;
            event.dataTransfer.setData('text', target.id);
            event.dataTransfer.dropEffect = 'move';
            event.target.style.opacity = .3;
        }
    }
}

function onDragEnd(event) {
    console.log(event.target + "==" + event.target.nodeName);
    if (event.target && event.target.nodeName === 'IMG') {
        event.target.style.opacity = ''; // reset opacity when drag ends 
        dragged = null;
    }
}

var totalTrash = (document.getElementsByClassName("trash"));
const trash = new Array(totalTrash.length);
var totalGarbageThing = 0;
totalGarbageThing = totalTrash.length;
for (i = 0; i < totalTrash.length; i++)
{
    trash[i] = totalTrash[i];
    trash[i].addEventListener('dragstart', onDragStart);
    trash[i].addEventListener('dragend', onDragEnd);
}

const dropZone = document.querySelector('.drop-zone');
const dropZone1 = document.querySelector('.drop-zone1');
// Adding event listeners
dropZone.addEventListener('drop', onDrop);
dropZone.addEventListener('dragenter', onDragEnter);
dropZone.addEventListener('dragleave', onDragLeave);
dropZone.addEventListener('dragover', onDragOver);
dropZone1.addEventListener('drop', onDrop);
dropZone1.addEventListener('dragenter', onDragEnter);
dropZone1.addEventListener('dragleave', onDragLeave);
dropZone1.addEventListener('dragover', onDragOver);
function countdown(level) {
    FinalLevel = level;
    document.getElementById("flag").value = "true";
    document.getElementById("startBtn").disabled = true;
    var seconds = 60;
    function tick() {
        var counter = document.getElementById("counter");
        if (totalGarbageThing !== 0)
        {
            seconds--;
        }
        counter.innerHTML = "0:" + (seconds < 10 ? "0" : "") + String(seconds);
        if (seconds > 0 || level1 < 7) {

            if (totalGarbageThing === 0)
            {
                if (level === "level1")
                {
                    var modal = document.getElementById('myModal');
                    var span = document.getElementsByClassName("close")[0];
                    modal.style.display = "block";
                    span.onclick = function () {
                        modal.style.display = "none";
//                        alert("level 2");
//                        window.location = "level2.html";
                    }
                    window.onclick = function (event) {
                        if (event.target == modal) {
                            modal.style.display = "none";
                        }
                        alert("level 2");
                        window.location = "level2.html";
                    }
//                    alert("level 2");
//                    window.location = "level2.html";
                } else if (level === "level2")
                {
                    var modal = document.getElementById('myModal');
                    var span = document.getElementsByClassName("close")[0];
                    modal.style.display = "block";
                    span.onclick = function () {
                        modal.style.display = "none";
                    }
                    window.onclick = function (event) {
                        if (event.target == modal) {
                            modal.style.display = "none";
                        }
                        alert("level 3");
                        window.location = "level3.html";
                    }
//                    alert("level 3");
//                    window.location = "level3.html";
                } else
                    window.location = "main.html";
            }
            setTimeout(tick, 1000);
        } else {
            alert("Your Game is over.");
            document.getElementById("startBtn").disabled = false;
            alert("Write your message here before going main page");
            window.location = "main.html";
        }
    }
    tick(level);
}

//function hideWaste()
//{
//    if (document.getElementById("waste"))
//        document.getElementById("waste").style.display = "none";
//}

function showDetails(garbage) {

}
function startGame()
{
    window.location = "level1.html";
}