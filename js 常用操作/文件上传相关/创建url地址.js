var url = null;
if(window.createObjectURL != undefined) { // basic
	url = window.createObjectURL(file.files[0]);
}
else if(window.URL != undefined) { // mozilla(firefox)
	url = window.URL.createObjectURL(file.files[0]);
	console.log(url)
}
else if(window.webkitURL != undefined) { // webkit or chrome
	url = window.webkitURL.createObjectURL(file.files[0]);
}
// 此url可以直接赋值到img标签的src属性

// 获得文件路径   此路径用于获取图片预览
function getFilePath (file) {
	
	var url = null;
	if(window.createObjectURL != undefined) { // basic
		url = window.createObjectURL(file.files[0]);
	}
	else if(window.URL != undefined) { // mozilla(firefox)
		url = window.URL.createObjectURL(file.files[0]);
		console.log(url)
	}
	else if(window.webkitURL != undefined) { // webkit or chrome
		url = window.webkitURL.createObjectURL(file.files[0]);
	}
	return url
}