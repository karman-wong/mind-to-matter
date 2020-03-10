function todaysDate()
{
	var rightNow = new Date();
	var theMonth = 0;
	theMonth = rightNow.getMonth() + 1;
	rightNow = rightNow.getFullYear() + '-' + theMonth + '-' + rightNow.getDate();
	document.getElementById("date").innerHTML = rightNow;
}

function changeTable()
{
	document.getElementById("changestyle").style.color = "#557f77";
	document.getElementById("changestyle").style.borderWidth = "0.5em";
	document.getElementById("changestyle").style.borderStyle = "double";
	document.getElementById("changestyle").style.borderColor = "#836CA6";
}
