exports.blazedemo_purchaseForm = class BlazeDemo_PurchaseForm {
    constructor(page){
        this.page = page
        this.name = page.getByRole('textbox', {name: 'Name'})
        this.address = page.getByRole('textbox', {name: 'Address'})
        this.city = page.getByRole('textbox', {name: 'City'})
        this.state = page.getByRole('textbox', {name: 'State'})
        this.zipcode = page.getByRole('textbox', {name: 'Zip Code'})
        this.cardtype = page.locator('[name="cardType"]')
        this.creditcardnumber = page.getByRole('textbox', {name: 'Credit Card Number'})
        this.creditcard_month = page.getByRole('textbox', {name: 'Month'})
        this.creditcard_year = page.getByRole('textbox', {name: 'Year'})
        this.creditcard_nameoncard = page.getByRole('textbox', {name: 'Name on Card'})
        this.buttonPurchaseFlight = page.getByRole('button', {name: 'Purchase Flight'})
        this.checkboxRememberMe = page.getByLabel('Remember Me')
    }

    async visitWebsite(){
        await this.page.goto('https://blazedemo.com/purchase.php')
    }
    async enterPurchaseForm_Name(name){
        await this.name.fill(name)
    }
    async enterPurchaseForm_Address(address){
        await this.address.fill(address)
    }
    async enterPurchaseForm_City(city){
        await this.city.fill(city)
    }
    async enterPurchaseForm_State(state){
        await this.state.fill(state)
    }
    async enterPurchaseForm_ZipCode(zipcode){
        await this.zipcode.fill(zipcode)
    }
    async selectPurchaseForm_CardType_Visa(){
        await this.cardtype.selectOption('Visa')
    }
    async selectPurchaseForm_CardType_AmericanExpress(){
        await this.cardtype.selectOption('American Express')
    }
    async selectPurchaseForm_CardType_DinersClub(){
        await this.cardtype.selectOption("Diner's Club")
    }
    async clickPurchaseFlight(){
        await this.buttonPurchaseFlight.click()
    }
    async clickRememberMeCheckbox(){
        await this.checkboxRememberMe.check()
    }
    async closeBrowser(){
        await this.page.close()
    }
}