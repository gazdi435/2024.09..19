type ProductProps = {
    id:number,
    name:string,
    price:number
}


const Product = (props: ProductProps) => {
  return (
    <li>{props.id},{props.name},{props.price}</li>
  )
}

export default Product