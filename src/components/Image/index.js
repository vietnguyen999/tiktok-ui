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
export default Image;
