import React, {useState, useEffect, useRef} from 'react'

function TodoForm(props) {
const [input,setInput] = useState(props.edit ? props.edit.value : '' )

const inputRef = useRef(null)

useEffect(()=>{
    inputRef.current.focus()
})

const handleSubmit = e => {
    e.preventDefault()
    let strArr = []
    if(input.includes(`#`)){
        strArr = input.split(` `).filter((item)=>item.includes(`#`) && item.length > 1)
    }

    props.onSubmit({
        id:Date.now(),
        text: input,
        hashTag:strArr
    })

    setInput('')
}

const handleChange = (e)=>{
    setInput(e.target.value)
}


    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            {props.edit ? (<>
                <input 
            className="todo-input edit"
            type="text" 
            name="text"
            placeholder="Change your text"
            value={input}
            onChange={handleChange}
            ref={inputRef}
            />
            <button className="todo-button edit">Update</button>
            </>) : (<>
            <input 
            className="todo-input"
            type="text" 
            name="text"
            placeholder="Add a todo"
            value={input}
            onChange={handleChange}
            ref={inputRef}
            />
            <button className="todo-button">Add todo</button>
            </>)}
           

        </form>
    )
}

export default TodoForm
