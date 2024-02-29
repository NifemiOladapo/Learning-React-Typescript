type HorizontalPosition = "left" | "center" | "right";
type VerticalPosition = "top" | "center" | "bottom";


type ToastProps = {
    position : `${HorizontalPosition}-${VerticalPosition}`
}

const Toast = ({position}:ToastProps) => {
  return (
    <div>
        <h3>Toast notification component</h3>
        <h2>Your choosen position is {position}</h2>
    </div>
  )
}

export default Toast