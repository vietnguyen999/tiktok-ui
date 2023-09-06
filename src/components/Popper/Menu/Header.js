import PropTypes from 'prop-types'
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Menu.module.scss';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);
function Header({ title, onback }) {
    return (
        <header className={cx('header')}>
            <button className={cx('back-btn')} onClick={onback}>
                <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <h4 className={cx('header-title')}>{title}</h4>
        </header>
    );
}
 Header.propTypes={
    title: PropTypes.string.isRequired,
    onback:PropTypes.func.isRequired,
 }

export default Header;
