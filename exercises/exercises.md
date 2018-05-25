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

## May 23, 2018
1. Add a pause button and implement pause functionality. When paused show the text within pause button as resume.
2. Add a stop button that simply stops and when timer starts it should start from elapsedSeconds = 0

## May 24, 2018
1. Add a plus/minus symbol to the right of panel heading. The - symbol is shown if panel is open, and + is shown if panel is closed.

## May 25, 2018
1. Add lifecycle methods to the Heading and SubHeading components and see the order of their execution with respect to the Message element (i.e. Parent element) lifecycle methods. You can also add some dummy state objects to these elements and see the order of lifecycle methods when state object in the elements changes.

2. Make the entire blog page componentized. Create components as you deem fit.

3. Please find out what event.stopPropagation() does.