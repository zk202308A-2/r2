import { useState } from "react";

function TodoInput() {

    const [data,setData] = useState({title:'AAAA', writer:'user00'})

    const handleChange = (e) => {
        console.log("event: " , e)
        const target = e.target
        const name = target.name
        const value = target.value
        console.log("name", name, "value",value)

        data[name] = value

        //const newData  = {...data}
        //setData(() => newData)
        
        setData(() => ({...data}))
    }

    return ( 
        <div>
            <div>
                Title:
                <input className="border-2 p-2 m-2" 
                type="text" 
                name='title'
                value={data.title}
                onChange={handleChange}></input>
            </div>
            <div>
                Writer: 
                <input type="text"  
                className="border-2 p-2 m-2" 
                name='writer'
                value={data.writer}
                onChange={handleChange}></input>
            </div>
            <div>
                <button>CLICK</button>
            </div>
        </div>
     );
}

export default TodoInput;