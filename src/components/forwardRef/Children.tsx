import { forwardRef, useImperativeHandle, useRef } from "react"

const Children = forwardRef((props, ref) => {

    const inputRef = useRef<HTMLInputElement>(null);

    useImperativeHandle(ref, () => ({
        blur: () => {
            inputRef?.current?.blur();
        },
        focus: () => {
            inputRef?.current?.focus();
        },
    }))

    return (
        <>
            <input type="text" ref={inputRef} />
        </>
    )
})

export default Children;