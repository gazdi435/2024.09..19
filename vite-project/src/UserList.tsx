import UserCard from "./UserCard"

type UserListProps = {
  items: {name:string, age:number, email:string}[]
}

const UserList = (props: UserListProps) => {
  return (
    <ul>
      {props.items.map(item => (
        <UserCard {...item}></UserCard>
      ))}
    </ul>
  )
}

export default UserList