export type Component1Props = {
    username : string
    email : string
}

const Component1 = ({username, email}:Component1Props) => {
  return (
    <div>
        <h1>{username}</h1>
        <h2>{email}</h2>
    </div>
  )
}

export default Component1