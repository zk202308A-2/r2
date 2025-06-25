import CountDisplay from "./countDisplay";

function CountContainer() {
    return ( 
        <>
            <div>Count Container</div>
            <div className="m-3 p-3 bg-amber-400">
                <CountDisplay value={10} name={'홍길동'}></CountDisplay>
            </div>
        </>
     );
}

export default CountContainer;