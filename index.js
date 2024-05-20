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
fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))


// url = `https://api.thedogapi.com/v1/images/search?limit=10`;

// fetch(url)
//     .then(function(response){
//         return response.json();
//      })
//     .then(function(data){
//     console.log(data)
//     })
// }
// getRandomDog(_url)


// const api_key = ("live_yHGf5z1JXE3ehtAnbb11DXwhO4VCbam5F8bsz1lIUZbT2doKGu03CqPFJm6pkc10");

// a variable to store the information about the breeds

// let storedBreeds = [];

// // a function to select a random breed
// function showCatImageAndInformation(index) {

//     // This will display the image of the cat
//       document.getElementById("cat_image").src = storedBreeds[index].image.url;
    
//     // This will get the breed name
//       document.getElementById("breed_name").innerHTML = storedBreeds[index].name;
    
//     // This will get the wiki link
//       document.getElementById("wiki_link").href = storedBreeds[index].wikipedia_url;
    
//       document.getElementById("wiki_link").innerHTML =
//         storedBreeds[index].wikipedia_url;  
    
//     // This will get the characteristics of the cat
//       document.getElementById("breed_json").textContent =
//         storedBreeds[index].temperament;
//     }