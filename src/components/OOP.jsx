import React, { useState } from 'react';

const notesData = [
  {
    title: "Classes & Objects",
    content: "Class is a blueprint, and object is an instance of that class.",
    javaSyntax: `// Java
class Student {
  String name;
  void display() {
    System.out.println("Name: " + name);
  }
}

Student s = new Student();
s.name = "Alex";
s.display();`,
    cppSyntax: `// C++
class Student {
public:
  string name;
  void display() {
    cout << "Name: " << name << endl;
  }
};
    
Student s;
s.name = "Alex";
s.display();`,
    link: "https://www.tutorialspoint.com/java/java_object_classes.htm"
  } ,
  {
    title: "Abstraction",
    content: "Abstraction means hiding internal details and showing only essential features. In OOP, this is done using abstract classes or interfaces.",
    javaSyntax: `// Java
abstract class Animal {
  abstract void sound();
}
class Dog extends Animal {
  void sound() {
    System.out.println("Bark");
  }
}`,
    cppSyntax: `// C++
class Animal {
public:
  virtual void sound() = 0; // Pure virtual function
};

class Dog : public Animal {
public:
  void sound() override {
    std::cout << "Bark" << std::endl;
  }
};`,
    link: "https://www.geeksforgeeks.org/abstraction-in-java/"
  },
  {
    title: "Encapsulation",
    content: "Encapsulation is wrapping data and methods into a single unit (class). It helps protect data by using access modifiers like private, public, and protected.",
    javaSyntax: `// Java
class Person {
  private String name;
  public void setName(String name) {
    this.name = name;
  }
  public String getName() {
    return name;
  }
}`,
    cppSyntax: `// C++
class Person {
private:
  string name;
public:
  void setName(string n) {
    name = n;
  }
  string getName() {
    return name;
  }
};`,
    link: "https://www.geeksforgeeks.org/encapsulation-in-java/"
  },
  {
    title: "Inheritance",
    content: "Inheritance allows one class to inherit properties and methods of another. It promotes code reuse.",
    javaSyntax: `// Java
class Vehicle {
  void move() {
    System.out.println("Moving...");
  }
}
class Car extends Vehicle {
  void honk() {
    System.out.println("Beep!");
  }
}`,
    cppSyntax: `// C++
class Vehicle {
public:
  void move() {
    cout << "Moving..." << endl;
  }
};

class Car : public Vehicle {
public:
  void honk() {
    cout << "Beep!" << endl;
  }
};`,
    link: "https://www.geeksforgeeks.org/inheritance-in-java/"
  },
  {
    title: "Polymorphism",
    content: "Polymorphism means the same function behaves differently in different contexts. It can be method overloading or overriding.",
    javaSyntax: `// Java
class MathOps {
  int add(int a, int b) {
    return a + b;
  }
  double add(double a, double b) {
    return a + b;
  }
}`,
    cppSyntax: `// C++
class MathOps {
public:
  int add(int a, int b) {
    return a + b;
  }
  double add(double a, double b) {
    return a + b;
  }
};`,
    link: "https://www.geeksforgeeks.org/polymorphism-in-java/"
  },
  
];

const OOP = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 md:px-16">
      <h1 className="text-4xl font-bold text-center text-blue-700 mb-6">
  Object-Oriented Programming Notes
</h1>

<div className="max-w-3xl mx-auto text-center text-gray-700 mb-10 px-4">
  <h2 className="text-2xl font-semibold mb-3">What is Object-Oriented Programming?</h2>
  <p className="text-md leading-relaxed">
    Object-Oriented Programming (OOP) is a programming paradigm centered around the concept of objects. 
    It helps in organizing complex programs, promoting reusability, and improving maintainability. 
    OOP is built on four main pillars: <span className="font-medium">Abstraction</span>, <span className="font-medium">Encapsulation</span>, <span className="font-medium">Inheritance</span>, and <span className="font-medium">Polymorphism</span>.
  </p>
</div>

      
      <div className="max-w-4xl mx-auto space-y-4">
        {notesData.map((note, index) => (
          <div key={index} className="bg-white rounded-xl shadow-md border">
            <button
              onClick={() => toggle(index)}
              className="w-full flex justify-between items-center p-4 text-left font-semibold text-lg hover:bg-gray-100 transition"
            >
              <span>{note.title}</span>
              <span>{openIndex === index ? '−' : '+'}</span>
            </button>
            {openIndex === index && (
              <div className="p-4 border-t text-gray-700 bg-gray-50 space-y-3">
                <p>{note.content}</p>

                <div>
                  <p className="font-semibold mb-1">Java Syntax:</p>
                  <pre className="bg-gray-200 p-3 rounded text-sm overflow-x-auto whitespace-pre-wrap">{note.javaSyntax}</pre>
                </div>

                <div>
                  <p className="font-semibold mt-2 mb-1">C++ Syntax:</p>
                  <pre className="bg-gray-200 p-3 rounded text-sm overflow-x-auto whitespace-pre-wrap">{note.cppSyntax}</pre>
                </div>

                <a
                  href={note.link}
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

export default OOP;
