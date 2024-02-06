import {useEffect, useRef} from "react";

export function useInputFocus() {
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef?.current?.focus();
    }, []);

    return inputRef;
}
