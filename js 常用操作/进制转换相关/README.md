### ES6相关

#### 字符的Unicode表示法
```js
"\u{20BB7}"
// "𠮷"

"\u{41}\u{42}\u{43}"
// "ABC"

let hello = 123;
hell\u{6F} // 123

'\u{1F680}' === '\uD83D\uDE80'
// true
```

#### ES6提供了codePointAt方法，能够正确处理4个字节储存的字符，返回一个字符的码点
```js
"A".codePointAt(0); // 65
let s = "𠮷a";
s.codePointAt(0) // 134071
s.codePointAt(1) // 57271

s.codePointAt(2) // 97  "a"
```

#### codePointAt方法返回的是码点的十进制值，如果想要十六进制的值，可以使用toString方法转换一下
```js
let s = '𠮷a';
s.codePointAt(0).toString(16) // "20bb7"
s.codePointAt(2).toString(16) // "61"
// 你可能注意到了，codePointAt方法的参数，仍然是不正确的。比如，上面代码中，字符a在字符串s的正确位置序号应该是1，但是必须向codePointAt方法传入2
// 解决方法可以使用for...of循环
for (let ch of s) {
	console.log( ch.codePointAt(0).toString(16) );
}
// 20bb7
// 61
```

#### ES6提供了String.fromCodePoint方法，可以识别大于0xFFFF的字符，弥补了String.fromCharCode方法的不足。在作用上，正好与codePointAt方法相反。
```js
String.fromCodePoint(0x20BB7)
// "𠮷"
String.fromCodePoint(0x78, 0x1f680, 0x79) === 'x\uD83D\uDE80y'
// true
```

### 简单用法
```js
// 将字符转化为可以数字
"A".codePointAt(0); // 65
// 将数字再转化为字母
String.fromCodePoint(65 + 1);
// 比较两个字母
String.fromCodePoint(0x78, 0x1f680, 0x79) === 'x\uD83D\uDE80y'   // true


#### 将任意进制字符串转换为十进制，如二进制，八进制，十六进制, 第二数数不写即为最常用的转换为整型十进制；
```js
parseInt("11", 2);   // 3   2进制转10进制
parseInt("77", 8);   // 63  8进制转10进制
parseInt("af", 16);  //175  16进制转10进制
```

#### 将10进制转换为2进制，八进制，十六进制字符串 Object.toString(n) : 即可 (n) 表示进制，如
```js
(152).toString(2)  // "10011000" ;  先用括号将152转换“包”成一个对象， 或者如下写法;
152..toString(2)   // 这里第一个点将152转换成float类型的小数，第二个点是引出对象方法;
152..toString(16)  // "98" : 十进制转16进制
152..toString(32)  // "4o" ：十提制转32进制
```
#### 同样Javascript支持最大进制是36 （26个英文字母　+　10个数字）