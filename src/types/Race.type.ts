export interface Race {
    id: number
    year: number
    driver: string
    team: string
    raceResults: [
        {
            country: string
            date: string
            laps: number
            number: number
            points: number
            raceTitle: number
            ranking: number
            time: string
        }
    ]
    driverStandings: [
        {
            country: string
            date: string
            driverTitle: string
            points: number
            ranking: number |string
        }
    ]
}
