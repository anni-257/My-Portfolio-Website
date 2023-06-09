
// Scroll

var targetSectionTags=document.querySelectorAll(".navbar a");
var scrollInterval;
for(let i=0;i<targetSectionTags.length;i++){
    targetSectionTags[i].addEventListener("click",function(event){
        var targetSectionText=this.innerText.toLowerCase();
        if(targetSectionText=='home' || targetSectionText=='x' || targetSectionText=='contact'){
            return;
        }
        event.preventDefault();
        console.log(targetSectionText);
        var targetSectionId=document.getElementById(targetSectionText);
        // console.log(targetSectionId);
        targetSectionId.getBoundingClientRect
        scrollInterval=setInterval(verticalScroll,30,targetSectionId);


    })
}

function verticalScroll(targetSectionId,targetSectionText){
    var targetSectionCoordinates=targetSectionId.getBoundingClientRect();
    if(targetSectionCoordinates.top<=0){
        clearInterval(scrollInterval);
        return;
    }
    window.scrollBy(0,50);
}




// Skills


var skillBars=document.querySelectorAll(".skill-progress > div");
// var skillContainer=document.getElementById("skills-flex");
console.log(skillBars)



// var animationDone=false;


function initializeBar(bar){
        bar.setAttribute("data-visited", false);
        bar.style.width= 0 + "%";
}

for(var bar of skillBars){
    initializeBar(bar);
}


function fillbar(bar){
        let targetWidth=bar.getAttribute("data-bar-weight");
        let currentWidth=0;
        let interval=setInterval(function(){
            if(currentWidth>=targetWidth){
                clearInterval(interval);
                return;
            }

            currentWidth++;
            bar.style.width= currentWidth + "%";
        },30)

}

function checkScroll(){
    for(let bar of skillBars){
        var skillContainerCoordinates=bar.getBoundingClientRect();
        if((bar.getAttribute("data-visited") == "false") && skillContainerCoordinates.top<=innerHeight){
            // fillbars
            bar.setAttribute("data-visited", true);
            fillbar(bar);
        }else if(skillContainerCoordinates.top>innerHeight){
            bar.setAttribute("data-visited", false);
            initializeBar(bar);
        }
    }
    
}

window.addEventListener("scroll", checkScroll);
window.addEventListener("load", checkScroll);

// Counter

var current=document.querySelector(".current");
var next=document.querySelector(".next");

function startCounter(){
    var interval=setInterval(animate,1000);
}

function animate(){
    next.classList.add('animate');
    setTimeout(function(){
        next.classList.remove("animate");
    },500);
}

startCounter();





