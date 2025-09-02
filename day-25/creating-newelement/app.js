let sec = document.querySelector('section')

let h2 = document.createElement('h2')
let p = document.createElement('p')


 h2.innerText = 'hi i ma h2'
 p.innerText = 'tum kaise ho babu'
 
// 1 appendChild
// sec.appendChild(h2)
// sec.appendChild(p)

//sec.appendChild(h2 , p , "hello"). --> multiple not allowed/ and also string are not allowed/

// 2 append()mutliple and string also allowed

// sec.append(h2)
// sec.append(p)
// sec.append(h2 , p , "hello")//

// 3. prepend --> start add. -->multiple --> string
// starting me add
  
// sec.prepend(h2)
// sec.prepend(p)
//sec.prepend(h2 , p , "my babu")//


//----------------
sec.before(h2)
sec.after(h2)
