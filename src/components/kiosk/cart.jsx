function CartComponent({items, changeQty}) {
    return ( 
        <div>
            <div>Cart Component</div>
            <ul>
                {items.map( ({mno,name,price,qty}) => 
                <li key={mno}>{name} - {price} - {qty} </li>
                )}
            </ul>
        </div>
     );
}

export default CartComponent;