import Product from "./Product"

type ProductListProps = {
    items: {name:string, price:number}[]
}
const ProductList = (props: ProductListProps) => {
  return (
    <ul>
        {props.items.map((g,i)=>(<Product id={i} {...g}/>)

        )}
    </ul>
  )
}

export default ProductList