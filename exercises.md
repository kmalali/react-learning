# Exercises

## May 17, 2018

1. How can we use the spread operator to concatenate 2 arrays?

2. Write a function that can accept another function as argument and some arguments that should be bound to the passed function when it is called.

// Additional feature called closure will be used
Given function: greet( message, name ) // log message followed by name - example : Good morning John!
You want a greetGM method: greetGM = bind( greet, 'Good morning' );
When greetGM is called: greetGM( 'John' ); // prints Good morning John!
When greetGM is called: greetGM( 'Mary' ); // prints Good morning Mary!