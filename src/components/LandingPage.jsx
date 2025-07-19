import React from 'react';
import { FaBook, FaCode, FaDatabase, FaLaptopCode } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 font-sans">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16 px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Daily Dose of Engineering</h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">Concise, reliable notes for DSA, DBMS, OOP, and more. Perfect for learning and quick revision.</p>
        <a href="#subjects" className="mt-6 inline-block bg-white text-blue-600 font-semibold py-2 px-6 rounded-full hover:bg-blue-100 transition duration-300">Explore Notes</a>
      </header>

      {/* Subjects Section */}
      <section id="subjects" className="py-16 px-6 bg-white">
        <h2 className="text-3xl font-bold text-center mb-12">Subjects We Cover</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto text-center">

             <Link to="/oop" className="p-6 border rounded-xl hover:shadow-lg transition cursor-pointer bg-white hover:bg-gray-100">
            <FaLaptopCode className="text-4xl mx-auto text-purple-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Object-Oriented Programming</h3>
            <p>Grasp OOP concepts like abstraction, inheritance, and polymorphism with ease.</p>
          </Link>
          
          <Link to="/dsa" className="p-6 border rounded-xl hover:shadow-lg transition cursor-pointer bg-white hover:bg-gray-100">
            <FaCode className="text-4xl mx-auto text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Data Structures & Algorithms</h3>
            <p>Master the core of programming with our structured and short DSA notes.</p>
          </Link>
          <Link to="/dbms" className="p-6 border rounded-xl hover:shadow-lg transition cursor-pointer bg-white hover:bg-gray-100">
            <FaDatabase className="text-4xl mx-auto text-green-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Database Management</h3>
            <p>Understand SQL, NoSQL, ER Diagrams, Transactions, and normalization quickly.</p>
          </Link>
         
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 text-white py-12 text-center px-6">
        <h2 className="text-3xl font-bold mb-4">Start Learning Today</h2>
        <p className="mb-6">Join thousands of learners mastering core computer science concepts.</p>
        <Link to="/notes" className="bg-white text-blue-600 font-semibold py-2 px-6 rounded-full hover:bg-blue-100 transition duration-300">Browse All Notes</Link>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 bg-gray-200 text-gray-600">
        © {new Date().getFullYear()} Daily Dose of Engineering. All rights reserved...
      </footer>
    </div>
  );
};

export default LandingPage;
