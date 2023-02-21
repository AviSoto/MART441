var imageTags = ["Callisto", "Charon", "Dione", "Enceladus", "Europa", "Ganymede", "Hyperion", "Lapetus", "Mimas", "Titan"];
var blankImagePath = "images/Blank.jpg";
var actualImages = new Array();
    
function printBlanks()
{
   // call our random image creation function
    createRandomImageArray();
    // create a for loop
    for(var i = 0; i < imageTags.length; i++)
    {
    // iterate through the image tag ids and sets the source 
        document.getElementById(imageTags[i]).src= blankImagePath;
    }  
}

function createRandomImageArray()
{
    var actualImagePath = ["images/Callisto.jpg", "images/Charon.jpg", "images/Dione.jpg", "images/Enceladus.jpg", "images/Europa.jpg", "images/Ganymede.jpg", "images/Hyperion.jpg", "images/Lapetus.jpg", "images/Mimas.jpg", "images/Titan.jpg"];
    var count = [0,0];
    while(actualImages.length < 4)
    {
        // get a random number between 0 and the number total number of images that we can choose from
        var randomNumber = Math.floor(Math.random() * actualImagePath.length)
          // create an if statement that says if the total number added is less than 2, then
        // add the image to the actual image array
        if(count[randomNumber] < 2)
        {
            actualImages.push(actualImagePath[randomNumber]);
            // then add one to the array that makes sure only two images can be added
            count[randomNumber] = count[randomNumber] + 1;
        }
    }      
}

function flipImage(number)
{
    document.getElementById(imageTags[number]).src= actualImages[number];
        // this should be a quick function that just changes
        // the image based on what number was pressed
        
    
}