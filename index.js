//API fetch 
//first find the element to attach API to
const dogEl = document.getElementById('dogEl')
 dogEl.addEventListener("click", fetch);

const apiKey = ("live_yHGf5z1JXE3ehtAnbb11DXwhO4VCbam5F8bsz1lIUZbT2doKGu03CqPFJm6pkc10")

// async function dogAPI() {
//     dogEl.style.cursor = 'wait';
//     const dogImages = await fetch("https://api.thedogapi.com/v1/images/search?limit=10");
//     console.log(dogImages)
//     const jsonData = await dogImages.json();
//     console.log(jsonData)
//     const url = jsonData.message;

//     dogEl.src = url;
//     dogEl.style.cursor = 'pointer';
// }

// dogAPI();


fetch('https://api.thecatapi.com/v1/images/search?limit=10')
    .then((res) => res.json())
    .then((data) => {
    console.log(data);   
  })
  .catch((err) => {
    console.error(`There was an error: ${err}`);
  });

  function breedImage(){
 let images = data[url] 
 console.log(images)
 dogEl.appendChild("images")
  }
  