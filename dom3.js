//add newElement(li) in list
var newElement=document.createElement("li");
newElement.textContent="item6";
var newList=document.getElementById("try");
//if we want to insert it in first position
//newList.insertBefore(newElement,newList.firstElementChild);
newList.appendChild(newElement);
console.log(newElement)

// if we want to remove all items by click on delete
// function myFunction(){
// var delElement=document.getElementById("try");
// delElement.parentNode.removeChild(delElement);

// }
//remove only newElement(li) from list
function myFunction(){
newList.removeChild(newElement);
}

//add edit button
var addBtn=document.createElement('button');
addBtn.innerText='Edit';
document.body.appendChild(addBtn);

