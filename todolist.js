function addItem() {
  let newItem = document.createElement("div");
  newItem.innerHTML = document.getElementById("box").value;
  newItem.onclick = removeItem;
  document.getElementById("list").appendChild(newItem);
  savedList();
}
function removeItem() {
  document.getElementById("list").removeChild(this);
  savedList();
}
function savedList() {
  localStorage.storedList = document.getElementById("list").innerHTML;
}
function loadList() {
  document.getElementById("list").innerHTML = localStorage.storedList;
  for (let i = 0; i < list.children.length; i++) {
    list.children[i].onclick = removeItem;
  }
}
if (localStorage.storedList) {
  loadList();
}
