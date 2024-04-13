/**2024/04/05-23:23 */
import React, {Component} from 'react'
import Head from './Head'
import Header from './Header'
import Frame from './Frame'
import Navigator from './Navigator'
import Content from './Content'

//const Content = React.createContext()

class Main extends Component {
    static contextType = Content

    constructor(props) {
        super(props)
        console.log(this.context)
        this.state = {
            content: "Hello React"
        }
        this.changeContent = this.changeContent.bind(this)
    }

    render() {
        return <main>
            <Head/>
            <Header/>
            <Content.Provider content={this.state.content}>
                <Frame content={this.state.content}/>
                <Navigator content={this.state.content} changeContent={this.changeContent}/>
            </Content.Provider>
        </main>
    }

    changeContent(newContent) {
        this.setState({content:newContent})
    }
}
export default Main