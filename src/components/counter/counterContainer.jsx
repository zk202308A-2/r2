import { useState } from "react";
import CountButtons from "./countButtons";
import CountDisplay from "./countDisplay";


function CountContainer() {

    const [num, setNum] = useState({value: 1})
    


    const change = function(amount) {
        
        num.value += amount

        console.log("-------------")
        console.log(num)

        setNum({...num})

    }

    return ( 
        <>
            <div>Count Container</div>
            <div className="m-3 p-3 bg-amber-400">
                <CountDisplay value={num.value} name={'홍길동'}></CountDisplay>
                <CountButtons fn={change}/>
            </div>
        </>
     );
}

export default CountContainer;