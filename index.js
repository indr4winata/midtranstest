var browsername = "firefox";
var finalText = "Transaction successful";
var waittime_to_see = 3000;


// Actually, it can be converted without function. But I prefer to use function so it is more readable (for me, at least. because I was learning)
// and I don't know why I have to use async and await every time. But without that, the function will run together at the same time...
var webdriver = require('selenium-webdriver');
const until = webdriver.until;
var By = webdriver.By;
let driver = new webdriver.Builder().forBrowser(browsername).build();

async function beforepayment() {
	let buybtn = await driver.wait(until.elementLocated(By.className("btn buy")), 1500);
	await buybtn.click();
	// all has been filled, wait a few second to give a display for the tester
	await driver.sleep(waittime_to_see).then(async function(){
		// then click the checkout button
		let checkoutbtn = await driver.findElement(By.className("cart-checkout"));
		await driver.wait(until.elementIsVisible(checkoutbtn), 1500);
		checkoutbtn.click();
	});
}
async function payment() {
	await driver.sleep(waittime_to_see).then(async function(){
		await driver.wait(until.ableToSwitchToFrame(By.id("snap-midtrans")), 5000);
		let continuebtn = await driver.wait(until.elementLocated(By.css("#application > .button-main > a.button-main-content[href='#/select-payment']")), 6000);
		await continuebtn.click();
		// all has been filled, wait a few second to give a display for the tester
		await driver.sleep(waittime_to_see).then(async function(){
			// and click the credit card option
			let creditcardbtn = await driver.findElement(By.css("#payment-list a.list[href='#/credit-card']"));
			await driver.wait(until.elementIsVisible(creditcardbtn), 1500);
			await creditcardbtn.click();
		});
	}, function(err) {
		console.log('Error! Transaction NOT successful');
		closebrowser();
	});
}
async function inputpaymentdetail() {
	// fill the form
	let cardnumber = driver.wait(until.elementLocated(By.css('#application .card-container input[name="cardnumber"]')), 1500);
	await cardnumber.click();
	await cardnumber.sendKeys('4811 1111 1111 1114');
	let expiry = await driver.findElement(By.css('#application .card-container input[type="tel"][placeholder="MM / YY"]:not(.filled)'));
	await expiry.click();
	await expiry.sendKeys('0123');
	let cvv = await driver.findElement(By.css('#application .card-container input[type="tel"][inputmode="numeric"]:not(.filled)'));
	await cvv.click();
	await cvv.sendKeys('123');
	// all has been filled, wait a few second to give a display for the tester
	await driver.sleep(waittime_to_see).then(async function(){
		let paynowbtn = await driver.findElement(By.css('#application > .button-main > a.button-main-content[href="#/"]'));
		// find a PAY NOW button. Actually we don't need to check the text, and just get the button
		// but let's consider it as another requirement.. well, for practice :D
		paynowbtn.findElement(By.css('.text-button-main > span')).getText().then(function(text){
			if(text.toUpperCase() == 'PAY NOW'){
				paynowbtn.click();
			}else{
				console.log('No Pay Now Button');
			}
		});
	}, function(err) {
		console.log('Error! Transaction NOT successful');
		closebrowser();
	});
}
async function inputpassword(){
	await driver.sleep(waittime_to_see).then(async function(){
		// move to iframe for input password
		await driver.wait(until.ableToSwitchToFrame(0), 5000);
		let submit = await driver.wait(until.elementLocated(By.css('form#acsForm button[type="submit"][name="ok"]')), 6000);
		let passbox = await driver.findElement(By.css('form#acsForm input#PaRes'));
		await passbox.click();
		await passbox.sendKeys('112233');
		await submit.click();
	}, function(err) {
		console.log('Error! Transaction NOT successful');
		closebrowser();
	});
}
async function finalcheck(){
	// move back to its parent frame
	await driver.switchTo().parentFrame();
	// wait until element is exist
	let finalcontainer = await driver.wait(until.elementLocated(By.css('#application .card-container .final-panel .text-success.text-bold')), 6000);
	// the element is hidden at first (tricky). So we need to wait for it to be visible so we can get the text.
	await driver.wait(until.elementIsVisible(finalcontainer), 6000).then(async function(){
		await finalcontainer.getText().then(function(text) {
			if(text == finalText){
				console.log('Transaction successful');
			}else{
				console.log('Error! Transaction NOT successful');
			}
		}, function(err) {
			console.log('Error! Transaction NOT successful');
			closebrowser();
		});
	});
}
async function closebrowser(){
	await driver.switchTo().defaultContent();
	driver.close();
}
driver.get('https://demo.midtrans.com/').then(async function(){
	await driver.sleep(waittime_to_see)
	.then(beforepayment)
	.then(payment)
	.then(inputpaymentdetail)
	.then(inputpassword)
	.then(finalcheck)
	.then(closebrowser);
});

