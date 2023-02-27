var actualImages = new Array();
var imageTags = ["Callisto", "Charon", "Dione", "Enceladus", "Europa", "Ganymede", "Hyperion", "Lapetus", "Mimas", "Titan"];
var blankImagePath = "images/Blank.jpg";

function printBlanks()
{
    createRandomImageArray();
    for(var i = 0; i < imageTags.length; i++)
    {
        document.getElementById(imageTags[i]).src= blankImagePath;
    }  
}

function createRandomImageArray()
{
    var actualImagePath = ["images/Callisto.jpg", "images/Charon.jpg", "images/Dione.jpg", "images/Enceladus.jpg", "images/Europa.jpg", "images/Ganymede.jpg", "images/Hyperion.jpg", "images/Lapetus.jpg", "images/Mimas.jpg", "images/Titan.jpg", "images/Enceladus.jpg", "images/Europa.jpg", "images/Ganymede.jpg", "images/Hyperion.jpg", "images/Lapetus.jpg", "images/Mimas.jpg", "images/Moon.jpg", "images/Titan.jpg", "images/Triton.jpg"];
    var count = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    while(actualImages.length < 4)
    {
        var randomNumber = Math.floor(Math.random() * actualImagePath.length)

        if(count[randomNumber] < 2)
        {
            actualImages.push(actualImagePath[randomNumber]);
            count[randomNumber] = count[randomNumber] + 1;
        }
    }      
}

function flipImage(number)
{
    document.getElementById(imageTags[number]).src= actualImages[number];     
}
