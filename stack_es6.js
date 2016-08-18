"use strict";

class Stack {
  constructor() {
    this.dataStore = [];
    this.top = 0;
  }
  push(element) {
    this.dataStore[this.top++] = element;
  }
  //出栈方法
  //栈顶元素删除
  //top-1
  //栈顶返回给调用者
  pop() {
    // if(this.top == 0) {
    //   return undefined;
    // }
    // var lastitem = this.dataStore.pop();
    // this.top --;
    // return lastitem;
    return this.dataStore[--this.top];
  }
  //查看栈顶元素方法
  peek() {
    return this.dataStore(this.pop-1);
  }
  //返回栈内元素数量
  length() {
    return this.top;
  }
  //清空栈
  clear() {
    this.top = 0;
    this.dataStore = []
  }

  toString() {
    if (this.top == 0) {
      return "栈为空";
    }
    return this.dataStore.join("|");
  }
}

let s = new Stack();
s.push("1");
s.push("2");
s.push("3");
console.log(s.toString());
