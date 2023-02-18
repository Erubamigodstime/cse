/* Lesson 4 */

/* DATA */

// Step 1: Declare a new variable to hold information about yourself

// Step 2: Inside of the object, add a property named name with a value of your name as a string

// Step 3: Add another property named photo with a value of the image path and name (used in Task 2) as a string

// Step 4: Add another property named favoriteFoods with a value of an array of your favorite foods as strings ( hint: [] )

// Step 5: Add another property named hobbies with a value of an array of your hobbies as strings

// Step 6: Add another property named placesLived with a value of an empty array

// Step 7: Inside of the empty array above, add a new object with two properties: place and length and values of an empty string

// Step 8: For each property, add appropriate values as strings

// Step 9: Add additional objects with the same properties for each place you've lived 


/* OUTPUT */

// Step 1: Assign the value of the name property (of the object declared above) to the HTML <span> element with an ID of name

// Step 2: Assign the value of the photo property as the src attribute of the HTML <img> element with an ID of photo

// Step 3: Assign the value of the name property as the alt attribute of the HTML <img> element with an ID of photo

// Step 4: For each favorite food in the favoriteFoods property, create an HTML <li> element and place its value in the <li> element

// Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods

// Step 6: Repeat Step 4 for each hobby in the hobbies property

// Step 7: Repeat Step 5 using the HTML <ul> element with an ID of hobbies

// Step 8: For each object in the <em>placesLived</em> property:
// - Create an HTML <dt> element and put its place property in the <dt> element
// - Create an HTML <dd> element and put its length property in the <dd> element

// Step 9: Append the HTML <dt> and <dd> elements created above to the HTML <dl> element with an ID of places-lived

const myInformation  = {} ;
myInformation['name'] = 'Erubami Godstime'
myInformation['photo'] = 'images/G1.jpeg'
myInformation['Favourite Food'] = ["Rice", "Beans",  "Potatoes",  "Banga Soup"]
myInformation['Hobbies'] = ['Reading', 'Learning', 'Watching movie', 'watching football']
myInformation['place Lived'] = []
myInformation['place Lived'] = [    
    {place: 'Delta State ',length: '13 Years' },   
    {place: 'Abuja ',length: '6 Months' },
    {place: 'Nasarawa ',length: '6 months' },
    {place: 'Benin City ',length: '3 Years' },
    {place: 'Lagos State ',length: '4 Years'}];
const htmlName = document.querySelector('#name').innerHTML = myInformation.name
document.querySelector('#photo').setAttribute('src',  myInformation.photo);
const food = myInformation["Favourite Food"]



const listElement = document.querySelector('#favorite-foods');
for(let i = 0; i < food.length; i++){
    let listItem = document.createElement('li');
    listItem.textContent = food[i];
    listElement.appendChild(listItem);

};

const hobies = myInformation.Hobbies;
function creatlist(item){
    const newItems = document.getElementById('hobbies');
    newItems.innerHTML += `<li>${item}</li>`;
}
hobies.map(creatlist);

myInformation["place Lived"].forEach(function(placeLived){
    const newItems = document.getElementById('places-lived');
    newItems.innerHTML += `<dt>${placeLived.place}</dt> <dd>${placeLived.length}</dd>`;
    
});
const year = new Date().getFullYear();
const years = document.getElementById('year')
years.innerHTML = year
//                       PRACTICE FUNCTIONS
// myInformation["place Lived"].forEach(function(placeLived){
//     const items = document.getElementById('places-lived');
//     items.innerHTML += `<dd>${placeLived.length}</dd>`;
    
// })

// function creatDt(item){
//     const newItems = document.getElementById('places-lived');
//     newItems.innerHTML += `<dt>${item}</dt>`;
// }




//  for (food of food){
//     listElement.innerHTML+= '<li>' + food + '</li>'
// }

// food.forEach(food =>  {
//     let listItem = document.createElement('li');
//     listItem.textContent = food[i];
//     listElement.append(listItem);

// });


// function creatlist(item){
//     const newItems = document.getElementById('favorite-foods');
//     const list = document.createElement('li');
//     newItems.textContent = item
//     newItems.append(list)
    
// }
// food.map(creatlist);
