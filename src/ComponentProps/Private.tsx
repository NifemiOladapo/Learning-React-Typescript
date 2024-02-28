import Login from "./Login"
import {ProfileProps} from "./Profile"
type PrivateProps = {
  isLoggedIn : boolean
  component : React.ComponentType<ProfileProps>
}

const Private = ({component:Component, isLoggedIn}:PrivateProps) => {
  return (
    <div>
        <h1>This is your private page</h1>
        {
          isLoggedIn ? <Component name="Nifemi Oladapo"/> : <Login />
        }
    </div>
  )
}

export default Private