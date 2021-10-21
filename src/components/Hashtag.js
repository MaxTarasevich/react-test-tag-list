import React from 'react'
import {RiCloseCircleLine} from 'react-icons/ri'

function Hashtag({todos,filter}) {

    let hashArr = todos.map( item => item.hashTag).flat()
   
    let hashArrUniq = []

    for(let i = 0;i < hashArr.length; i++){
        if(!hashArrUniq.includes(hashArr[i])){
            hashArrUniq.push(hashArr[i])
        }
    }
   

    return (
        <div className='hashTag-container'>
           {hashArrUniq.map((item, index)=>{
              
                return <span className={'hashTag-item'} key={index} onClick={()=>filter(item)} >
                     <RiCloseCircleLine className='delete-icon' />
                    {item + ` `}
                    </span>
             
           })}
           {hashArrUniq.length !== 0 ? <span className={'hashTag-item'} onClick={()=>filter('')}>View all</span> : null} 
        </div>
    )
}

export default Hashtag
