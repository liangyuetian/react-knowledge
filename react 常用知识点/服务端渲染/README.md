#### REACT 服务端渲染
> import ReactDOMServer from 'react-dom/server'

> ReactDOMServer() 类可以让你在服务端渲染你的组件
	* renderToString()
	* renderToStaticMarkup()

> ReactDOMServer.renderToString(element) 
把一个React元素渲染为原始的HTML。这个方法最好只在服务端使用。React将会返回一段HTML字符串。你可以用这个方法在服务端生成HTML，并根据初始请求发送标记来加快页面的加载速度，同时让搜索引擎可以抓取你的页面来达到优化SEO的目的。

如果在一个已经有了服务端渲染标记的节点上调用 ReactDOM.render() ，React将保留该节点，仅作绑定事件处理，这会让你有一个非常高效的初次加载体验。


> ReactDOMServer.renderToStaticMarkup(element)
类似 renderToString，但是不会创建额外的DOM属性，例如 data-reactid 这些仅在React内部使用的属性。如果你希望把React当作一个简单的静态页面生成器来使用，这很有用，因为去掉额外的属性可以节省很多字节。