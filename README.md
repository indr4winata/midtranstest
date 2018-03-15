REQUIREMENTS:

1. Internet connection (of course)
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

---

BEFORE USE:

- If you want to use other browser, outside Firefox, please open index.js file in a notepad, and change the line 1
	var browsername = "firefox";
  to other browser name.
- If you want to make the code run faster,  please open index.js file in a notepad, and change the line 3
	var waittime_to_see = 3000;
  to have lower number. I made that 3000 (3 seconds) so at least the tester can see the UI, not just bangbangbang and closed :D

---

HOW TO RUN:

There are 2 different options. Just choose 1

OPTION 1:
1. Download all files in this repo and put it somewhere in your computer, 
2. then open a command (cmd / terminal).
3. Set the destination in the command to the folder to root folder where there is index.js you just downloaded.
4. Type "node index" to run the script.
5. See the command. If it has "Transaction successful" text. If it has, the test was successful. If not, it fails.



OPTION 2:

Actually, you can just download the index.js file in this repository. If you do that, you need to do these steps:
1. make a folder and put the index.js file to it
2. open command (cmd / terminal)
3. set the command to your folder
4. type: node init
5. enter, then keep enter until you go back to the folder
6. type: npm install --save selenium-webdriver
7. enter and wait until finish
8. Type "node index" to run the script.
9. See the command. If it has "Transaction successful" text. If it has, the test was successful. If not, it fails.

Note: if Way 1 fails, try to use Way 2 instead.

---

PS: This is the first time for me to use Selenium. I just researched, experimented, learned, and worked on it alone after I got the email for this test. 
So pardon me if I have a lot of mistakes. 
I only use selenium-webdriver, no other framework. Before, I tried to use Mocha framework, but it fails when working with iframe.




Developed by:
Indra Winata
indr4_winata@yahoo.com