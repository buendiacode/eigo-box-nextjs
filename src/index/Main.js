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
    }

    render() {
        return <main>
            <Head/>
            <Header/>
            <Content.Provider value={this.context}>
                <Frame/>
                <Navigator/>
            </Content.Provider>
        </main>
    }
}
export default Main