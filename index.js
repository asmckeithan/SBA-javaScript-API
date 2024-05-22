//Audio input of Window
import '/form.js'

let myAudio = document.querySelector('#audio')
document.body.appendChild(myAudio);
myAudio.play();


//API fetch 
//first find the element to attach API to
const button = document.getElementById('btn')
 button.addEventListener("click", dogAPI);

async function dogAPI() {
    dogEl.style.cursor = 'wait';
    const dogImages = await fetch("https://api.thedogapi.com/v1/images/search?limit=10?api_key=live_yHGf5z1JXE3ehtAnbb11DXwhO4VCbam5F8bsz1lIUZbT2doKGu03CqPFJm6pkc10");
    console.log(dogImages)
    const jsonData = await dogImages.json();
    console.log(jsonData)
    const url = jsonData[0].url;
    //grabbing inage element
    const dogImage = document.getElementById('dog_image')
    

    dogImage.src = url;
    dogEl.style.cursor = 'pointer';
}

dogAPI();
//Form
