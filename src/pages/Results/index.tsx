import classNames from 'classnames/bind'
import styles from './Results.module.scss'
import { NavLink, useLocation } from 'react-router-dom'
import { useEffect, useState, Fragment } from 'react'
import { v4 } from 'uuid'
import { Race } from '../../types/Race.type'
import DriverStandingsTable from '../../components/DriverStandingsTable'
import ConstructorStandingsTable from '../../components/ConstructorStandingsTable'

const cx = classNames.bind(styles)

function Results() {
    const location = useLocation()
    // giải mã url
    const decodedPath = decodeURIComponent(location.pathname)

    const [selectedYear, setSelectedYear] = useState(2023)
    const [selectedRace, setSelectedRace] = useState('Races')
    const [selectedCountry, setSelectedCountry] = useState('Bahrain')
    const [selectedName, setSelectedName] = useState('Max Verstappen')
    const [selectedTeam, setSelectedTeam] = useState('RED BULL RACING HONDA RBPT')
    const [dataResults, setDataResults] = useState<Race[]>()

    const years = [2023, 2022, 2021]
    const races = ['Races', 'Drivers', 'Teams']
    const countries = ['Bahrain', 'Saudi Arabia']
    const names = ['Max Verstappen', 'Sergio Perez', 'Fernando Alonso']
    const teams = ['RED BULL RACING HONDA RBPT', 'ASTON MARTIN ARAMCO MERCEDES']

    // Render Title Result
    const renderTitleResults = () => {
        let title
        switch (selectedRace) {
            case 'Races':
                title = `FORMULA 1 GULF AIR ${selectedCountry.toUpperCase()} GRAND PRIX ${selectedYear} - RACE RESULT`
                break
            case 'Drivers':
                title = `${selectedYear} Driver Standings: ${selectedName}`
                break

            default:
                title = `${selectedYear} Constructor Standings: ${selectedTeam}`
                break
        }

        return title
    }

    // Tìm đến chỉ mục của phần từ country
    const countryIndex = countries.indexOf(selectedCountry)

    // Hàm lọc dữ liệu theo năm, cuộc đua và đội,tay lái, quốc gia
    const filterResults = () => {
        let filterData
        if (selectedYear) {
            filterData = dataResults?.filter((item) => item.year === selectedYear)
        }

        switch (selectedRace) {
            case 'Races':
                if (selectedCountry) {
                    filterData = filterData?.filter((item) =>
                        item.raceResults.some((raceResult) => raceResult.country === selectedCountry)
                    )

                    filterData?.sort(
                        (a, b) => a.raceResults[countryIndex].ranking - b.raceResults[countryIndex].ranking
                    )
                }

                break

            case 'Drivers':
                if (selectedName) {
                    filterData = filterData?.filter((item) => item.driver === selectedName)
                }

                break

            default:
                if (selectedTeam) {
                    filterData = filterData?.filter((item) => item.team === selectedTeam)
                }

                return [
                    {
                        teams: new Set(filterData?.map((item) => item.team)),
                    },
                ]
        }

        return filterData
    }

    // select country,name,team
    const handleSelectItem = (item: string) => {
        switch (selectedRace) {
            case 'Races':
                return setSelectedCountry(item)

            case 'Drivers':
                return setSelectedName(item)

            default:
                return setSelectedTeam(item)
        }
    }

    // render filter countries,names,teams

    const renderFilter = () => {
        let data
        switch (selectedRace) {
            case 'Races':
                data = countries

                break

            case 'Drivers':
                data = names

                break

            default:
                data = teams
                break
        }

        const renderFilterItem = (item: string) => (
            <li className={cx('result-filter-item')} key={item} onClick={() => handleSelectItem(item)}>
                <NavLink
                    className={cx('result-filter-item', {
                        'result-filter-item-active': decodedPath.includes(`${item}`),
                    })}
                    to={`/${selectedYear}/${selectedRace}/${item}`}
                    end
                >
                    {item}
                </NavLink>
            </li>
        )

        return data.map((item) => renderFilterItem(item))
    }

    // renderResults
    const renderResults = (item: Race) => {
        switch (selectedRace) {
            case 'Races':
                return (
                    <tr key={`${item.id}`}>
                        <td className='dark'>{item.raceResults[countryIndex].ranking}</td>
                        <td>{item.raceResults[countryIndex].number}</td>
                        <td className='dark bold'>{item.driver}</td>
                        <td className='dark bold'>{item.team}</td>
                        <td className='dark bold'>{item.raceResults[countryIndex].laps}</td>
                        <td className='dark bold'>{item.raceResults[countryIndex].time}</td>
                        <td className='dark bold'>{item.raceResults[countryIndex].points}</td>
                    </tr>
                )

            case 'Drivers':
                return <DriverStandingsTable item={item} />

            default:
                return <ConstructorStandingsTable item={item} />
        }
    }

    useEffect(() => {
        const fetchDataResults = async () => {
            const res = await fetch(process.env.REACT_APP_BASE_URL as string)
            const data = await res.json()
            setDataResults(data)
        }
        fetchDataResults()
    }, [])

    return (
        <>
            <div className={cx('result-filter-container')}>
                {/* filter year */}
                <div className={cx('result-filter-wrapper')}>
                    <ul className={cx('result-filter-list')}>
                        {years.map((year) => (
                            <li
                                className={cx('result-filter-item')}
                                key={year}
                                onClick={() => setSelectedYear(year)}
                            >
                                <NavLink
                                    className={cx('result-filter-item', {
                                        'result-filter-item-active': location.pathname.includes(`/${year}`),
                                    })}
                                    to={`/${year}`}
                                >
                                    {year}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
                {/* filter races, drivers, teams */}
                <div className={cx('result-filter-wrapper')}>
                    <ul className={cx('result-filter-list')}>
                        {races.map((race) => (
                            <li
                                className={cx('result-filter-item')}
                                key={race}
                                onClick={() => setSelectedRace(race)}
                            >
                                <NavLink
                                    className={cx('result-filter-item', {
                                        'result-filter-item-active': location.pathname.includes(`${race}`),
                                    })}
                                    to={`${race}`}
                                >
                                    {race}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* filter country, name,team */}
                <div className={cx('result-filter-wrapper')}>
                    <ul className={cx('result-filter-list')}>{renderFilter()}</ul>
                </div>
            </div>

            {/* result */}

            <div className={cx('result-wrapper')}>
                <h1 className={cx('result-title')}>{renderTitleResults()}</h1>

                {/* table */}
                <div className={cx('table-wrapper')}>
                    <table className={cx('result-table')}>
                        <thead>
                            <tr>
                                {selectedRace === 'Races' ? (
                                    <>
                                        <th>POS</th>
                                        <th>NO</th>
                                        <th>DRIVER</th>
                                        <th>CAR</th>
                                        <th>LAPS</th>
                                        <th>TIME/RETIRED</th>
                                        <th>PTS</th>
                                    </>
                                ) : selectedRace === 'Drivers' ? (
                                    <>
                                        <th>GRAND PRIX</th>
                                        <th>DATE</th>
                                        <th>CAR</th>
                                        <th>RACE POSITION</th>
                                        <th>PTS</th>
                                    </>
                                ) : (
                                    <>
                                        <th>GRAND PRIX</th>
                                        <th>DATE</th>
                                        <th>PTS</th>
                                    </>
                                )}
                            </tr>
                        </thead>

                        <tbody>
                            {filterResults()?.map((item: any) => (
                                <Fragment key={v4()}>{renderResults(item)}</Fragment>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Results
