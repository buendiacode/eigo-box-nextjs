/**2024/04/05-23:42 */
import React from 'react'
import AddCard from './navigator_items/AddCard'

export default function Navigator({content, changeContent})  {
    return <navigator>
        <AddCard content={content} changeContent={changeContent}/>
    </navigator>
}