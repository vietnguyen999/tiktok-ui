import classNames from 'classnames/bind';
import styles from './AccountPreview.module.scss';
import Button from '~/components/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountPreview() {
    return ( 
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
            <img
                        className={cx('avatar')}
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6SGvshARHJ5GYSH_Kig8-cYNw5rO3nWn7mA&usqp=CAU"
                        alt="avata"
                    />
                   <Button className={cx('follow-btn')} primary>Follow</Button>
            </div>
            <div className={cx('body')}>
            <p className={cx('nickname')}>
                            <strong>VietWin</strong>
                            <FontAwesomeIcon
                                className={cx('check')}
                                icon={faCheckCircle}
                            />
                        </p>
                        <p className={cx('name')}>NguyenDucViet </p>
                        <p className={cx('analy')}>
                            <strong className={cx('value')}>10.4M </strong>
                            <span className={cx('label')}>Followers</span>
                            <strong className={cx('value')}>40.4M </strong>
                            <span className={cx('label')}>Likes</span>
                        </p>
            </div>
        </div>
     );
}

export default AccountPreview;