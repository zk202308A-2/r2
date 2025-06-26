function CartComponent({items, changeQty}) {
    return ( 
        <div>
            <div>Cart Component</div>
            <ul>
                {items.map( ({mno,name,price,qty}) => 
                <li key={mno}>
                    {name} - {price} - {qty} 
                    <button 
                    className="m-2 px-6 py-3 bg-blue-400 text-white font-bold rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75 transition duration-200 ease-in-out"
                    onClick={() => { changeQty(mno, 1)}}
                    > 
                    
                    + 
                    </button>
                    
                    <button 
                    className="m-2 px-6 py-3 bg-red-400 text-white font-bold rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75 transition duration-200 ease-in-out"
                    onClick={() => { changeQty(mno, -1)}}
                    > 
                    - 
                    </button>
                </li>
                )}
            </ul>
        </div>
     );
}

export default CartComponent;