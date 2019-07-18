let menu = document.getElementById("menuItems")
let starters = document.getElementById('starters')
let entrees = document.getElementById('entrees')
let desserts = document.getElementById('desserts')

let menuDiv = dishes.map(dishes => {
    
    let titleDiv = `<div>
                    <h3>${dishes.title}</h3>
                    <span>$${dishes.price}</span>
                    <p>${dishes.description}</p>
                    <img src=${dishes.imageURL}></img>
                    </div>`
    return titleDiv
})
menu.innerHTML = menuDiv.join('')

starterdishes = dishes.filter(dish => dish.course == "Starters")
console.log(starterdishes)




starters.addEventListener('click',() =>{
    let startersList = starterdishes.map(dish =>{
        let starterdiv = `<div> 
                            <h3>${dish.title}</h3>
                            <span>$${dish.price}</span>
                            <p>${dish.description}</p>
                            <img src=${dish.imageURL}></img>
                        </div>`
        return starterdiv
        
    })
starters.innerHTML = startersList.join('')

})

entreesdishes = dishes.filter(dish => dish.course == "Entrees")
console.log(entreesdishes)




entrees.addEventListener('click',() =>{
    let entreesList = entreesdishes.map(dish =>{
        let entreesdiv = `<div> 
                            <h3>${dish.title}</h3>
                            <span>$${dish.price}</span>
                            <p>${dish.description}</p>
                            <img src=${dish.imageURL}></img>
                        </div>`
        return entreesdiv
        
    })
entrees.innerHTML = entreesList.join('')

})


dessertsdishes = dishes.filter(dish => dish.course == "Desserts")
console.log(dessertsdishes)




desserts.addEventListener('click',() =>{
    let dessertsList = dessertsdishes.map(dish =>{
        let dessertsdiv = `<div> 
                            <h3>${dish.title}</h3>
                            <span>$${dish.price}</span>
                            <p>${dish.description}</p>
                            <img src=${dish.imageURL}></img>
                        </div>`
        return dessertsdiv
        
    })
desserts.innerHTML = dessertsList.join('')

})