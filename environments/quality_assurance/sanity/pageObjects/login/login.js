exports.blazedemo_Login = class BlazeDemo_Login {
    constructor(page){
        this.page = page
        this.emailAddress = page.getByRole('textbox', {name: 'E-Mail Address'})
        this.password = page.getByRole('textbox', {name: 'Password'})
        this.loginButton = page.getByRole('button', {name: 'Login'})
    }

    async visitWebsite(){
        await this.page.goto('https://blazedemo.com/login')
    }

    async enterLoginCredentials(email_address, password){
        await this.emailAddress.fill(email_address)
        await this.password.fill(password)
    }

    async clickLoginButton(){
        await this.loginButton.click()
    }

    async closeBrowser(){
        await this.page.close()
    }
}