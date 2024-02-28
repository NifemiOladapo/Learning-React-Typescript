import Private from "./Private"
import Profile from "./Profile"

const ComponentProps = () => {
  return (
    <div>
        <h1>Practice typescript with component props</h1>
        <Private isLoggedIn component={Profile}/>
    </div>
  )
}

export default ComponentProps