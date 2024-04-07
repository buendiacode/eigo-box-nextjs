/**2024/04/06-11:10 */
import React, {Component} from 'react'
import content from '../Content'
import Frame from '../Frame'

class AddCard extends Component {
    static contextType = content

    constructor(props) {
        super(props)
        this.state = {
            content: this.props.content
        }
        this.changeFrame = this.changeFrame.bind(this)
    }

    render() {
        return (
            <li>add</li>
        )
    }

    changeFrame() {
        this.setState((state) => ({content:<p>Add React</p>}))
        console.log(this.state.content)
        //this.context.name = <p>Add Button</p>
        //Frame.changeContent(<p>Add Button</p>)
    }
}

export default AddCard