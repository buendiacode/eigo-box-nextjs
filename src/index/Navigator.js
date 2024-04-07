/**2024/04/05-23:42 */
import React, {Component} from 'react'
import AddCard from './navigator_items/AddCard'

class Navigator extends Component {
    /*items_path = './navigator_items/'
    
    items = [
        'AddCard'
    ]*/

    constructor(props) {
        super(props)
        this.state = {
            content: this.props.content
        }
        this.changeFrame = this.changeFrame.bind(this)
    }

    render() {
        return <navigator>
            <AddCard content={this.state.content} onClick={() => this.changeFrame()}/>
            
            {/*this.items.map((item) => {
                import(this.items_path + item + '.js').then( module => {'<'+item+'/>'})
            })*/}
            {/*importScripts(
                this.items.map((item)=>{
                    this.items_path + item + '.js'
                })
            )*/}
        </navigator>
    }

    changeFrame() {
        let data = <p>Add React</p>
        this.setState({data})
        console.log(this.state.content)
        //this.context.name = <p>Add Button</p>
        //Frame.changeContent(<p>Add Button</p>)
    }

    scripts = {

    }

    style = {

    }
}

export default Navigator