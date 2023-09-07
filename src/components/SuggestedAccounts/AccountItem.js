
import classNames from 'classnames/bind';
import styles from './SuggestedAccounts.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
function AccountItem() {
    return ( 
        <div className={cx('account-item')}> 
        <img className={cx('avatar')} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6SGvshARHJ5GYSH_Kig8-cYNw5rO3nWn7mA&usqp=CAU" alt='avata'/>
        <div className={cx('item-info')}>
            <p className={cx('nickname')}>
                <strong>VietWin</strong>
                <FontAwesomeIcon className={cx('check')} icon={faCheckCircle}/>
            </p>
            <p className={cx('name')}>NguyenDucViet </p>
        </div>
        </div>
     );
}

export default AccountItem;