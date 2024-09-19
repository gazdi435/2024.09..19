import List from "./List"
import UserList from "./UserList"

function App() {

const obj = [
  {id:1, text:"elso sor"},{id:4, text:"masodik sor"},{id:2, text:"elso sor"},{id:3, text:"elso sor"}
]

const obj2 = [
  {name:"zsolt", age:2, email:"labamkozt@gmail.com"},{name:"zsolt", age:2, email:"labamkozt@gmail.com"},{name:"zsolt", age:2, email:"labamkozt@gmail.com"},{name:"zsolt", age:2, email:"labamkozt@gmail.com"}
]


  return (
    <>
      <List items={obj}></List>
      <UserList items={obj2}/>
    </>
  )
}

export default App
