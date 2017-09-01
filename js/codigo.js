var btn = document.getElementById("btn");
var resultado = document.getElementById("resultado");
var inputuno = document.getElementById("input-uno");
var inputdos = document.getElementById("input-dos");

btn.addEventListener("click", function(){
	var n1 = inputuno.value;
	var n2 = inputdos.value;
	resultado.innerHTML = random(n1,n2);
})

function random(n1, n2){
	if(n1>n2){
		n3=n1;
		n1=n2;
		n2=n1;
	}
	return parseInt(Math.random()*(parseInt(n2)-parseInt(n1))+parseInt(n1));
}
