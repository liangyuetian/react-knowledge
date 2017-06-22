// 获得文件大小
function fetFileSize (file) {
	// 现代浏览器
	if ( noIsIE() ) {
		 return file.files[0].size;
	}
	else {
		// 判断是否是ie9一以下
		var fso = new ActiveXObject("Scripting.FileSystemObject");     
		return fso.GetFile(file.value).size;    
	}
}