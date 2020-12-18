import react,{Component} from 'react'
import PracticeScreen from './screen/practice.screen'


export default class App extends Component{
    render(){
        return (
            <div style={{flex:1,backgroundColor:'#921797'}}>
                <PracticeScreen/>
            </div>
        )
    }
}