function show()
{
var data = parseFloat(document.getElementById("fahrenheit").value)
var cel =(data - 32) * 5/9
document.getElementById("celsius").value = cel

}

function show1()
{
var data = parseFloat(document.getElementById("cel").value)
var far = (data * 1.8) + 32
document.getElementById("fahren").value = far

}