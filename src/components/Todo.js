import React, {useState} from 'react'
import {RiCloseCircleLine} from 'react-icons/ri'
import {TiEdit} from 'react-icons/ti'
import TodoForm from './TodoForm'
import Hashtag from './Hashtag'

function Todo({todos,completeTodo, removeTodo, updateTodo}) {
    const [edit,setEdit] = useState({
        id:null,
        value:''
    })

    const [filt,setFilt] = useState([])

    const submitUpdate = value =>{
        updateTodo(edit.id, value)
        setEdit({
            id:null,
            value:''
        })
    }

   

    const filterTodo = (hashTag)=>{
        if(hashTag[hashTag.length-1] === `,`){
            hashTag = hashTag.slice(0,-1)
        }
        if(hashTag === ''){
            setFilt([])
        }else{
            const filtered = [...todos].filter(todo => todo.hashTag.includes(hashTag))
            setFilt(filtered)
        }
    }

    if(edit.id){
        return <TodoForm edit={edit} onSubmit={submitUpdate} />
    }

    return <>
        <Hashtag todos={todos} filter={filterTodo}/>

        {filt.length > 0 ? 
        filt.map((todo,index)=>(
         <div className={todo.isComplete ?'todo-row complete' :'todo-row'}
             key={index}>

                 <div key={todo.id}>
                {todo.text.split(` `).map((item, index)=>{
                    if(item[0] === `#`){
                        return <span key={index} className={'hashtag'} onClick={()=>filterTodo(item)}>{item} </span>
                    }
                    return <span key={index}>{item} </span>
                })}
                 </div>

                 <div className="icons">
                    <RiCloseCircleLine 
                    onClick={()=>removeTodo(todo.id)}
                    className='delete-icon'
                    />
                    <TiEdit 
                       onClick={()=>setEdit({id: todo.id, value: todo.text})}
                       className='edit-icon'/>
                 </div>
        </div>
    )) : 
        todos.map((todo,index)=>(
            <div className={todo.isComplete ?'todo-row complete' :'todo-row'}
                key={index}>

                <div key={todo.id}>
               {todo.text.split(` `).map((item, index)=>{
                   if(item[0] === `#`){
                       return <span key={index} className={'hashtag'} onClick={()=>filterTodo(item)}>{item} </span>
                   }
                   return <span key={index}>{item} </span>
               })}
                </div>

                <div className="icons">
                   <RiCloseCircleLine 
                     onClick={()=>removeTodo(todo.id)}
                     className='delete-icon'
                   />
                   <TiEdit 
                      onClick={()=>setEdit({id: todo.id, value: todo.text})}
                      className='edit-icon'/>
                </div>
            </div>
   ))}
    </>
}

export default Todo
