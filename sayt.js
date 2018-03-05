
// if (confirm('Ставиш?') == true )
// {
// 	document.body.style.background = 'red';
// }
// else
// {
// 	document.body.style.background = '';
// }


// var bg = prompt("ask?");
// if(bg != false)
// {
// 	document.body.style.background = bg;
// }


// for (var i = 0; i<5; i++)
// {
// 	alert(i);
// }

// var elem = document.getElemntById('brand');
// elem.style.background = "black";
// alert( elem = brand );
// brand.style.background = "black";

// function setbg ()
// {
// 	var chenge = document.getElemntById('Lorem');
// 	chenge.style.background = 'green';
// }
var buttons = document.querySelectorAll('.productss button');
for(var i = 0; i < buttons.length; i++)
{
	buttons[i].onclick = addProductToCart;
}
function openZayava()
{
	var zayava = document.getElementById('zayava');
	zayava.style.display = 'block';
	zdark.style.display = 'block';
}
function closeZayava()
{
	var czayava = document.getElementById('zayava');
	czayava.style.display = 'none';
	zdark.style.display = 'none';
}

function openCart()
{
	var cart = document.getElementById('cart');
	cart.style.display = 'block';
	dark.style.display = 'block';
}
function closeCart()
{
	var carts = document.getElementById('cart');
	carts.style.display = 'none';
	dark.style.display = 'none';
}

var index = 1
function addProductToCart()
{
	var productID = this.dataset.id;
	// alert(productID);
	var productInputAmount = document.querySelector('input#productID-' + productID);
	if(productInputAmount) {
		productInputAmount.value++;
		var amount = productInputAmount.value;
		price = price.substr(1);
		var sum = amount * price;
		productInputAmount.parentElement.nextElementSibling.innerText = '$' + sum;
	}
	else {
		var table = document.querySelector('#cart table tbody');
		var price = this.previousElementSibling.innerText;
		var name = this.previousElementSibling.previousElementSibling.innerText;
		var img = this.closest('.marg1').firstElementChild;
		
		var row = document.createElement('tr');
			// row.innerHTML = '<td colspan=7>test</td>';
			// table.appendChild(row);
		var td1 = document.createElement('td');
		td1.innerText =	index++;
		row.appendChild(td1);

		var td2 = document.createElement('td');
		td2.appendChild(img.cloneNode(true));
		// td2.innerHTML = '<img src="'+img+'">';
		row.appendChild(td2);

		var td3 = document.createElement('td');
		td3.innerText = name;
		row.appendChild(td3);

		var td4 = document.createElement('td');
		td4.innerText = price;
		row.appendChild(td4);

		var td5 = document.createElement('td');
		var input = document.createElement('input');
		input.type = 'number';
		input.value = 1;
		input.min = 1;
		input.id = 'productID-' + productID;
		input.onchange = setProductSum;
		td5.appendChild(input);
		// td5.innerHTML = '<input type="number" value="1">';
		row.appendChild(td5);

		var td6 = document.createElement('td');
		td6.innerText = price;
		row.appendChild(td6);

		var td7 = document.createElement('td');
		var button = document.createElement('button');
		button.innerText = 'x';
		button.onclick = deleteProductFromCart;
		td7.appendChild(button);
		// td7.innerHTML = 'x';
		row.appendChild(td7);
	}
	table.insertBefore(row, table.lastElementChild);
	reCulc();
	openCart();
}
function setProductSum()
{
	var amount = this.value;
	var price = this.parentElement.previousElementSibling.innerText;
	// alert(price);
	price = price.substr(1);
	var sum = amount * price;
	this.parentElement.nextElementSibling.innerText = '$' +sum;
	reCulc();
}
function deleteProductFromCart()
{
	var tr = this.closest('tr');
	var table = this.closest('tbody');
	table.removeChild(tr);
	index--;

	var td = document.querySelectorAll('#cart table tr td:first-child');
	for (var i = 0; i < (td.length - 1);)
	{
		td[i].innerText = ++i;
	}

	reCulc();
}
function reCulc()
{
	var sum = 0;
	var td = document.querySelectorAll('#cart table tr td:nth-child(6)');
	for (var i = 0; i < td.length; i++) 
	{
		var price = td[i].innerText;
		price = price.substr(1);
		price = parseInt(price);
		sum += price;
	}
	var all = document.querySelector('#cart table tr:last-child strong');
	all.innerText = '$'+sum;
}