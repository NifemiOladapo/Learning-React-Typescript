type CustomButtonProps = {
    children : string
} & Omit<React.ComponentProps<"button">, "children">

const CustomButton = ({ children, ...rest }: CustomButtonProps) => {
    return (
        <div>
            <button {...rest}>
                {
                    children
                }
            </button>
        </div>
    )
}

export default CustomButton