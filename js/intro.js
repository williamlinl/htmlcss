function mouseOver(){
	var nameDiv = document.getElementById("myname");
	nameDiv.innerHTML = "ALOHA!!!";
	nameDiv.style.color = "#a36843";
}

function mouseOut(){
	var nameDiv = document.getElementById("myname");
	nameDiv.innerHTML = "WILLIAM LIN";
	nameDiv.style.color = "#fff";
}

function fnDate(id){
	var oDiv = document.getElementById(id);
	var date = new Date();
	var year = date.getFullYear();
	var month = date.getMonth();
	var day = date.getDate();
	var hour = date.getHours();
	var minute = date.getMinutes();
	var second = date.getSeconds();
	var time = year + "-" + fnW(month) + "-" + fnW(day) + " " + fnW(hour) + ":" + fnW(minute) + ":" + fnW(second);
	oDiv.innerHTML = time;
}

function fnW(str){
	var num;
	str >= 10 ? num = str : num = "0" + str;
	return num;
}