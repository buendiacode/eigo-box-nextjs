/**2024/04/05-23:42 */
import React, {useContext} from 'react'
import Content from './Content'

export default function Frame(props) {
    const content = useContext(Content)
    return <section>
        {content.name}
        {/*props.content*/}
    </section>
}