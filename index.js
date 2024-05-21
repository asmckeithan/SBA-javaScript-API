//API fetch 
//first find the element to attach API to
const button = document.getElementById('btn')
 button.addEventListener("click", dogAPI);

const apiKey = ("live_yHGf5z1JXE3ehtAnbb11DXwhO4VCbam5F8bsz1lIUZbT2doKGu03CqPFJm6pkc10")

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

const type = document.getElementById('type')
// const submit = document.getElementById('submit')
// submit.addEventListener("click", dogJson)
// async function dogJson(){
// fetch('https://jsonplaceholder.typicode.com/posts', {
//   method: 'POST',

//   body: JSON.stringify({
//     type: "",
//     color: "",
//     age: "",
//   }),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
// })
//   .then((response) => response.json())
//   .then((json) => (console.log(json)))
// } 


//   const dogBreed = document.getElementById('type')
//   const inputdogBreed = data.title
const ajax = async (config) => {
    const request = await fetch('https://jsonplaceholder.typicode.com/post', {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(config.ajax)
    });
    res = await request.json();
    console.log('response', res)
    return response
}

// usage
response = ajax({
    method: 'POST',
    url: 'example.com',
    payload: {"name": "Stackoverflow"}
})


let myAudio = document.querySelector('#audio')
myAudio.play()