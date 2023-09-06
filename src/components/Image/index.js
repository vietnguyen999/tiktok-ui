import PropTypes from 'prop-types';
import classNames from 'classnames';
import { forwardRef, useState } from 'react';
import images from '~/assets/images';
import style from './Image.module.scss';

const Image = forwardRef(
    (
        {
            src,
            alt,
            classNane,
            fallback: customFallback = images.noImage,
            ...props
        },
        ref,
    ) => {
        const [fallback, setFallback] = useState('');

        const handleError = () => {
            setFallback(images.noImage);
        };
        return (
            <img
                className={classNames(style.wrapper, classNane)}
                ref={ref}
                src={fallback || src}
                alt={alt}
                {...props}
                onError={handleError}
            />
        );
    },
);
Image.propTypes = {
    src:PropTypes.string,
    alt:PropTypes.string,
    classNane:PropTypes.string,
    fallback:PropTypes.string,
};
export default Image;
