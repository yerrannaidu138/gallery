
var allImg=document.images;
console.log(allImg);
function allImageTags()
{
    for(i=0;i<=allImg.length-1;i++)
    {
        allImg[i].src=`./gallery/${i+1}.jpg`
        allImg[i].style.width="300px"
        allImg[i].style.height="280px"
        allImg[i].addEventListener("click",function()
        {
            document.getElementById("bigImage").style.display="flex"
        })
    }
}
allImageTags();

var golbalSrc;
function passSrc(urlOfImg){
    document.getElementById("bigimg").style.backgroudImage=`url(${urlOfImg})`
    golbalSrc=urlOfImg;
    console.log(urlOfImg);
}
// console.log(globalSrc);

function closewindow()
{
    document.getElementById("bigImage").style.display="none";
    document.getElementById("container").style.display="none";
}

function openEditWindow()
{
    document.getElementById("container").style.display="flex";
    // document.getElementById("bigImage").style.display="none";
    document.getElementById("imgCon").style.backgroundImage=`url(${globalSrc})`
}






















function collectValue()
{
    var blurValue=document.getElementById("a").value;
    var brightnessValue=document.getElementById("b").value;
    var contrastValue=document.getElementById("c").value;
    var grascaleValue=document.getElementById("d").value;
    var hueValue=document.getElementById("e").value;
    var invertValue=document.getElementById("f").value;
    var opacityValue=document.getElementById("g").value;
    var saturateValue=document.getElementById("h").value;
    var sepiaValue=document.getElementById("i").value;


    var rotateZValue=document.getElementById("j").value;
    var rotateXValue=document.getElementById("k").value;
    var rotateYValue=document.getElementById("l").value;
    var scaleZValue=document.getElementById("m").value;
    var scaleXValue=document.getElementById("n").value;
    var scaleYValue=document.getElementById("o").value;
    var skewZValue=document.getElementById("p").value;
    var skewXValue=document.getElementById("q").value;
    var skewYValue=document.getElementById("r").value;
    console.log(rotateZValue)
    document.getElementById("imgCon").style.filter=`blur(${blurValue}px) brightness(${brightnessValue}%) contrast(${contrastValue}%)
    grayscale(${grascaleValue}%) hue-rotate(${hueValue}deg) invert(${invertValue}%) opacity(${opacityValue}%) saturate(${saturateValue}%)
    sepia(${sepiaValue}%)`;
    
    // console.log(rotateZValue,rotateXValue,rotateYValue,scaleXValue,scaleYValue,scaleZValue,skewXValue,skewYValue,skewZValue);
    document.getElementById("imgCon").style.transform=`rotateZ(${rotateZValue}deg) rotateX(${rotateYValue}deg) rotateY(${rotateXValue}deg) scaleX(${scaleXValue}) 
    scaleY(${scaleYValue}) skewX(${skewXValue}px) skewY(${skewYValue}px)`;
}