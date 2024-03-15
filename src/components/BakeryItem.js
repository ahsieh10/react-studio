// TODO: create a component that displays a single bakery item


export function BakeryItem(props) {
    return (
        <div>
            <img src = {props.item.image}/>
            <p>{props.item.name}</p>
            <p>{props.item.description}</p>
            <p>{props.item.price}</p>
            <button onClick = {props.state} item={props.item.name} price={props.item.price}>Add to Cart</button>
        </div>
    );
  }

export function BakeryCart(props){
    if(props.cart.length == 0){
        return(<p>Nothing here just yet!</p>);
    } else {
        return (
            <div>
                {props.cart.map((item, index) => (
            <p>{item.count}x {item.name}</p>
            ))}
            <p>Total: {props.total}</p>
            </div>
        );
    }
}

// module.exports = {
//     BakeryItem,
//     BakeryCart,
// }