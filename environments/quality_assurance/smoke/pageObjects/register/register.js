exports.blazedemo_register = class BlazeDemo_Register {
    constructor(page){
        this.page = page
        this.name = page.getByRole('textbox', {name: 'Name'})
        this.company = page.getByRole('textbox', {name: 'Company'})
        this.emailAddress = page.getByRole('textbox', {name: 'E-Mail Address'})
        this.password = page.getByRole('textbox', {name: 'Password', exact: true})
        this.passwordConfirm = page.getByRole('textbox', {name: 'Confirm Password'})
        this.registerButton = page.getByRole('button', {name: 'Register'})
    }

    async visitWebsite(){
        await this.page.goto('https:///blazedemo.com/register')
    }

    async enterRegisterForm(name, company, email_address, password, confirm_password){
        await this.name.fill(name)
        await this.company.fill(company)
        await this.emailAddress.fill(email_address)
        await this.password.fill(password)
        await this.passwordConfirm.fill(confirm_password)
    }

    async clickRegisterButton(){
        await this.registerButton.click()
    }

}