// 创建一个input tyle=file 并点击它!
var inputFile = document.createElement("input");
inputFile.type = "file";

var fileClick = document.createEvent("MouseEvents"); // 创建一个鼠标事件
fileClick.initEvent("click", true, true); // 初始化此事件，类型为click , 允许冒泡， 允许使用preventDefault阻止
inputFile.dispatchEvent(fileClick); // 哪个dom触发此对象
inputFile.onchange = function (event) {
	console.log(this.files)
}