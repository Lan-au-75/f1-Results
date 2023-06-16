import classNames from 'classnames/bind'
import styles from './Results.module.scss'

const cx = classNames.bind(styles)

// const filterYear = [2023, 2022, 2021]

function Results() {
    return (
        <div className={cx('result-filter-container')}>
            <div className={cx('result-filter-wrapper')}>
                <ul className={cx('result-filter')}>
                    <li className={cx('result-filter-item')}>2023</li>
                    <li className={cx('result-filter-item')}>2022</li>
                    <li className={cx('result-filter-item')}>2021</li>
                </ul>
            </div>
            <div className={cx('result-filter-wrapper')}>
                <ul className={cx('result-filter')}>
                    <li className={cx('result-filter-item')}></li>
                    <li className={cx('result-filter-item')}></li>
                    <li className={cx('result-filter-item')}></li>
                </ul>
            </div>
            <div className={cx('result-filter-wrapper')}>
                <ul className={cx('result-filter')}>
                    <li className={cx('result-filter-item')}></li>
                    <li className={cx('result-filter-item')}></li>
                    <li className={cx('result-filter-item')}></li>
                </ul>
            </div>
        </div>
    )
}

export default Results
