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
  insert(index, value) {
    // If the index is greater than or equal to the length of the list, append the value to the end
    if (index >= this.length) return this.append(value);
    // If the index is 0, prepend the value to the beginning
    if (index === 0) return this.prepend(value);

    // Find the previous and next nodes at the specified index
    let prevNode = this._getPrevNode(index);
    let nextNode = prevNode.next;

    // Create a new node with the specified value and insert it between the previous and next nodes
    let newNode = new Node(value);
    newNode.next = nextNode;
    prevNode.next = newNode;

    this.length++;
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
  _getPrevNode(index) {
    let currentNode = this.head;
    for (let i = 0; i < index - 1; i++) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }
}

// Usage example:

// Create a new linked list with a single element of value 42
let myLinkedList = new LinkedList(42);

// Append a new element to the end of the list
myLinkedList.append(10);
myLinkedList.append('And I\'m living off of grass');

// Prepend a new element to the beginning of the list
myLinkedList.prepend('And the animals I\'ve trapped');
myLinkedList.prepend('Tarp has sprung a leak');

// Insert a new element at a specific index
myLinkedList.insert(2, 'Have all become my pets');
myLinkedList.insert(0, 'Underneath the bridge');

//Print the list
console.log(myLinkedList.printList());