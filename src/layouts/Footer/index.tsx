import classNames from 'classnames/bind'
import styles from './Footer.module.scss'
import images from '../../assets/images'

const cx = classNames.bind(styles)

function Footer() {
    return (
        <footer className={cx('footer-wrapper')}>
            <div className={cx('footer-container')}>
                <img className={cx('f1_logo')} src={images.f1_logo} alt='f1_logo' />
                <span>© 2003-2023 Formula One World Championship Limited</span>
            </div>
        </footer>
    )
}

export default Footer
