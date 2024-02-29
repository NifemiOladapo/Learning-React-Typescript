import Component1 from "./Component1.tsx"

const Component2 = ({}:React.ComponentProps<typeof Component1>) => {
  return (
    <div>Component2</div>
  )
}

export default Component2