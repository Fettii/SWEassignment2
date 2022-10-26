const boggle_solver = require('/home/codio/workspace/Boggle_Testing/boggle_solver.js');

/** Lowercases a string array in-place. (Used for case-insensitive string array
 *  matching).
 * @param {string[]} stringArray - String array to be lowercase.
 */
function lowercaseStringArray(stringArray) {
  for (let i = 0; i < stringArray.length; i++)
    stringArray[i] = stringArray[i].toLowerCase();
	
}

describe('Boggle Solver tests suite:', () => {
  describe('Normal input', () => {

		test('2x2 matrix mix', () => {
      //testing a 2x2 matrix because we want it can match each other
      let grid = [['A','B'],
									['C','D']];
      let dictionary = ['ab','cda','ad','bc'];

			let expected = ['cda'];

      let solutions = boggle_solver.findAllSolutions(grid,dictionary);
			lowercaseStringArray(solutions);
      lowercaseStringArray(expected);
			console.log(solutions);
			expect(solutions.sort()).toEqual(expected.sort());


    });

  });

  
  describe('Problem contraints', () => {
    // Cases such as Qu
		test('Test to see if variants of qu and st can pass',() => {
			let grid = [['qab','qbooo','can'],
									['stab','sats','mastes'],
									['qabv','sat','canlol']]

			let dictionary = ['qabv','quack','stab','sat']
			let solutions = boggle_solver.findAllSolutions(grid, dictionary);
			let expected = ['quack','stab']

      lowercaseStringArray(solutions);
      lowercaseStringArray(expected);
			
			expect(solutions.sort()).not.toEqual(expected.sort());

			
			
		});
 
  });

  
  describe('Input edge cases', () => {

    // Example Test using Jess
    test('Dictionary is empty', () => {
      // (Edge case) Since there are no possible solutiona, it should return an
      // empty list.
      let grid = [['A', 'B', 'C', 'D'],
                    ['E', 'F', 'G', 'H'],
                    ['I', 'J', 'K', 'L'],
                    ['M', 'N', 'O', 'P']];
      let dictionary = [];
      let expected = [];

      let solutions = boggle_solver.findAllSolutions(grid, dictionary);

      // Lowercasing for case-insensitive string array matching.
      lowercaseStringArray(solutions);
      lowercaseStringArray(expected);
      expect(solutions.sort()).toEqual(expected.sort());
    });



		test('Testing all directions', () => {

			let grid = ['ABC','DEF','GHI']
			
			let dictionary = ['ABC','AEF','AGH','AIJ','AKL','AMN','AOP','AQU','ARS']

			let solutions = boggle_solver.findAllSolutions(grid, dictionary);

			lowercaseStringArray(solutions);
			expect(solutions.sort()).toEqual(dictionary.sort());




			



		});
  });
});
