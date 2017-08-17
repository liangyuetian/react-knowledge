### SyntheticEvent

#### 对象属性
```js 
boolean bubbles
boolean cancelable
DOMEventTarget currentTarget
boolean defaultPrevented
number eventPhase
boolean isTrusted
DOMEvent nativeEvent
void preventDefault()
boolean isDefaultPrevented()
void stopPropagation()
boolean isPropagationStopped()
DOMEventTarget target
number timeStamp
string type
```

### 事件池
> SyntheticEvent是共享的。那就意味着在调用事件回调之后，SyntheticEvent对象将会被重用，并且所有属性会被置空。这是出于性能因素考虑的。 因此，您无法以异步方式访问事件。

> 如果您想以异步的方式访问事件的属性值，你必须在事件回调中调用event.persist()方法，这样会在池中删除合成事件，并且在用户代码中保留对事件的引用。

> event.presist();
