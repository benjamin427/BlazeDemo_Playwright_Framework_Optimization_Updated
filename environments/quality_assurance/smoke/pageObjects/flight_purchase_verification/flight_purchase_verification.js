exports.blazedemo_reserve_flights = class BlazeDemo_Reserve_Flights {
    constructor(page){
        this.page = page
        this.flight_VirginAmerica_43 = page.getByRole('table').getByRole('row').filter({hasText: '43'})
                                           .filter({hasText: 'Virgin America'}).filter({hasText: '1:43 AM'})
                                           .filter({hasText: '9:45 PM'}).filter({hasText: '$472.56'})
        this.flight_UnitedAirlines_234 = page.getByRole('table').getByRole('row').filter({hasText: '234'})
                                           .filter({hasText: 'United Airlines'}).filter({hasText: '7:43 AM'})
                                           .filter({hasText: '10:45 PM'}).filter({hasText: '$432.98'})
        this.flight_AerLingus_9696 = page.getByRole('table').getByRole('row').filter({hasText: '9696'})
                                           .filter({hasText: 'Aer Lingus'}).filter({hasText: '5:27 AM'})
                                           .filter({hasText: '8:22 PM'}).filter({hasText: '$200.98'})
        this.flight_VirginAmerica_12 = page.getByRole('table').getByRole('row').filter({hasText: '12'})
                                           .filter({hasText: 'Virgin America'}).filter({hasText: '11:23 AM'})
                                           .filter({hasText: '1:45 PM'}).filter({hasText: '$765.32'})
        this.flight_Lufthansa_4346 = page.getByRole('table').getByRole('row').filter({hasText: '4346'})
                                           .filter({hasText: 'Lufthansa'}).filter({hasText: '1:45 AM'})
                                           .filter({hasText: '8:34 PM'}).filter({hasText: '$233.98'})
    }
    async selectVirginAmerica_Flight_43(){
        await this.flight_VirginAmerica_43.getByRole('button', {name: 'Choose This Flight'}).click()
    }
    async selectUnitedAirlines_Flight_234(){
        await this.flight_UnitedAirlines_234.getByRole('button', {name: 'Choose This Flight'}).click()
    }
    async selectAerLingus_Flight_9696(){
        await this.flight_AerLingus_9696.getByRole('button', {name: 'Choose This Flight'}).click()
    }
    async selectVirginAmerica_12(){
        await this.flight_VirginAmerica_12.getByRole('button', {name: 'Choose This Flight'}).click()
    }
    async selectLufthansa_4346(){
        await this.flight_Lufthansa_4346.getByRole('button', {name: 'Choose This Flight'}).click()
    }

}