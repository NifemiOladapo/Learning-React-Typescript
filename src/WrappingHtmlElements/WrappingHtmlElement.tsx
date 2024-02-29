import CustomButton from "./CustomButton";
import CustomInput from "./CustomInput";

const WrappingHtmlElement = () => {
    return (
        <div>
            <h1>Practicing typescript with Wrapping Html elements</h1>
            <CustomButton onClick={() => alert("heloo")}>
                Click Me
            </CustomButton>
            <CustomInput onChange={e => alert(e.target.value)}>
            </CustomInput>
        </div>
    )
}

export default WrappingHtmlElement;