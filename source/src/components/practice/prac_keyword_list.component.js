//import from library 
import React, {Component} from 'react'
import KeyboardHintItemComponent from './../prac_keyword_item.component';
import sample_db from '../../sample_db/sample_db.json'

const keyboard_hints=sample_db.keyword_modal_hints
export default class PracKeywordListComponent extends Component {
    constructor(props){
        super(props);
        this.state={
            keyboard_hints:keyboard_hints
        }
    }



    render(){
        const keyboard_hints=this.state.keyboard_hints

        return (

            <div style={styles.container}>

                <div style={styles.body}>
                {
                    keyboard_hints.map((item,index)=>
                        <KeyboardHintItemComponent
                            clickItem={this.props.clickItem}
                            keyboard_hint={item} index={index}/>
                    )
                }
                </div>
            </div>
                    
    
        )
    }
}


const styles={
    container:{
        width:'100%',
        display:'flex',
        flexDirection: 'column'
    },
    body:{
        width:'100%',
        display:'flex',
        flexDirection: 'column'
    }
}
