import react,{Component} from 'react'
import KeyboardComponent from '../component/keyboard.component'


export default class PracticeScreen extends Component{
    render(){
        return (
            <div style={{width:'100vw',height:'100vh',
                backgroundColor:'#578354',
                display:'flex',justifyContent:'center',alignItems:'center'}}>
                <KeyboardComponent/>
            </div>
        )
    }
}