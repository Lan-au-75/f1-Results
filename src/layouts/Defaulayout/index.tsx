import Results from '../../pages/Results'
import Footer from '../Footer'
import Header from '../Header'
import { Outlet, useLocation } from 'react-router-dom'
import SubHeader from '../SubHeader'

function DefaultLayout() {
    const location = useLocation()

    return (
        <>
            <Header />
            <SubHeader />
            <div className='container'>
                <main className='main'>{location.pathname === '/' ? <Results /> : <Outlet />}</main>
            </div>
            <Footer />
        </>
    )
}

export default DefaultLayout
