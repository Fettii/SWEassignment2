# SWEassignment2
 Starter Project #2
 
 This project consist of two Parts. You are free to work on your solution locally on your own machine, using your favorite editors. The final submission must be ran on Codio.

I have provided a link in the google doc for installing the frameworkLinks to an external site.. Once you have completed the program, you can copy and paste it into the code editor within Codio.

PART 1: Testing
1. Please login to Codio. 
https://codio.com/p/signup?courseToken=nerve-stella

 

Use the arrow at the top to move to the Assignment#2 - Starter Project page.

2. Open the Guide.
3. Enter your code (that should already pass Level II test, but hopefully you have been making improvements) into the code editor in the boggle_solver.js file, and submit your code to the auto-grader that test your code against my test suite, by pressing SUBMIT. There are options to re-test your original solution, and run your own test suite.

This auto-grader will test up to Level IV (Completely Correct) of the Rubric. If you can’t get a fully functioning and efficient solver by the due date, you will have another shot to improve your submission during Assignment #3.

NOTE: You can SUBMIT as many times as you want up until the due date.
5. Once you have submitted your solution, move to PART 2.

PART 2: Submission

Once you have submitted your solution and received as PASS for at least Criteria 2,,= please push your improved boggle_solver.js and new boggle_solver.test.js files to your Github repo. Post a link of your solution from your Github repo. Remember to share your github repo with my - blegand@scs.howard.edu

NOTE: You can SUBMIT as many times as you want up until the due date.

View the video on Testing using Jest using VSCodeLinks to an external site. (57min)

What you produce (i.e. your solver code, and your test code) should be Readable and easy to understand.

==============
GRADING RUBRIC
==============
Test Coverage (Test Coverage (buggy impls fail) and Accuracy (correct impls pass)) and Correctness ( findAllSolutions() returns the correct answer):
10 points if a valid solution would pass all of their tests
-1 point for every 2 of the following cases not covered, and if covered the test did not pass
No Basic Tests: finds valid words, recurse on the diagonal, non-adjacent letters
No Edge cases: duplicate letters, short words (length < 3), empty inputs
No Q Tests: word containing "Qu", end with a "Q", contains Qx (x != "u")
expecting a specific ordering
passing invalid inputs
