// IMPORT MODULES under test here:
import { didUserWinFunc } from '../get-random-throw.js';

const test = QUnit.test;

test('it should return draw when the same argument is given for player and computer', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 'draw';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = didUserWinFunc('rock', 'rock');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('it should return win when rock is given for player and scissors is given to computer', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 'win';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = didUserWinFunc('rock', 'scissors');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('it should return lose when rock is injected in player and paper is injected in computer', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 'lose';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = didUserWinFunc('rock', 'paper');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});