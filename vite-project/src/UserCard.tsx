type UserCardProps = {
  name:string,
  age: number,
  email: string
}

const UserCard = (props: UserCardProps) => {
  return (
    <div className="userCard">
      <h1>{props.name}</h1>
      <h5>age:{props.age}</h5>
      <h5>Email: {props.email}</h5>
    </div>
  )
}

export default UserCard