function changeTitle() {
  //   document.body.children[0].innerHTML = "Aspire Systems";
  document.body.children[0].firstElementChild.innerHTML = "Aspire Systems";
  //   document.body.children[0].firstChild.data = "Aspire";
}


// changeTitle();
// document.body.children[0].innerHTML='<h1> The previous text is changed</h1>'
let x= document.getElementById("heading");
x.innerHTML="changed title";
console.log(x.innerHTML);


//
