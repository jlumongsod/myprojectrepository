========================
Launch App
========================
1) Setup Ionic in local PC using command:
	"ionic start demoproject --v2 --ts"

2) Checkout and overwrite ("src/app" & "src/pages") files from GitHub to local PC

3) To run app, type "ionic serve" in command-line of local ionic directory.

NOTE: "ionic serve" will not run with (*.spec.ts) files present due to Jasmine commands. 
      Remove *.spec.ts files when using "ionic serve". These files are only used for Unit Testing tool.

=========================
Launch Test
=========================
1) Setup Ionic in local PC using command:
	"ionic start demoproject --v2 --ts"

2) Checkout and overwrite ("src/app" & "src/pages") files from GitHub to local PC

3) Setup testing environment by following the instructions (sections 2.1-2.6) in :
https://www.joshmorony.com/introduction-to-testing-ionic-2-applications-with-testbed/

4) To run test, type "npm test" in command-line of local ionic directory

Note: Despite the numerous warning messages in this environment, you can still execute
      "ionic serve" to launch the app after removing all (*.spec.ts) files.
