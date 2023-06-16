import classNames from 'classnames/bind'
import { BiUser } from 'react-icons/bi'
import styles from './Header.module.scss'
import images from '../../assets/images'

const cx = classNames.bind(styles)

function Header() {
    return (
        <header className={cx('wrapper')}>
            {/* left */}

            <div className={cx('header-left')}>
                <img className={cx('fia_logo')} src={images.fia_logo} alt='fia logo' />

                <ul className={cx('list-f')}>
                    <li className={cx('item-link-f')}>
                        <a href='#'>
                            <span>
                                F1 <sup>®</sup>
                            </span>
                        </a>
                    </li>
                    <li className={cx('item-link-f')}>
                        <a href='#'>
                            <span>
                                F2 <sup>™</sup>
                            </span>
                        </a>
                    </li>
                    <li className={cx('item-link-f')}>
                        <a href='#'>
                            <span>
                                F3 <sup>™</sup>
                            </span>
                        </a>
                    </li>
                    <li className={cx('item-link-f')}>
                        <a href='#'>
                            <span>
                                F1 <sup>®</sup>
                                ACADEMY
                            </span>
                        </a>
                    </li>
                </ul>
            </div>

            {/* right */}
            <div className={cx('header-right')}>
                <ul className={cx('global-link')}>
                    <li className={cx('item-action-link')}>
                        <a href='#'>Authentics</a>
                    </li>
                    <li className={cx('item-action-link')}>
                        <a href='#'>Store</a>
                    </li>
                    <li className={cx('item-action-link')}>
                        <a href='#'>Tickets</a>
                    </li>
                    <li className={cx('item-action-link')}>
                        <a href='#'>Hospitality</a>
                    </li>
                    <li className={cx('item-action-link')}>
                        <a href='#'>Experiences</a>
                    </li>
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
