class Stack {
  constructor() {
    this.data = [];
    this.top = 0;
  }
  push(elt) {
    this.data[this.top] = elt;
    this.top++;
  }
  pop() {
    this.top--;
    let elt = this.data[this.top];
    this.data.pop();
    return elt;
  }
  peek() {
    return this.data[this.top-1];
  }
  length() {
    return this.top;
  }
  isEmpty() {
    return this.top === 0;
  }
  print() {
    let top = this.top - 1;
    while(top >= 0) {
      console.log(this.data[top]);
      top--;
    }
  }
  reverse() {
    const _reverse = (top) => {
      if(top == 0) {
        console.log(this.data[top]);
        return;
      }
      
      _reverse(top-1);
      console.log(this.data[top]);
    }
    let top = this.top - 1;
    _reverse(top)
  }
}
let stack = new Stack();
console.log('Is Stack empty ?', stack.isEmpty());
stack.push(1);
console.log('Stack length: ', stack.length());
stack.push(2);
stack.push(3);
console.log('Print stack');
stack.print();
console.log('Stack peek: ', stack.peek());
console.log('Stack popped: ', stack.pop());
console.log('Print stack');
stack.print();
console.log('Reverse stack');
stack.reverse();
