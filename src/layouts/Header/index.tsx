import classNames from 'classnames/bind'
import { BiUser } from 'react-icons/bi'
import styles from './Header.module.scss'
import images from '../../assets/images'
import { Link } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'

const cx = classNames.bind(styles)

const headerRight = [
    {
        title: 'Authentics',
        link: '#',
    },
    {
        title: 'Store',
        link: '#',
    },
    {
        title: 'Tickets',
        link: '#',
    },
    {
        title: 'Hospitality',
        link: '#',
    },
    {
        title: 'Experiences',
        link: '#',
    },
]

function Header() {
    return (
        <header className={cx('wrapper')}>
            {/* left */}

            <div className={cx('header-left')}>
                <img className={cx('fia_logo')} src={images.fia_logo} alt='fia logo' />

                <ul className={cx('list-f')}>
                    <li className={cx('item-link-f')}>
                        <Link to='#'>
                            <span>
                                F1 <sup>®</sup>
                            </span>
                        </Link>
                    </li>
                    <li className={cx('item-link-f')}>
                        <Link to='#'>
                            <span>
                                F2 <sup>™</sup>
                            </span>
                        </Link>
                    </li>
                    <li className={cx('item-link-f')}>
                        <Link to='#'>
                            <span>
                                F3 <sup>™</sup>
                            </span>
                        </Link>
                    </li>
                    <li className={cx('item-link-f')}>
                        <Link to='#'>
                            <span>
                                F1 <sup>®</sup>
                                ACADEMY
                            </span>
                        </Link>
                    </li>
                </ul>
            </div>

            {/* right */}
            <div className={cx('header-right')}>
                <ul className={cx('global-link')}>
                    {headerRight.map((item) => (
                        <li key={uuidv4()} className={cx('item-action-link')}>
                            <Link to={item.link}>{item.title}</Link>
                        </li>
                    ))}
                </ul>
                <a className={cx('f1_tv_link')} href='#'>
                    <img className={cx('f1_tv_logo')} src={images.f1_tv_logo} alt='f1_tv_logo' />
                </a>
                <div className={cx('list-btn')}>
                    <button className={cx('btn', 'btn-secondary', 'btn-content')}>
                        <BiUser size={18} /> Sign in
                    </button>
                    <button className={cx('btn', 'btn-primary')}>Subscribe</button>
                </div>
            </div>
        </header>
    )
}

export default Header
