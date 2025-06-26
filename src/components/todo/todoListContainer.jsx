import { useEffect, useState } from "react";


function TodoListContainer() {

    const [data, setData] = useState([])
    const [page, setPage] = useState(1)
    const [refresh, setRefresh] = useState(true)

    async function getData() {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`)
        const result = await res.json()
        setData(() => result)
    }

    useEffect(() =>{
        getData()
    }, [page, refresh])



    return ( 
        <div>
            Todo List
            <ul>
                {data.map(todo => <li key={todo.id}>{todo.id} --- {todo.title}</li>)}
            </ul>

            <div onClick={() => {
                if(page === 2){
                    setRefresh(!refresh)
                    return
                }    

                setPage(2)
            }} >2페이지</div>
            <div onClick={() => {
                                if(page === 3){
                                    setRefresh(!refresh)
                                    return
                                }    
                
                setPage(3)
            }}>3페이지</div>
        </div>
     );
}

export default TodoListContainer;

