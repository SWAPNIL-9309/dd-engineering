import React, { useState } from 'react';

const dbmsTopics = [
  {
    title: "Entity-Relationship Model",
    content: "ER model is a high-level data model that defines data elements and their relationships. It is useful for database design.",
    sqlSyntax: `-- ER Model is conceptual, not SQL syntax
-- Example of mapping ER to table
CREATE TABLE Student (
  ID INT PRIMARY KEY,
  Name VARCHAR(50),
  Age INT
);`,
    link: "https://www.geeksforgeeks.org/entity-relationship-model/"
  },
  {
    title: "Normalization",
    content: "Normalization is the process of organizing data to reduce redundancy and improve data integrity.",
    sqlSyntax: `-- Example of unnormalized table:
-- Orders(OrderID, CustomerName, Item1, Item2)

-- Normalized:
CREATE TABLE Orders (
  OrderID INT,
  CustomerName VARCHAR(50)
);
CREATE TABLE OrderItems (
  OrderID INT,
  ItemName VARCHAR(50)
);`,
    link: "https://www.geeksforgeeks.org/database-normalization/"
  },
  {
    title: "SQL Joins",
    content: "Joins combine rows from two or more tables based on a related column. Common joins: INNER, LEFT, RIGHT, FULL.",
    sqlSyntax: `-- INNER JOIN Example
SELECT employees.name, departments.dept_name
FROM employees
INNER JOIN departments
ON employees.dept_id = departments.id;`,
    link: "https://www.geeksforgeeks.org/sql-join-set-1-inner-left-right-and-full-joins/"
  },
  {
    title: "Transactions",
    content: "A transaction is a set of SQL operations that are executed as a single unit. It follows ACID properties.",
    sqlSyntax: `-- SQL Transaction
BEGIN;
UPDATE accounts SET balance = balance - 100 WHERE id = 1;
UPDATE accounts SET balance = balance + 100 WHERE id = 2;
COMMIT;`,
    link: "https://www.geeksforgeeks.org/acid-properties-in-dbms/"
  },
  {
    title: "Indexing",
    content: "Indexing is used to speed up data retrieval. It creates a data structure (index) that helps locate rows faster.",
    sqlSyntax: `-- Create an index
CREATE INDEX idx_name
ON students (name);`,
    link: "https://www.geeksforgeeks.org/indexing-in-databases-set-1/"
  }
];

const DBMS = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 md:px-16">
      <h1 className="text-4xl font-bold text-center text-blue-700 mb-6">
        Database Management Systems Notes
      </h1>

      {/* Intro: What is DBMS? */}
      <div className="max-w-3xl mx-auto text-center text-gray-700 mb-10 px-4">
        <h2 className="text-2xl font-semibold mb-3">What is DBMS?</h2>
        <p className="text-md leading-relaxed">
          A Database Management System (DBMS) is software that helps store, retrieve, and manage data efficiently. It provides mechanisms to define structure, enforce constraints, and execute queries. 
          DBMS is essential for building scalable and reliable software systems.
        </p>
      </div>

      {/* Topics */}
      <div className="max-w-4xl mx-auto space-y-4">
        {dbmsTopics.map((topic, index) => (
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
                  <p className="font-semibold mb-1">SQL Syntax:</p>
                  <pre className="bg-gray-200 p-3 rounded text-sm overflow-x-auto whitespace-pre-wrap">
{topic.sqlSyntax}
                  </pre>
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

export default DBMS;
