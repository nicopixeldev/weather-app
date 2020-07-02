import logic from '../logic/index'

describe('logic', () => {
    describe('getWeatherByCityName', () => {

        it('ERROR - should fail on array for city name' , () => {
            expect(() => logic.getWeatherByCityName([])).toThrow(`${[]} is not a string`)   
        })

        it('ERROR - should fail on object for city name' , () => {
            expect(() => logic.getWeatherByCityName({})).toThrow(`${{}} is not a string`)   
        })

        it('ERROR - should fail on number for city name' , () => {
            expect(() => logic.getWeatherByCityName(123)).toThrow(`${123} is not a string`)   
        })

        it('ERROR - should fail on undefined for city name' , () => {
            expect(() => logic.getWeatherByCityName(undefined)).toThrow(`${undefined} is not a string`)   
        })

        it('ERROR - should fail on empty city name' , () => {
            expect(() => logic.getWeatherByCityName('')).toThrow('city name can not be empty')   
        })

        it('should succeed on existing city', async () => {
            const city = 'barcelona'
            const results = await logic.getWeatherByCityName(city)

            expect(results).toBeDefined()
            expect(results instanceof Object).toBeTruthy()
            expect(results.data.length).toBe(7)
            expect(typeof results.city_name).toBe('string')
        })
    })
})