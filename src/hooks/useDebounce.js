import { useEffect, useState } from 'react';

function useDebounce(value, delay) {// Tạo ra hooks tên useDebounce để delay ket qua search
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => setDebouncedValue(value), delay);
        return () => clearTimeout(handler);
    }, [value]);

    return debouncedValue;
}

export default useDebounce;
