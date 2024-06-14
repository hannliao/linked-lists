import LinkedList from './linked-list.js';

const linkedList = new LinkedList();

linkedList.append('b');
linkedList.prepend('a');
linkedList.append('c');
linkedList.append('d');

console.log('linked list: ' + linkedList.toString());
console.log('size: ' + linkedList.size());
console.log('head:');
console.log(linkedList.getHead());
console.log('tail:');
console.log(linkedList.tail());
console.log('at index 4:');
console.log(linkedList.at(4));
console.log('at index 2:');
console.log(linkedList.at(2));

linkedList.pop();
console.log('linked list (after pop): ' + linkedList.toString());
console.log('linked list contains "d": ' + linkedList.contains('d'));
console.log('linked list contains "c": ' + linkedList.contains('c'));
console.log('index of "a" in the linked list: ' + linkedList.find('a'));

linkedList.insertAt('e', 2);
console.log(
  'linked list (after inserting "e" at index 2): ' + linkedList.toString()
);

linkedList.removeAt(1);
console.log(
  'linked list (after removing node at index 1): ' + linkedList.toString()
);
