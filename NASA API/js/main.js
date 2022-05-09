//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/
document.querySelector('button').addEventListener('click', getPicture)

function getPicture(){
let date = document.querySelector('input').value
    //fetch code
    fetch(`https://api.nasa.gov/planetary/apod?api_key=sZU6VdpPlhrz1QNsW587VGnzK7yG2yMz6cWc0oZ7&date=${date}`)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data)
      document.querySelector('img').src = data.url
      document.querySelector('h2').innerText = data.title
      document.querySelector('h3').innerText = data.explanation
      
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}

