import React, { useEffect, useState, useRef } from 'react';
import classNames from 'classnames/bind';
import HeadlessTippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';

import * as searchServices from '~/services/searchServices';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import Accountltem from '~/components/Accountltem/Accountltem';
import { SearchIcon } from '~/components/Icons';
import { useDebounce } from '~/hooks';

import styles from './Search.module.scss';
const cx = classNames.bind(styles);
function Search() {
    const [searchvalue, setSearchvalue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);

    const debounce = useDebounce(searchvalue, 500);

    useEffect(() => {
        if (!debounce.trim()) {
            setSearchResult([]);
            return;
        }

        const fetchApi = async () => {
            setLoading(true);
            const result = await searchServices.search(debounce);
            setSearchResult(result);
            setLoading(false);
        };

        fetchApi();
    }, [debounce]);
    const inputRef = useRef();

    const handleClear = () => {
        setSearchvalue('');
        setSearchResult([]);
        inputRef.current.focus();
    };
    const hanledHideResult = () => {
        setShowResult(false);
    };
    const handleChange = (e) => {
        const searchValue = e.target.value;
        if (!searchValue.startsWith(' ')) {
            setSearchvalue(searchValue);
        }
    };

    return (
        //Using a wrapper <div> or <span> tag around the reference element 
        //solves this by creating a new parentNode context. 
        <div>
        <HeadlessTippy
            interactive
            visible={showResult && searchResult.length > 0}
            render={(attrs) => (
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <h4 className={cx('search-title')}>Accounts</h4>
                        {searchResult.map((result) => (
                            <Accountltem key={result.id} data={result} />
                        ))}
                    </PopperWrapper>
                </div>
            )}
            onClickOutside={hanledHideResult}
        >
            <div className={cx('search')}>
                <input
                    ref={inputRef}
                    value={searchvalue}
                    placeholder="Search accounts and videos"
                    spellCheck={false}
                    onChange={handleChange}
                    onFocus={() => setShowResult(true)}
                />
                {!!searchvalue && !loading && (
                    <button className={cx('clear')} onClick={handleClear}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                )}

                {loading && (
                    <FontAwesomeIcon
                        className={cx('loading')}
                        icon={faSpinner}
                    />
                )}
                <button
                    className={cx('search-btn')}
                    onMouseDown={(e) => e.preventDefault()}
                >
                    <SearchIcon />
                </button>
            </div>
        </HeadlessTippy>
        </div>
    );
}

export default Search;
