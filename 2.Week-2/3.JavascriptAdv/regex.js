
/*
Regular Expressions (RegEx) in JavaScript:-
Regular Expressions (RegEx) are patterns used to match character combinations in strings. In JavaScript, regular expressions are objects, 
and they can be used with string methods like .match(), .replace(), .split(), .search(), or as RegExp objects.

A regular expression can be created in two ways:

Using literal syntax: /pattern/flags
Using the RegExp constructor: new RegExp('pattern', 'flags')

Basic Syntax--

Characters: a, b, c match the literal characters.

Quantifiers:
*: Match 0 or more occurrences.
+: Match 1 or more occurrences.
.  ?: Match 0 or 1 occurrence.
{n}: Match exactly n occurrences.
{n,}: Match n or more occurrences.
{n,m}: Match between n and m occurrences.

Anchors:
^: Start of a string.
$: End of a string.

Character classes:
.: Match any character except newline.
[abc]: Match any character in the set a, b, or c.
[^abc]: Match any character NOT in the set a, b, or c.
\d: Match any digit (equivalent to [0-9]).
\D: Match any non-digit.
\w: Match any word character (alphanumeric + underscore).
\W: Match any non-word character.
\s: Match any whitespace character (space, tab, newline).
\S: Match any non-whitespace character.

Groups and Alternation:
(abc): Group abc as a single unit.
|: Logical OR (e.g., a|b matches a or b).
*/

// Examples of Regular Expressions in JavaScript

// 1. Basic Pattern Matching

// const str = "Hello World!";
// const pattern = /World/;
// console.log(pattern.test(str)); // true

// pattern.test(str) checks if the string str contains "World".

// 2. Case Insensitive Match

// const str = "hello world!";
// const pattern = /HELLO/i; // 'i' makes it case insensitive
// console.log(pattern.test(str)); // true

// 3. Extracting Matches with .match()

// const str = "I have 2 apples and 3 bananas.";
// const numbers = str.match(/\d+/g); // Match one or more digits
// console.log(numbers); // ["2", "3"]

// \d+ matches one or more digits.
// g flag indicates a global search (find all matches).

// 4. Replacing Parts of a String with .replace()

// const str = "I love cats. Cats are great.";
// const newStr = str.replace(/cats/gi, "dogs");
// console.log(newStr); // "I love dogs. Dogs are great."

// /cats/gi matches "cats" regardless of case and replaces all occurrences with "dogs".

// 5. Validating an Email Address

// const email = "example@example.com";
// const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
// console.log(pattern.test(email)); // true

// This regular expression checks if a string follows a basic email format.

// 6. Splitting a String

// const str = "apple, banana, cherry";
// const fruits = str.split(/,\s*/)
// console.log(fruits); // ["apple)", "banana", "cherry"]

// Splits the string at commas and optional spaces (\s* matches zero or more spaces).

// 7. Matching and Capturing Groups

// const str = "My phone number is 123-456-7890.";
// const pattern = /(\d{3})-(\d{3})-(\d{4})/;
// const result = str.match(pattern);
// console.log(result); // ["123-456-7890", "123", "456", "7890"]

// (\d{3}) captures three digits.
// result[1], result[2], and result[3] contain the captured groups.

// 8. Using RegExp Constructor

// const str = "JavaScript is fun!";
// const word = "fun";
// const pattern = new RegExp(word, "g");
// console.log(pattern.test(str)); // true

// new RegExp(word, "g") creates a dynamic regular expression with a global search flag.


/*
Practical Use Cases of RegEx:-
Form Validation: Validating email, phone numbers, postal codes, etc.
Text Search and Replace: Finding and replacing patterns in strings.
Parsing Log Files: Extracting useful data from text logs.
Splitting and Tokenizing Text: Splitting strings based on complex delimiters.

Summary:-
Regular Expressions (RegEx) provide powerful tools for text pattern matching and manipulation in JavaScript.
RegEx can be created using literal syntax (/pattern/flags) or the RegExp constructor.
RegEx features like quantifiers, anchors, groups, character classes, etc., enable highly flexible text handling.
They are widely used for form validation, string manipulation, and data parsing in web applications.
*/