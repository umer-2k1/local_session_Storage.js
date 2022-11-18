const clear_data = document.querySelector("#clearData")

// save value in browser
let fullName = "Muhammad Umer"
localStorage.setItem("name", JSON.stringify(fullName))

// Save an Array in Browser
let countryName = ["Pakistan", "India", "USA", "Dubai", "Kingdom of Saudia Arabia"]
localStorage.setItem("country", JSON.stringify(countryName))

// Save Object in browser
let person = {
    name: "Muhammad Umer",
    age: 20,
    gender: "male",
    height: "5 feet 4 inches",
}
localStorage.setItem('person', JSON.stringify(person))

// Retrieve Person data from Browser
let getPerson = JSON.parse(localStorage.getItem('person'))
console.log(getPerson)

// Delete Data from Browser

// localStorage.removeItem('country')

// Clear all Data
clear_data.addEventListener('click', ()=>{
    localStorage.clear()
})
