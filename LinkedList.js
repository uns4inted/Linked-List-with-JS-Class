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
}

// Create a new linked list with a single element of value 42
let myLinkedList = new LinkedList(42);