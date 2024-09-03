import { useRef } from "react";
import Children from './Children';

const Parent = () => {
    const inputRef = useRef<{ blur: () => void, focus: () => void }>()

    const handleBlur = () => {
        inputRef.current?.blur()
    }
    const handleFocus = () => {
        inputRef.current?.focus()
    }

    return (
        <>
            Parent
            <br />
            <Children ref={inputRef} />
            <br />
            <br />
            <button onClick={handleBlur}>Blur</button>
            <button onClick={handleFocus} style={{ marginLeft: "10px" }}>Focus</button>

        </>
    )
}

export default Parent