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
    // Create a new node with the specified value
    const newNode = new Node(value);
    // Update the tail to point to the new node
    this.tail.next = newNode;
    this.tail = newNode;

    this.length++;
    return this;
  }
  prepend(value) {
    // Create a new node with the specified value
    const newNode = new Node(value);
    // Update the new node's next pointer to point to the current head
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

    return this;
  }
  remove(index) {
    // If the index is greater than or equal to the length of the list, do nothing
    if (index >= this.length) return this;
    // If the index is 0, remove the first element
    if (index === 0) {
      this.head = this.head.next;
      this.length--;
      return this;
    }

    // Find the previous and next nodes at the specified index
    let prevNode = this._getPrevNode(index);
    let nextNode = prevNode.next.next;

    // Remove the node at the specified index
    prevNode.next = nextNode;

    this.length--;
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
  get(index) {
    if(index >= this.length) return undefined;
    // Return head or tail if index is 0 or length - 1
    if(index === 0) return this.head.value;
    if(index === this.length - 1) return this.tail.value;

    // Find the node at the specified index
    let currentNode = this._getPrevNode(index).next; // TODO: can be optimized to not use _getPrevNode
    return currentNode.value;
  }
  indexOf(value) {
    // Use a loop to find the index of the node with the specified value
    let currentNode = this.head;
    for (let i = 0; i <= this.length - 1; i++) {
      // Return the index if the value is found
      if(currentNode.value === value) return i;
      currentNode = currentNode.next;
    }
    // Return -1 if the value is not found
    return -1;
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

// Remove an element at a specific index
myLinkedList.remove(4);
myLinkedList.remove(4);

// Get the value of an element at a specific index
console.log(myLinkedList.get(0));

// Get the index of an element with a specific value
console.log(myLinkedList.indexOf('Have all become my pets'));
console.log(myLinkedList.indexOf(42));

//Print the list
console.log(myLinkedList.printList());