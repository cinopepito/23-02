function addItem() {
  let newItem = document.createElement("div");
  newItem.innerHTML = document.getElementById("box").value;
  newItem.onclick = removeItem;
  document.getElementById("list").appendChild(newItem);
  savedlist();
}
function removeItem() {
  document.getElementById("list").removeChild(this);
  savedlist();
}
// localstorage.storageName = "information" this line put the information in localstorage

//to remove the information of localstorage, we do localstorage.storageName = ""
function savedlist() {
  localStorage.storedList = document.getElementById("list").innerHTML;
}
function loadlist() {
  document.getElementById("list").innerHTML = localStorage.storedList;
  for (let i = 0; i < list.children.length; i++) {
    list.children[i].onclick = removeItem;
  }
}
if (localStorage.storedList) {
  loadlist();
}
