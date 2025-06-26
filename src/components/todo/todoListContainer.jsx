import { useState } from "react";


function TodoListContainer() {

    const [data, setData] = useState([])

    async function getData() {
        const res = await fetch(`https://jsonplaceholder.typicode.com/todos`)
        const result = await res.json()
        setData(() => result)
    }
    getData()


    return ( 
        <div>
            Todo List
            <ul>
                {data.map(user => <li>AAAA</li>)}
            </ul>
        </div>
     );
}

export default TodoListContainer;

