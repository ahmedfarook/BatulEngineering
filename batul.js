function random()
{
    var num = (Math.floor(Math.random() * Math.floor(6)))
    return num
    
}


document.getElementById('image1').src = "images/" + random() + ".jpg"

//document.getElementsByClassName().innerhtml

//="images/" + random() + ".jpg"
//console.log(x)