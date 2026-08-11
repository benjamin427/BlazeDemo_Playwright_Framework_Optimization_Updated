exports.blazedemo_menuSelectDeparture = class BlazeDemo_MenuSelectDeparture {
    constructor(page){
        this.page = page
        this.selectDepartureParis = page.locator('[name="fromPort"]')
        this.selectDeparturePhiladelphia = page.locator('[name="fromPort"]')
        this.selectDepartureBoston = page.locator('[name="fromPort"]')
        this.selectDeparturePortland = page.locator('[name="fromPort"]')
        this.selectDepartureSanDiego = page.locator('[name="fromPort"]')
        this.selectDepartureMexicoCity = page.locator('[name="fromPort"]')
        this.selectDepartureSaoPaolo = page.locator('[name="fromPort"]')
    }

    async visitWebsite(){
        await this.page.goto("https://blazedemo.com")
    }

    async menuSelectDepartureParis(){
        await this.selectDepartureParis.selectOption('Paris')
    }

    async menuSelectDeparturePhiladelphia(){
        await this.selectDeparturePhiladelphia.selectOption('Philadelphia')
    }

    async menuSelectDepartureBoston(){
        await this.selectDepartureBoston.selectOption('Boston')
    }

    async menuSelectDeparturePortland(){
        await this.selectDeparturePortland.selectOption('Portland')
    }

    async menuSelectDepartureSanDiego(){
        await this.selectDepartureSanDiego.selectOption('San Diego')
    }

    async menuSelectDepartureMexicoCity(){
        await this.selectDepartureMexicoCity.selectOption('Mexico City')
    }

    async menuSelectDepartureSaoPaolo(){
        await this.selectDepartureSaoPaolo.selectOption('Sao Paolo')
    }

}

exports.blazedemo_menuSelectDestination = class BlazeDemo_MenuSelectDestination {
    constructor(page){
        this.page = page
        this.selectDestinationBuenosAires = page.locator('[name="toPort"]')
        this.selectDestinationRome = page.locator('[name="toPort"]')
        this.selectDestinationLondon = page.locator('[name="toPort"]')
        this.selectDestinationBerlin = page.locator('[name="toPort"]')
        this.selectDestinationNewYork = page.locator('[name="toPort"]')
        this.selectDestinationDublin = page.locator('[name="toPort"]')
        this.selectDestinationCairo = page.locator('[name="toPort"]')
        this.buttonFindFlights = page.getByRole('button', {name: 'Find Flights'})
    }

    async menuSelectDestinationBuenosAires(){
        await this.selectDestinationBuenosAires.selectOption('Buenos Aires')
    }

    async menuSelectDestinationRome(){
        await this.selectDestinationRome.selectOption('Rome')
    }

    async menuSelectDestinationLondon(){
        await this.selectDestinationLondon.selectOption('London')
    }

    async menuSelectDestinationBerlin(){
        await this.selectDestinationBerlin.selectOption('Berlin')
    }

    async menuSelectDestinationNewYork(){
        await this.selectDestinationNewYork.selectOption('New York')
    }

    async menuSelectDestinationDublin(){
        await this.selectDestinationDublin.selectOption('Dublin')
    }

    async menuSelectDestinationCairo(){
        await this.selectDestinationCairo.selectOption('Cairo')
    }

    async clickFindFlights(){
        await this.buttonFindFlights.click()
    }

    async closeBrowser(){
        await this.page.close()
    }

}