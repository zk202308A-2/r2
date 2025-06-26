
function TodoInput() {
    return ( 
        <div>
            <div>
                Title:
                <input className="border-2 p-2 m-2" type="text" name='title'></input>
            </div>
            <div>
                Writer: 
                <input type="text"  className="border-2 p-2 m-2" name='writer'></input>
            </div>
            <div>
                <button>CLICK</button>
            </div>
        </div>
     );
}

export default TodoInput;