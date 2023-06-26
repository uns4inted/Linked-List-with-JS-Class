// Define a Node class to represent each element in the linked list
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// Define the LinkedList class to represent the linked list itself
class LinkedList {
  constructor(value) {
    // Set the head and tail to the first element in the list
    this.head = {
      value: value,
      next: null
    };
    this.tail = this.head;
    // Set the length of the list to 1
    this.length = 1;
  }

  // Operations on the linked list
  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }
  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }


  // Helper functions
  printList() {
    const array = [];
    let currentNode = this.head;
    for (let i = 0; i <= this.length - 1; i++) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }
}

// Usage example:

// Create a new linked list with a single element of value 42
let myLinkedList = new LinkedList(42);

// Append a new element to the end of the list
myLinkedList.append(10);
myLinkedList.append('Somtheing in the way');

// Prepend a new element to the beginning of the list
myLinkedList.prepend('Yeah');
myLinkedList.prepend('Mmm-mmm');

//Print the list
console.log(myLinkedList.printList());