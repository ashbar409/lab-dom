let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`,
];

window.onload =  function(event) {
  
  // Random quote of the day generator
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${
      quotes[Math.floor(Math.random() * quotes.length)]
    }"`;
  };
  randomQuote();

  // Do all of your work inside the window.onload function (in other words, here!)

  // Part 1

  document.querySelector('#main-title').innerText = "I'm DOM, welcome to my family."

  // Part 2

  document.body.setAttribute('style','background-color: #0F52BA')

  // Part 3

  let favorites = document.querySelector('#favorite-things')
  favorites.removeChild(favorites.lastElementChild)

  // Part 4

  let titles = document.querySelectorAll('.special-title')
  titles.forEach(element => element.setAttribute('style','font-size: 2rem'))

  // Part 5

  let races = document.querySelector('#past-races')
  races.removeChild(races.children[3])

  // Part 6

  let newRace = document.createElement('li')
  newRace.innerHTML = 'Pittsburgh'
  races.appendChild(newRace)

  // Part 7

  let pittPost = document.createElement('div')
  pittPost.setAttribute('class','blog-post purple')
  let pittHead = document.createElement('h1')
  pittHead.innerText = 'Pittsburgh'
  pittPost.appendChild(pittHead)
  pittPara = document.createElement('p')
  pittPara.innerText = 'I GOT STUCK IN CONSTRUCTION TRAFFIC!'
  pittPost.appendChild(pittPara)
  let posts = document.body.children[2]
  posts.appendChild(pittPost)

}