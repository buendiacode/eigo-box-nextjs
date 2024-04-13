/**2024/04/06-11:10 */
import React from 'react'
//import content from '../Content'
//import Frame from '../Frame'

export default function AddCard({content, changeContent}) {
        return <li onClick={() => changeContent("Add Button")}>
            add
        </li>
}