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
      while (current.next !== null) {
        current = current.next;
      }
      current.next = new Node(value);
    }
  }

  prepend(value) {
    let temp = null;
    if (this.head !== null) {
      temp = this.head;
    }
    this.head = new Node(value);
    this.head.next = temp;
  }

  size() {
    let count = 0;
    let current = this.head;
    while (current !== null) {
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
    if (current === null) {
      return null;
    }
    while (current.next !== null) {
      current = current.next;
    }
    return current;
  }

  at(index) {
    if (index < 0 || index > this.size()) {
      return null;
    }

    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
      if (current === null) return null;
    }
    return current;
  }

  pop() {
    let current = this.head;
    let prev = null;
    if (current === null) {
      return;
    }
    if (current.next === null) {
      this.head = null;
      return;
    }
    while (current.next !== null) {
      prev = current;
      current = current.next;
    }
    prev.next = null;
  }

  contains(value) {
    let current = this.head;
    while (current !== null) {
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
    while (current !== null) {
      if (current.value === value) {
        return index;
      }
      current = current.next;
      index++;
    }
    return null;
  }

  toString() {
    let listString = '';
    let current = this.head;
    while (current !== null) {
      listString += `( ${current.value} ) -> `;
      current = current.next;
    }
    return listString + 'null';
  }

  insertAt(value, index) {
    if (index < 0 || index > this.size()) {
      return null;
    }

    let current = this.head;
    let prev = null;
    if (current === null || index === 0) {
      this.prepend(value);
    } else {
      for (let i = 0; i < index; i++) {
        prev = current;
        current = current.next;
      }
      let temp = new Node(value);
      prev.next = temp;
      temp.next = current;
    }
  }

  removeAt(index) {
    if (index < 0 || index > this.size()) {
      return;
    }

    let current = this.head;
    let prev = null;
    if (current === null) {
      return;
    } else {
      for (let i = 0; i < index; i++) {
        prev = current;
        current = current.next;
        if (current === null) return;
      }
      prev.next = current.next;
    }
  }
}
