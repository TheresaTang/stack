"using strict";
/*
 *author：Simona
 *2016-08-18
 *栈的实现类
 */

function Stack() {
  this.dataStore = [];
  this.top = 0;
}
//压入栈方法
Stack.prototype.push = function (element) {
  this.dataStore[this.top++] = element;
}
//出栈方法
//栈顶元素删除
//top-1
//栈顶返回给调用者
Stack.prototype.pop = function () {
  if(this.top == 0) {
    return undefined;
  }
  var lastitem = this.dataStore.pop();
  this.top --;
  return lastitem;
}
//查看栈顶元素方法
Stack.prototype.peek = function () {
  return this.dataStore(this.pop-1);
}
//返回栈内元素数量
Stack.prototype.length = function () {
  return this.top;
}
//清空栈
Stack.prototype.clear = function () {
  this.top = 0;
  this.dataStore = [];
}

Stack.prototype.toString = function () {
  if (this.top == 0) {
    return "栈为空";
  }
  return this.dataStore.join("|");
}

var s = new Stack();
s.push("1");
s.push("2");
s.push("3");
console.log(s.toString());
