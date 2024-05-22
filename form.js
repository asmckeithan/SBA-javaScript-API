
//First we find the form 
const form = document.getElementById('dogInfo');

//NExt we add an event Listner to the form 
const formEvent = function () {
form.addEventListener('submit',(info) => {
    //Next we prevent the default actions and configure our own
    info.preventDefault();
    //making our own configurations 
    const dogInfo = new FormData(form)
//create an object for javascript 
const data = Object.fromEntries(dogInfo)

fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  headers: {
    'Content-type': 'application/data'
  },
  body: JSON.stringify(data)
})
  .then((response) => response.json())
  .then((data) => console.log(data))
//   .catch(error => console.log(error));
})
}
// Error unable to get the form modified in time to add or submit the my unique JSON object. Will work on this further. ERROR 405 NOT allowed
export default formEvent;