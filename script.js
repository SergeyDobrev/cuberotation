var blockcount = 2;
var widthvalue = 600;
var heightvalue = 600;
var t = (widthvalue + heightvalue) / 16; // толщина
var blackvalue = widthvalue / blockcount;
var sidecolor = ["red","grey","black"];
var ss = blackvalue / 2500;
var x = 0;
var y = 0;
var z = 0;
var ivalue = heightvalue / blackvalue;
var jvalue = widthvalue / blackvalue;
var flag = true;
var objperspective = new Object();
var objrotate = new Array();
var objrotateside = new Array();
var objrotatesideback = new Array();
var objrotatesidetop = new Array();
var objrotatesidebottom = new Array();
var objrotatesideleft = new Array();
var objrotatesideright = new Array();
var n = 0;
var array = new Array();

var arrayobj = document.querySelectorAll('[cuberotation=ok]');
for (var i = 0; i < arrayobj.length; i++) {
	array[i] = "url('" + arrayobj[i].src +"')";
	document.body.removeChild(arrayobj[i]);
}

objperspective = document.createElement("div");
document.body.appendChild(objperspective);
objperspective.style.width = widthvalue + "px";
objperspective.style.height = heightvalue + "px";
objperspective.style.position = "relative";
objperspective.style.perspective = "500px";
objperspective.addEventListener("click", change_img_fun);


for (var i = 0; i < ivalue; i++) {
	objrotate[i] = new Array();
	objrotateside[i] = new Array();
	objrotatesideback[i] = new Array();
	objrotatesidetop[i] = new Array();
	objrotatesidebottom[i] = new Array();
	objrotatesideleft[i] = new Array();
	objrotatesideright[i] = new Array();

	for (var j = 0; j < jvalue; j++) {
		objrotate[i][j] = document.createElement("div");
		objperspective.appendChild(objrotate[i][j]);
		objrotate[i][j].style.width = blackvalue + "px";
		objrotate[i][j].style.height = blackvalue + "px";
		objrotate[i][j].style.transformStyle = "preserve-3d";
		objrotate[i][j].style.position = "absolute";
		objrotate[i][j].style.left = (j * blackvalue) + "px";
		objrotate[i][j].style.top = (i * blackvalue) + "px";
		objrotate[i][j].style.transform = "translateZ(-" + t/2 + "px)";

		objrotateside[i][j] = document.createElement("div");
		objrotate[i][j].appendChild(objrotateside[i][j]);	
		objrotateside[i][j].style.width = blackvalue + "px";
		objrotateside[i][j].style.height = blackvalue + "px";
		objrotateside[i][j].style.position = "absolute";
		objrotateside[i][j].style.backgroundImage = array[(n % array.length)];
		objrotateside[i][j].style.backgroundPosition = (widthvalue - (j * blackvalue)) + "px " + (heightvalue - (i * blackvalue)) + "px";
		objrotateside[i][j].style.transform = "translateZ(" + t/2 + "px)";
		
		objrotatesideback[i][j] = document.createElement("div");
		objrotate[i][j].appendChild(objrotatesideback[i][j]);	
		objrotatesideback[i][j].style.width = blackvalue + "px";
		objrotatesideback[i][j].style.height = blackvalue + "px";
		objrotatesideback[i][j].style.position = "absolute";
		objrotatesideback[i][j].style.backgroundImage = array[((n + 1) % array.length)];		
		objrotatesideback[i][j].style.backgroundPosition = (widthvalue - (j * blackvalue)) + "px " + (heightvalue - (i * blackvalue)) + "px";
		objrotatesideback[i][j].style.transform = "rotateY(180deg) translateZ(" + t/2 + "px)";

		objrotatesidetop[i][j] = document.createElement("div");
		objrotate[i][j].appendChild(objrotatesidetop[i][j]);	
		objrotatesidetop[i][j].style.width  = blackvalue + "px";
		objrotatesidetop[i][j].style.height = t + "px";
		objrotatesidetop[i][j].style.position = "absolute";
		objrotatesidetop[i][j].style.backgroundColor = sidecolor[n % array.length];
		objrotatesidetop[i][j].style.transform = "rotateX(90deg) translateZ(" + t/2 + "px)";

		objrotatesideleft[i][j] = document.createElement("div");
		objrotate[i][j].appendChild(objrotatesideleft[i][j]);	
		objrotatesideleft[i][j].style.width  = blackvalue + "px";
		objrotatesideleft[i][j].style.height = t + "px";
		objrotatesideleft[i][j].style.position = "absolute";
		objrotatesideleft[i][j].style.backgroundColor = sidecolor[n % array.length];
		objrotatesideleft[i][j].style.transform = "rotateX(90deg) rotateY(-90deg) translateZ(" + blackvalue/2 + "px) translateX(-" + (blackvalue/2 - t/2) + "px)" ;

		objrotatesideright[i][j] = document.createElement("div");
		objrotate[i][j].appendChild(objrotatesideright[i][j]);	
		objrotatesideright[i][j].style.width  = blackvalue + "px";
		objrotatesideright[i][j].style.height = t + "px";
		objrotatesideright[i][j].style.position = "absolute";
		objrotatesideright[i][j].style.backgroundColor = sidecolor[n % array.length];
		objrotatesideright[i][j].style.transform = "rotateX(90deg) rotateY(-90deg) translateZ(-" + blackvalue/2 + "px) translateX(-" + (blackvalue/2 - t/2) + "px)" ;

		objrotatesidebottom[i][j] = document.createElement("div");
		objrotate[i][j].appendChild(objrotatesidebottom[i][j]);	
		objrotatesidebottom[i][j].style.width  = blackvalue + "px";
		objrotatesidebottom[i][j].style.height = t + "px";
		objrotatesidebottom[i][j].style.position = "absolute";
		objrotatesidebottom[i][j].style.backgroundColor = sidecolor[n % array.length];
		objrotatesidebottom[i][j].style.transform = "rotateX(-90deg) translateZ(" + (blackvalue - t/2) + "px)";
	}
}

function change_img_fun() {
// вращение
y += 180;
x += 360;
z += 360;

for (var i = 0; i < ivalue; i++) {
	for (var j = 0; j < jvalue	; j++) {
		if (flag) {
			objrotatesideback[i][j].style.backgroundImage = array[((n + 1) % array.length)];
			var tt = t / 2;
		} else {	
			objrotateside[i][j].style.backgroundImage = array[((n + 1) % array.length)];
			var tt = t / 2 * (-1);					
		}
		objrotatesidetop[i][j].style.backgroundColor = sidecolor[n % array.length];
		objrotatesideleft[i][j].style.backgroundColor = sidecolor[n % array.length];
		objrotatesideright[i][j].style.backgroundColor = sidecolor[n % array.length];
		objrotatesidebottom[i][j].style.backgroundColor = sidecolor[n % array.length];
	}
}
var s = 0;
for (var i = 0; i < ivalue; i++) {
	for (var j = 0; j < jvalue	; j++) {
		s += ss; 
		objrotate[i][j].style.transform = "rotateX(" + x + "deg)" + "rotateY(" + y + "deg)" + "rotateZ(" + z + "deg)" + "translateZ(" + tt + "px)";
		objrotate[i][j].style.transition = "transform 1.5s";
		objrotate[i][j].style.transitionDelay = s + "s";
	}
}
if (flag) {
	flag = false;
} else {	
	flag = true;
}
n++;
}
