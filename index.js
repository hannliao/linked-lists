import LinkedList from './linked-list.js';

const linkedList = new LinkedList();

linkedList.append('b');
linkedList.prepend('a');
linkedList.append('c');
linkedList.append('d');

console.log(linkedList.toString()); // ( a ) -> ( b ) -> ( c ) -> ( d ) -> null
console.log(linkedList.size()); // 4

console.log(linkedList.getHead()); // Node {value: 'a', next: Node { value: 'b', next: Node { value: 'c', next: [Node] } }}
console.log(linkedList.tail()); // Node { value: 'd', next: null }
console.log(linkedList.at(3)); // Node { value: 'd', next: null }
console.log(linkedList.at(5)); // null

linkedList.pop();
console.log(linkedList.toString()); // ( a ) -> ( b ) -> ( c ) -> null
console.log(linkedList.contains('d')); // false
console.log(linkedList.contains('c')); // true
console.log(linkedList.find('b')); // 1

linkedList.insertAt('e', 2);
console.log(linkedList.toString()); // ( a ) -> ( b ) -> ( e ) -> ( c ) -> null
linkedList.insertAt('f', 0);
console.log(linkedList.toString()); // ( f ) -> ( a ) -> ( b ) -> ( e ) -> ( c ) -> null

linkedList.removeAt(5); // does not do anything when index is not found
console.log(linkedList.toString()); // ( f ) -> ( a ) -> ( b ) -> ( e ) -> ( c ) -> null
linkedList.removeAt(4);
console.log(linkedList.toString()); // ( f ) -> ( a ) -> ( b ) -> ( e ) -> null

const emptyList = new LinkedList();

console.log(emptyList.size()); // 0
console.log(emptyList.getHead()); // null
console.log(emptyList.tail()); // null
console.log(emptyList.at(0)); // null
emptyList.pop();
console.log(emptyList.toString()); // null
console.log(emptyList.contains('anything')); // false
console.log(emptyList.find('something')); // null
emptyList.removeAt(0);
console.log(emptyList.toString()); // null
emptyList.insertAt('no longer empty!', 0);
console.log(emptyList.toString()); // ( no longer empty! ) -> null
