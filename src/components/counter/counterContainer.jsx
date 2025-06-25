import CountDisplay from "./countDisplay";

function CountContainer() {
    return ( 
        <>
            <div>Count Container</div>
            <div className="m-3 p-3 bg-amber-400">
                <CountDisplay></CountDisplay>
            </div>
        </>
     );
}

export default CountContainer;