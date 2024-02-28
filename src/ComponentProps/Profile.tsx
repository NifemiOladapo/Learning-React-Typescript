export type ProfileProps = {
    name : string
}
const Profile = ({name}:ProfileProps) => {

    return (
        <div>
          <h1>This is your profile page,{name}</h1>
        </div>
    )
}

export default Profile