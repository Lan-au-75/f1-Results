import classNames from 'classnames/bind'
import { IoIosArrowDown } from 'react-icons/io'
import { v4 as uuidv4 } from 'uuid'
import styles from './SubHeader.module.scss'
import images from '../../assets/images'
import { Link } from 'react-router-dom'

const cx = classNames.bind(styles)

const navBar = [
    {
        title: 'Latest',
        icon: true,
    },
    {
        title: 'Video',
        icon: false,
    },
    {
        title: 'F1 Unlocked',
        icon: false,
    },
    {
        title: 'Schedule',
        icon: true,
    },
    {
        title: 'Results',
        icon: true,
    },
    {
        title: 'Drivers',
        icon: true,
    },
    {
        title: 'Teams',
        icon: true,
    },
    {
        title: 'Gaming',
        icon: true,
    },
    {
        title: 'Live Timing',
        icon: false,
    },
]

function SubHeader() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <img className={cx('f1_logo')} src={images.f1_logo} alt='f1_logo' />
                {/* Nav Mobile */}
                <nav className={cx('nav')}>
                    <ul className={cx('list-nav')}>
                        {navBar.map((nav) => (
                            <li key={uuidv4()} className={cx('nav-link')}>
                                <Link to='#'>
                                    <span style={{ paddingRight: '4px' }}>{nav?.title}</span>{' '}
                                    {nav?.icon && <IoIosArrowDown size={10} />}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default SubHeader
