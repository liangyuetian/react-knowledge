// Range Object
// 区域范围对象
var SelectionObj = window.getSelection();

// anchorNode用法为userSelection.anchorNode。指用户选择内容起始处的容器节点。通常是文本节点。

// anchorNode在Opera浏览器下，在选择内容为空的时候返回0。

// focusNode用法为userSelection.focusNode。指用户选择内容结尾处的容器节点。通常是文本节点。

// focusOffset在Opera浏览器下，在选择内容为空的时候返回0。

// getRangeAt()用法为rangeObject = userSelection.getRangeAt(0)，作用是将Mozilla Selection转换为W3C Range。

// 获取选中的文字
let text = window.getSelection().toString();