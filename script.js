const inputEl = document.querySelector("#input-el");
const saveButton = document.querySelector("#save-btn");
const clearButton = document.querySelector("#clear");
let showPara = document.querySelector("#show");
let myLead = [];
let saveTab = document.querySelector("#save")
let stocksFromLocalStorage = JSON.parse(localStorage.getItem("Lead"))
console.log(stocksFromLocalStorage)

if(stocksFromLocalStorage){
  myLead = stocksFromLocalStorage;
  render(myLead)
}

function lists() {
 let dude = inputEl.value;
 myLead.push(dude)
 clear()
 localStorage.setItem("Lead", JSON.stringify(myLead))
 render(myLead)
}
function render(Leads) {
  listing = "";
  for (let i = 0; i < Leads.length; i++) {
    listing += `<li>
        <a href = '${Leads[i]}' target = '_blank'>
        ${Leads[i]} 
        </a>
        </li>`;
  }
  showPara.innerHTML = listing;
}
saveButton.addEventListener("click", lists);
function clear() {
  inputEl.value = "";
}


clearButton.addEventListener("dblclick", ()=>{
  clear()
  myLead = [];
  localStorage.clear()
  render(myLead)
})

saveTab.addEventListener("click",function(){
  chrome.tabs.query({active : true, currentWindow : true}, function(tabs){
  myLead.push(tabs[0].url)
    localStorage.setItem("Lead", JSON.stringify(myLead))
    render(myLead)
  })
})