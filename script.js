function drop(e){
	e.preventDefault();
	let data = e.dataTransfer.getData("data");
	e.target.style.backgroundColor = data;
	e.target.innerHTML = "";
	
}

function drag(e){
	e.dataTransfer.setData("data", e.target.id);
}

function dragOver(e){
		e.preventDefault();
}