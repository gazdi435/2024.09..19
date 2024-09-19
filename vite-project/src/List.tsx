import ListItem from "./ListItem"

type listProps = {
    items: {id:number, text:string}[]
}

const List = ({items}:listProps) => {
  return (
    <ul>    
        {items.map(
            item=>(<ListItem key={item.id} {...item}></ListItem>)
        )}
    </ul>
  )
}

export default List