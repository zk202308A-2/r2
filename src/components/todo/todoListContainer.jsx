import { useState } from "react";


function TodoListContainer() {

    const [data, setData] = useState([])

    async function getData() {
        const res = await fetch(`https://jsonplaceholder.typicode.com/users`)

    }
    


    return ( 
        <div>
            Todo List
            <ul>
                <li>

                </li>
            </ul>
        </div>
     );
}

export default TodoListContainer;

