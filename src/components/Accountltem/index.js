import classNames from 'classnames/bind';
import styles from './Accountltem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
function Accountltem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/166552e5ed1bb6154ebf46e258d11b51~c5_100x100.jpeg?x-expires=1693904400&x-signature=3r%2FPcWEDAeMi0btjJUGClQ7N8FM%3D"
                alt="hoa"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Nguyen Duc Viet</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>nguyenducviet</span>
            </div>
        </div>
    );
}

export default Accountltem;
