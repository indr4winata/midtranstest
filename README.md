Requirements:

1. Internet connection
2. NPM and NodeJS installed (Latest LTS Version: 8.10.0 (includes npm 5.6.0))
   Can be installed from https://nodejs.org/en/download/
3. Any browser (I use Mozilla Firefox)
4. Browser component to be used by NodeJS, depends on your browser
   Can be downloaded from https://www.npmjs.com/package/selenium-webdriver , find a table with | browser | component | as its title
   After download it, you need to put the file somewhere, and put it in the system environment variable (variable name: Path).
   For Windows 10: 
   - click on the windows logo on bottom left
   - type: system
   - click the search result: "System - Control Panel"
   - click on the "Advanced system settings"
   - click on "Environment Variables.."
   - double click on variable "Path" 
   - click "Browse" and find the directory (not a file) that contains the browser component you just download. 
   - OK to save, and OK again.


Before Use:

- If you want to use other browser, outside Firefox, please open index.js file in a notepad, and change the line 1
  var browsername = "firefox";
  to other browser name.
  

HOW TO RUN:
There are 2 different ways. Just choose 1

Way 1:
1. Download all files in this repo, 
2. put it somewhere in your computer, 
3. then open a command (cmd / terminal).
4. Set the destination in the command to the folder to root folder where there is index.js you just downloaded.
5. Type "node index.js" to run the script.
6. See the command. If it has "Transaction successful" text. If it has, the test was successful. If not, it fails.

Way 2:
Actually, you can just download the index.js file in this repository. If you do that, you need to do these steps:
- make a folder and put the index.js file to it
- open command (cmd / terminal)
- set the command to your folder
- type: node init
- enter, then keep enter until you go back to the folder
- type: npm install --save selenium-webdriver
- enter
- wait until finish and you are ready to go
Note: if Way 1 fails, try to use Way 2 instead.

PS: I just learned about this after I got the email for to work on this test. So pardon me if I have a lot of mistakes. 
I only use selenium-webdriver, no other framework. Before, I tried to use Mocha framework, but it fails when working with iframe.


Developed by:
Indra Winata
indr4_winata@yahoo.com