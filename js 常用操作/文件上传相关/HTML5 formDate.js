// 文件上传 html5 FormData ajax增强版2.0,,仅仅适用于IE10以上
var file = document.querySelector("#inputFile");
var formData = new FormData(file);

// 不要直接打印formData的值，是看到的是空，因为此值是私有化的，里面是数组，
// 可以使用append添加键值对.append("name","[1,2,3]")，可以使用.get("name")获取里面的值,可以通过set(key, value)来设置修改数据，
// 如果指定的key不存在则会新增一条，如果存在，则会修改对应的value值;
// 通过has(key)来判断是否对应的key值 返回值是true和false；通过delete(key)，来删除数据
// 通过entries()来获取一个迭代器，然后遍历所有的数据，

// i.next(); // {done:false, value:["k1", "v1"]}
// i.next(); // {done:fase, value:["k1", "v2"]}
// i.next(); // {done:fase, value:["k2", "v1"]}
// i.next(); // {done:true, value:undefined}

var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
	if (xhr.status == 200 && xhr.readyState == 4) {
		// xhr.responseText 是返回的字符串数据，也就是json数据
		// xhr.responseXML 是返回的xml数据，不常用，
		console.log(xhr.responseText)
	}
}
xhr.open("POST","url"); // 注意跨域问题
xhr.send(formData);  // 发送数据
xhr = null; // 防止内存泄露