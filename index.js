function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.querySelector("#nested .target");
}

function deepestChild(){
  var current = document.getElementById("grand-node");
  var next = current.children[0];
  while(next) {
    current = next;
    next = current.children[0];
  }
  return current;
}

function increaseRankBy(n){
  const lis = document.querySelectorAll('ul.ranked-list li');
  for (let i = 0; i < lis.length; i++) {
    lis[i].innerHTML = parseInt(lis[i].innerHTML) + n;
  }
}