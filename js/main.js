let products = [];
let products2 = [];
const addList = $('#addList');

function changeHeight() {
	$("#orderType").innerHTML = "<strong>Non: </strong>" + $("#typeSelect").value;
}

function changeSize(size) {
	$("#orderSize").innerHTML = "<strong>Kattaligi: </strong>" + size + " см";
}


function addProduct(product, id) {
	var input = $("#" + id);
	var content = "";
	if (input.checked) {
		products.push(product);
	} else {
		var idToDelete = products.indexOf(product);
		delete products[idToDelete];
	}
	products.forEach(itm => {
		content += "<li><p class=\"m-0\">" + itm + "</p></li>";
	})
	var list = $('#spisok');
	list.innerHTML = content;
}

function addProduct2(product, id) {
	var input = $("#" + id);
	var content = "";
	if (input.checked) {
		products2.push(product);
	} else {
		var idToDelete = products2.indexOf(product);
		delete products2[idToDelete];
	}
	products2.forEach(itm => {
		content += "<li><p class=\"m-0\">" + itm + "</p></li>";
	})
	var list = $('#spisok2');
	list.innerHTML = content;
}







setInterval(() => {
   let date = new Date();
   $('#date').innerHTML = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
}, 1000)