function MenuDisplay({arr}) {
    return (
        <>
            <ul>
                {arr.map( ({mno, name, price}) => 
                    <li key={mno}>{mno} - {name} - {price}</li>)}
            </ul>
        </>
      );
}

export default MenuDisplay;