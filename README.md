# Incubyte-TDD

Overview

This project is a String Calculator implemented in TypeScript following Test-Driven Development (TDD) principles.
The calculator parses a string of numbers and returns their sum, supporting multiple delimiters, custom delimiters, and input validation.

Features Implemented
Empty String
"" → 0

Single Number
"5" → 5

Two Numbers Separated by Comma
"1,2" → 3

Multiple Numbers
"1,2,3,4,5" → 15

Newline as Delimiter
"1\n2,3" → 6

Custom Single-Character Delimiter
"//;\n1;2" → 3

Negative Number Validation
Throws error for negatives:
"1,-2,3,-4" → Negatives not allowed: -2,-4

Ignore Numbers Greater Than 100
"2,100,101,6" → 108 (ignores 101)

Technologies Used
TypeScript – static typing and modular code
Jest – testing framework for TDD
Node.js – runtime environment
Regex – for parsing custom delimiters
