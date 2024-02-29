const CustomInput = (props: { children?: never } & React.ComponentProps<"input">) => {
    return (
        <div>
            <input {...props} />
        </div>
    )
}

export default CustomInput