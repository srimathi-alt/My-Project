const emojis = [
{name:"happy",symbol:"😀"},
{name:"happy",symbol:"😄"},
{name:"happy",symbol:"😊"},
{name:"sad",symbol:"😢"},
{name:"sad",symbol:"😞"},
{name:"heart",symbol:"❤️"},
{name:"love",symbol:"💕"},
{name:"angry",symbol:"😡"},
{name:"food",symbol:"🍕"},
{name:"food",symbol:"🍔"},
{name:"dog",symbol:"🐶"},
{name:"tree",symbol:"🌳"},
{name:"cat",symbol:"🐱"},
{name:"nature",symbol:"🌳"},
{name:"nature",symbol:"🌸"},
{name:"nature",symbol:"🌻"},
{name:"nature",symbol:"🌈"},
{name:"flower",symbol:"🌸"},
{name:"sunflower",symbol:"🌻"},
{name:"rainbow",symbol:"🌈"},
{name:"sport",symbol:"⚽"},
{name:"sport",symbol:"🏀"},
{name:"sport",symbol:"🏏"},
{name:"sport",symbol:"🎾"}
];

function searchEmoji(){

let search=document.getElementById("searchBox").value.toLowerCase();

let result=document.getElementById("result");

result.innerHTML="";

emojis.forEach(function(e){

if(e.name.includes(search)){

let span=document.createElement("span");

span.textContent=e.symbol;

span.onclick=function(){
navigator.clipboard.writeText(e.symbol);
alert("Emoji copied!");
};

result.appendChild(span);

}

});

}