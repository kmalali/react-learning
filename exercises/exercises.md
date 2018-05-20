# Exercises

## May 17, 2018

1. How can we use the spread operator to concatenate 2 arrays?

2. Write a function that can accept another function as argument and some arguments that should be bound to the passed function when it is called.

// Additional feature called closure will be used
Given function: greet( message, name ) // log message followed by name - example : Good morning John!
You want a greetGM method: greetGM = bind( greet, 'Good morning' );
When greetGM is called: greetGM( 'John' ); // prints Good morning John!
When greetGM is called: greetGM( 'Mary' ); // prints Good morning Mary!

## May 19, 2018
1. Create a Bootstrap-like panel using React (use createElement as well as JSX).

## May 20, 2018
1. Create a EmployeeTable custom component to render the details of all employees passed to it. Create 2 solutions - one solution takes employees object as prop and other as children. The Employee table should be neatly styled.
2. Create a stateful component that increments a counter every second.