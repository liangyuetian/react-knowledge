let range = document.createRange();

//Range 对象的属性
// 注意：所有属性都是只读的，不能通过设置这些属性改变范围的开始点和结束点，必须调用 setEnd() 方法和 setStart() 方法实现这一点
range.range.collapsed				如果范围的开始点和结束点在文档的同一位置，则为 true，即范围是空的，或折叠的。
range.commonAncestorContainer	范围的开始点和结束点的（即它们的祖先节点）、嵌套最深的 Document 节点。
range.endContainer			包含范围的结束点的包含范围的结束点的 Document 节点。
range.endOffset				endContainer 中的结束点位置。
range.startContainer			包含范围的开始点的 Document 节点。
range.startOffset				startContainer中的开始点位置。


// Range 对象方法
range.cloneContents()         返回新的 DocumentFragment 对象，它包含该范围表示的文档区域的副本。
range.cloneRange()	          创建一个新的 Range 对象，表示与当前的 Range 对象相同的文档区域。
range.collapse()			  折叠该范围，使它的边界点重合。
range.compareBoundaryPoints() 比较指定范围的边界点和当前范围的边界点，根据它们的顺序返回 -1、0 和 1。比较哪个边界点由它的第一个参数指定，它的值必须是前面定义的常量之一。
range.deleteContents()		  删除当前 Range 对象表示的文档区域。
range.detach()				  通知实现不再使用当前的范围，可以停止跟踪。如果调用了范围的这个方法，那么接下来调用的该范围任何方法都会抛出代码为 INVALID_STATE_ERR 的 DOMException 异常。
range.extractContents()		  删除当前范围表示的文档区域，并且以 DocumentFragment 对象的形式返回那个区域的内容。该方法和 cloneContents() 方法与 deleteContents() 方法的组合很相似。
range.insertNode()			  把指定的节点插入文档范围的开始点。
range.selectNode()	    	  设置该范围的边界点，使它包含指定的节点和它的所有子孙节点。
range.selectNodeContents()	  设置该范围的边界点，使它包含指定节点的子孙节点，但不包含指定的节点本身。
range.setEnd()				  把该范围的结束点设置为指定的节点和偏移量。
range.setEndAfter()	 		  把该范围的结束点设置为紧邻指定节点的节点之后。
range.setEndBefore()		  把该范围的结束点设置为紧邻指定节点之前。
range.setStart()			  把该范围的开始点设置为指定的节点中的指定偏移量。
range.setStartAfter()		  把该范围的开始点设置为紧邻指定节点的节点之后。
range.setStartBefore()		  把该范围的开始点设置为紧邻指定节点之前。
range.surroundContents()	  把指定的节点插入文档范围的开始点，然后重定范围中的所有节点的父节点，使它们成为新插入的节点的子孙节点。
range.toString()	          返回该范围表示的文档区域的纯文本内容。