import React, { useState } from 'react';

const dsaTopics = [
  {
    title: "Arrays",
    content: "An array is a collection of elements stored in contiguous memory locations. It allows random access to elements using indices.",
    javaSyntax: `// Java
int[] arr = {1, 2, 3};
System.out.println(arr[0]);`,
    cppSyntax: `// C++
int arr[] = {1, 2, 3};
cout << arr[0] << endl;`,
    link: "https://www.geeksforgeeks.org/arrays-in-java-2/"
  },
  {
    title: "Linked List",
    content: "A linked list is a linear data structure where each element is a separate object called a node, containing data and a pointer to the next node.",
    javaSyntax: `// Java
class Node {
  int data;
  Node next;
  Node(int data) { this.data = data; }
}`,
    cppSyntax: `// C++
struct Node {
  int data;
  Node* next;
  Node(int val) : data(val), next(NULL) {}
};`,
    link: "https://www.geeksforgeeks.org/data-structures/linked-list/"
  },
  {
    title: "Stacks",
    content: "A stack is a linear data structure that follows the LIFO (Last In First Out) principle. Elements are added and removed from the top.",
    javaSyntax: `// Java
Stack<Integer> stack = new Stack<>();
stack.push(10);
stack.pop();`,
    cppSyntax: `// C++
stack<int> s;
s.push(10);
s.pop();`,
    link: "https://www.geeksforgeeks.org/stack-data-structure/"
  },
  {
    title: "Queues",
    content: "A queue is a linear data structure that follows FIFO (First In First Out). Elements are added at the rear and removed from the front.",
    javaSyntax: `// Java
Queue<Integer> q = new LinkedList<>();
q.add(10);
q.remove();`,
    cppSyntax: `// C++
queue<int> q;
q.push(10);
q.pop();`,
    link: "https://www.geeksforgeeks.org/queue-data-structure/"
  },
  {
    title: "Binary Search",
    content: "Binary Search is an efficient searching algorithm that works on sorted arrays by repeatedly dividing the search interval in half.",
    javaSyntax: `// Java
int binarySearch(int[] arr, int x) {
  int l = 0, r = arr.length - 1;
  while (l <= r) {
    int mid = (l + r) / 2;
    if (arr[mid] == x) return mid;
    if (arr[mid] < x) l = mid + 1;
    else r = mid - 1;
  }
  return -1;
}`,
    cppSyntax: `// C++
int binarySearch(int arr[], int n, int x) {
  int l = 0, r = n - 1;
  while (l <= r) {
    int mid = (l + r) / 2;
    if (arr[mid] == x) return mid;
    else if (arr[mid] < x) l = mid + 1;
    else r = mid - 1;
  }
  return -1;
}`,
    link: "https://www.geeksforgeeks.org/binary-search/"
  }
];

const DSA = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 md:px-16">
      <h1 className="text-4xl font-bold text-center text-blue-700 mb-6">
        Data Structures & Algorithms Notes
      </h1>

      {/* Intro: What is DSA? */}
      <div className="max-w-3xl mx-auto text-center text-gray-700 mb-10 px-4">
        <h2 className="text-2xl font-semibold mb-3">What is DSA?</h2>
        <p className="text-md leading-relaxed">
          DSA stands for <span className="font-medium">Data Structures and Algorithms</span>. It is the foundation of problem-solving in programming.
          Data structures help organize and store data efficiently, while algorithms provide step-by-step procedures to solve computational problems.
          Mastering DSA improves coding logic, speed, and efficiency, which is essential for technical interviews and real-world software development.
        </p>
      </div>

      {/* Topics */}
      <div className="max-w-4xl mx-auto space-y-4">
        {dsaTopics.map((topic, index) => (
          <div key={index} className="bg-white rounded-xl shadow-md border">
            <button
              onClick={() => toggle(index)}
              className="w-full flex justify-between items-center p-4 text-left font-semibold text-lg hover:bg-gray-100 transition"
            >
              <span>{topic.title}</span>
              <span>{openIndex === index ? '−' : '+'}</span>
            </button>
            {openIndex === index && (
              <div className="p-4 border-t text-gray-700 bg-gray-50 space-y-3">
                <p>{topic.content}</p>

                <div>
                  <p className="font-semibold mb-1">Java Syntax:</p>
                  <pre className="bg-gray-200 p-3 rounded text-sm overflow-x-auto whitespace-pre-wrap">{topic.javaSyntax}</pre>
                </div>

                <div>
                  <p className="font-semibold mt-2 mb-1">C++ Syntax:</p>
                  <pre className="bg-gray-200 p-3 rounded text-sm overflow-x-auto whitespace-pre-wrap">{topic.cppSyntax}</pre>
                </div>

                <a
                  href={topic.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline inline-block mt-2"
                >
                  Learn more ↗
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DSA;
