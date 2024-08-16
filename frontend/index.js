function moduleProject1() {
  const footer = document.querySelector('footer')
  const currentYear = new Date().getFullYear()
  footer.textContent = `© BLOOM INSTITUTE OF TECHNOLOGY ${currentYear}`

  // 👇 WORK WORK BELOW THIS LINE 👇

  // 👉 TASK 1 - Add a "widget" class name to widgets so CSS kicks in
  //  ✨ add your code here
    const element1 = document.querySelector(".quoteoftheday");
    element1.classList.add("widget");

    const element2 = document.querySelector(".corporatespeak");
    element2.classList.add("widget");

    const element3 = document.querySelector(".countdown");
    element3.classList.add("widget");

    const element4 = document.querySelector(".friends");
    element4.classList.add("widget");
  // 👉 TASK 2 - Build a "Quote of the Day" widget
  //  ✨ add your code here
  console.log(quotes)
  let quoteIndex = Math.floor(Math.random() * 9) + 1
  let quote = quotes[quoteIndex]
  console.log(quote)
  if(quote.date === null){
    quote.date = "Unknown Date"
  }
  
  element1.outerHTML = `<div class="quoteoftheday widget"><h3>Quote of the Day</h3><div>${quote.quote}</div><div>${quote.author} in ${quote.date}</div></div>`

  // 👉 TASK 3 - Build a "Corporate Speak" widget
  //  ✨ add your code here
let noun1 = nouns[Math.floor(Math.random() * 10)]
let adverb1 = adverbs[Math.floor(Math.random() * 10)]
let verb1 = verbs[Math.floor(Math.random() * 10)]

let noun2 = nouns[Math.floor(Math.random() * 10)]
let adverb2 = adverbs[Math.floor(Math.random() * 10)]
let verb2 = verbs[Math.floor(Math.random() * 10)]


  element2.outerHTML = `<div class="corporatespeak widget">
  <h3>Corporate Speak</h3>
  <p>
    We need to ${verb1} our ${noun1} ${adverb1}
    in order to ${verb2} our ${noun2} ${adverb2}.
  </p>
</div>`

  // 👉 TASK 4 - Build a "Countdown" widget
  //  ✨ add your code here
  let str = ["T-minus 5...","T-minus 4...","T-minus 3...","T-minus 2...","T-minus 1...","Liftoff! 🚀"]
  let index = 0
  const newEl = document.createElement('p')
  newEl.textContent = `${str[index]}`
  element3.appendChild(newEl)
  let timerId = setInterval(() => {
    newEl.textContent = `${str[index]}`
    if(index < str.length){
      index++
    } else {
      newEl.textContent = `${str[str.length - 1]}`
      clearInterval(timerId)
      
    }
}, 1000);

  // 👉 TASK 5 - Build a "Friends" widget
  //  ✨ add your code here
  let person = people[Math.floor(Math.random() * 15)]
  let friends = ' '
  let friendsStatus = ''
  if(person.friends.length === 0){
    friendsStatus += ' has no friends'
  } else {
    friendsStatus += ' is friends with '
  }

  for(let i = 0; i < person.friends.length; i++){
    for(let j = 0; j < people.length; j++){
      if(person.friends[i] === people[j]["id"]){
        
        if(person.friends.length > 2) {
          if(i === person.friends.length - 1){
              friends += 'and ' + people[j].fname
            } else {
              friends += people[j].fname + ', '
            }
        } else if (person.friends.length === 2){
          if(i === person.friends.length - 1){
              friends += ' and ' + people[j].fname
            } else {
              friends += people[j].fname
            }
        } else if(person.friends.length === 1){
          friends += people[j].fname
        }
            
            
      }
    }
  }

    element4.outerHTML = `<div class="friends widget">
    <h3>Friends</h3>
    <p>${person.fname} was born in ${person.dateOfBirth} and ${friendsStatus} ${friends}.</p>
  </div>`

  console.log(person)
  // 👉 TASK 6 - Make it so user can tab through the widgets
  //  ✨ add your code here

    const newelement1 = document.querySelector(".quoteoftheday");
    

    const newelement2 = document.querySelector(".corporatespeak");


    const newelement3 = document.querySelector(".countdown");


    const newelement4 = document.querySelector(".friends");
 

  newelement1.setAttribute("tabindex", "1")
  newelement2.setAttribute("tabindex", "2")
  newelement3.setAttribute("tabindex", "3")
  newelement4.setAttribute("tabindex", "4")



  // 👆 WORK WORK ABOVE THIS LINE 👆
}

// ❗ DO NOT WORK BELOW THIS LINE
// ❗ DO NOT WORK BELOW THIS LINE
// ❗ DO NOT WORK BELOW THIS LINE
if (typeof module !== 'undefined' && module.exports) module.exports = { moduleProject1 }
else moduleProject1()
