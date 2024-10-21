import { useState } from "react"

const Todo = () => {
    // const [list, setList] = useState([{ id: 1, activity: "Apple" }, { id: 2, activity: "Orange" }])
    const [list, setList] = useState([])
    const [newItem,setNewItem] = useState("")

    const handleDelete = (id) => {
        const tempArr = list.filter((item) => {
            if (item.id == id) {
                return false
            } else {
                return true
            }
        })
        setList(tempArr)
    }

    const handleChange = (e)=> {
        setNewItem(e.target.value)
    }

    const handleAdd = () => {
        setList([...list,{id:list.length+1,activity:newItem}])
        setNewItem("")
    }

    return (
        <>
            <h1>To-Do List</h1>
            <input type="text" value={newItem} onChange={handleChange} />
            <button onClick={handleAdd}>Add</button>
            <ul>
                {
                    list.map((item,index) => {
                        return (<li key={index}>{item.activity} <button onClick={() => { handleDelete(item.id) }}>Delete</button></li>)
                    })
                }
            </ul>
        </>
    )
}

export default Todo