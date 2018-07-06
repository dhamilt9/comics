var xmlhttp = new XMLHttpRequest();
var url = "/images/comics/comics.txt";

xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        var myArr = JSON.parse(xmlhttp.responseText);
        getComicName(myArr);
    }
}
xmlhttp.open("GET", url, true);
xmlhttp.send();

function getComicName(arr) {
	var getPath = window.location.pathname;
	var splitPath=getPath.split("/");
	comicName=splitPath[2];
	if (comicName==""){
		displayRecent(arr)
	}
	else{
		displayComic(comicName, arr)
	}
};

function displayRecent(arr){
	comicNumber=(Object.keys(arr).length);
	var i;
	for(i=0; i < arr.length; i++) {
		if(arr[i].number==comicNumber){
			document.getElementById("comic").src = "/images/comics/"+arr[i].file;
		}
	}
	for(i=0; i < arr.length; i++) {
		if(arr[i].number==1){
			document.getElementById("firstb").href = "/comics/" + arr[i].file.split(".")[0];
		}
		if(arr[i].number==comicNumber-1){
			document.getElementById("prevb").href = "/comics/" + arr[i].file.split(".")[0];
		}
	}
}

function displayComic(name, arr){
	var comicTitle;
	var comicName;
	var comicNumber;
	var i;
	for(i=0; i < arr.length; i++) {
		name2=arr[i].file.split(".")[0];
		if (name==name2){
			comicTitle=arr[i].name;
			comicNumber=arr[i].number;
			comicName=name;
			document.getElementById("comic").src = "/images/comics/"+arr[i].file;
		}
	}
	for(i=0; i < arr.length; i++) {
		if(arr[i].number==1){
			document.getElementById("firstb").href = "/comics/" + arr[i].file.split(".")[0];
		}
		if(arr[i].number==comicNumber-1){
			document.getElementById("prevb").href = "/comics/" + arr[i].file.split(".")[0];
		}
		var nextComic = parseInt(comicNumber)+1;
		if(arr[i].number==nextComic){
			document.getElementById("nextb").href = "/comics/" + arr[i].file.split(".")[0];
		}
		if (comicNumber=="1"){
			document.getElementById("prevb").href = "/comics/" + comicName;
		}
	}
}


function myFunction(arr) {
	var out;
    var i;
    for(i = 0; i < arr.length; i++) {
        alert(arr[i].file + arr[i].number)
    }
}

document.onkeydown = checkKey;

function checkKey(e) {
    e = e || window.event;
    else if (e.keyCode == '37') {
       window.location.href = "/comics/";
    }
    else if (e.keyCode == '39') {
       // right arrow
    }
}