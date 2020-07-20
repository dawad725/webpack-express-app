import "../stylesheets/style.css"
import Dog from './dog'

let backgroundColor = document.body.style.background = "orange"

addElement()



function addElement() {
    let newHeading = document.createElement('h1')

    let newContent = document.createTextNode("Hello World!")

    newHeading.appendChild(newContent)

    let originalHeading = document.getElementsByTagName('h1')[0]
    document.body.insertBefore(newHeading, originalHeading)

    // document.body.addEventListener('onclick', function () {
    let some_dog = new Dog()
    some_dog.bark()
    // })


    window.displayBoogers.chief()


}
