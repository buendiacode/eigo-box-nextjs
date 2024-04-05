/**2024/04/05-23:23 */
import React, {Component} from 'react'
//import Head from 'next/head'
import Header from './Header'
import Frame from './Frame'
import Navigator from './Navigator'

class Main extends Component {
    render() {
        return (<div>
            <Header/>
            <Frame/>
            <Navigator/>
        </div>)
    }
}
export default Main