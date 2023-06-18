import { Race } from '../../types/Race.type'

interface Props {
    item: Race
}

function DriverStandingsTable({ item }: Props) {
    return (
        <>
            {item.driverStandings.map((value, index) => (
                <tr key={`${item.id}-${value.points}-${index}`}>
                    <td className='dark'>{value.country}</td>
                    <td className='dark bold'>{value.date}</td>
                    <td className='dark'>{item.team}</td>
                    <td className='dark'>{value.ranking}</td>
                    <td className='dark bold'>{value.points}</td>
                </tr>
            ))}
        </>
    )
}

export default DriverStandingsTable
