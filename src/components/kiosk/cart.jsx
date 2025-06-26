function CartComponent({items, changeQty}) {
    return ( 
        <div>
            <div>Cart Component</div>
            <ul>
                {items.map(item => <li>AAA</li>)}
            </ul>
        </div>
     );
}

export default CartComponent;