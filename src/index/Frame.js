/**2024/04/05-23:42 */
import React, {useContext} from 'react'
import Content from './Content'

export default function Frame({content}) {
    //const content = useContext(Content)
    return <section>
        {content}
    </section>
}