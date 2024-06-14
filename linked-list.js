import Node from './node.js';

export default class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    if (this.head == null) {
      this.prepend(value);
    } else {
      let current = this.head;
      while (current.next != null) {
        current = current.next;
      }
      current.next = new Node(value);
    }
  }

  prepend(value) {
    let temp = null;
    if (this.head != null) {
      temp = this.head;
    }
    this.head = new Node(value);
    this.head.next = temp;
  }

  size() {
    let count = 0;
    let current = this.head;
    while (current != null) {
      current = current.next;
      count++;
    }
    return count;
  }

  getHead() {
    return this.head;
  }

  tail() {
    let current = this.head;
    while (current.next != null) {
      current = current.next;
    }
    return current;
  }

  at(index) {
    let count = 0;
    let current = this.head;
    while (count != index) {
      current = current.next;
      count++;
    }
    return current;
  }

  pop() {
    let current = this.head;
    while (current.next.next != null) {
      current = current.next;
    }
    current.next = null;
  }

  contains(value) {
    let current = this.head;
    while (current != null) {
      if (current.value === value) {
        return true;
      }
      current = current.next;
    }
    return false;
  }

  find(value) {
    let index = 0;
    let current = this.head;
    while (current != null) {
      if (current.value === value) {
        return index;
      }
      index++;
    }
    return null;
  }

  toString() {
    let listString = '';
    let current = this.head;
    while (current != null) {
      listString += `( ${current.value} ) -> `;
      current = current.next;
    }
    return listString + 'null';
  }

  insertAt(value, index) {
    let count = 0;
    let current = this.head;
    let node = new Node(value);
    while (++count != index) {
      current = current.next;
    }
    node.next = current.next;
    current.next = node;
  }

  removeAt(index) {
    let count = 0;
    let current = this.head;
    while (++count != index) {
      current = current.next;
    }
    current.next = current.next.next;
  }
}
