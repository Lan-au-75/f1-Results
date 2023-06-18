import { Race } from '../../types/Race.type'
import { v4 as uuidv4 } from 'uuid'

interface Props {
    item: Race
}

function ConstructorStandingsTable({ item }: Props) {
    const constructorStandings = [
        {
            teams: item.team,
            results: [
                {
                    country: 'Bahrain',
                    date: '05 Mar 2023',
                    points: 43,
                },
                {
                    country: 'Saudi Arabia',
                    date: '19 Mar 2023',
                    points: 44,
                },
            ],
        },
    ]

    return (
        <>
            {constructorStandings.map((constructor) => {
                return constructor.results.map((result) => (
                    <tr key={uuidv4()}>
                        <td className='dark '>{result.country}</td>
                        <td className='dark bold'>{result.date}</td>
                        <td className='dark bold'>{result.points}</td>
                    </tr>
                ))
            })}
        </>
    )
}

export default ConstructorStandingsTable
