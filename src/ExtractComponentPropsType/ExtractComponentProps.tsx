import Component1 from "./COmponent1"
import Component2 from "./Component2"

const ExtractComponentProps = () => {
  return (
    <div>
        <h1>Practice typescript with extracting component props</h1>
        <Component1 email="nife@gmail.com" username="Nifemi Oladapo"/>
        <Component2 email="kola@gmail.com" username="Kolawole Oladapo"/>
    </div>
  )
}

export default ExtractComponentProps