import Results from '../../pages/Results'
import Footer from '../Footer'
import Header from '../Header'
import { Outlet, useLocation } from 'react-router-dom'

function DefaultLayout() {
    const location = useLocation()

    return (
        <>
            <Header />
            <div className='container'>
                <section className='main'>{location.pathname === '/' ? <Results /> : <Outlet />}</section>
            </div>
            <Footer />
        </>
    )
}

export default DefaultLayout
