var userInput=document.getElementById("userInput");
var arr=[];
function addContact(){
    arr.push(userInput.value)
displaydata(arr)
}
function displaydata(arr){
    var cartoona=``;
    for(var i=0; i<arr.length;i++)
cartoona +=`<div id="home-content">
<div
class="home-item mb-2 px-3  text-dark mx-auto w-25 bg-white d-flex justify-content-between align-items-center">
<p id="x">${arr[i]}</p>
<i class=" fa-sharp fa-solid fa-trash" onclick="deleterow(${i})"></i>
</div>
</div>`
document.getElementById("home").innerHTML=cartoona;
reset();
}
function reset(){
    userInput.value="";

}

function deleterow(id){
    arr.splice(id,1)
    displaydata(arr)

}

