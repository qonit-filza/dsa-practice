'use strict';

class listNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head;
  }
  size() {
    let count = 0;
    let node = this.head;
    while (node) {
      count++;
      node = node.next;
    }
    return count;
  }
  clear() {
    this.head = null;
  }
}

const node1 = new listNode(2);
const node2 = new listNode(3);
const node3 = new listNode(10);

node1.next = node2;
node2.next = node3;

const list = new LinkedList(node1);
console.log(list.head.next.data);
console.log(list.size());

list.clear();
console.log(list);
