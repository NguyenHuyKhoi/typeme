//import from library 
import React, {Component} from 'react'
import { TEXT_SIZES } from '../../utils/constants'
import { BLACK } from '../../utils/palette'
import FunctionItemComponent from './function_item.component'

export default class FunctionListComponent extends Component {
    render(){
        const categories=this.props.categories;
        return (
            <div style={styles.container}>

            <text style={styles.title}>
                Tại đây, bạn có thể : 
            </text>

            <div style={styles.body}>
                {
                    categories.map((item,index)=>
                        <FunctionItemComponent key={''+index} category={item} index={index}/>
                    )
                }
            </div>  
           
        </div>
    
        )
    }
}


const styles={
    container :{
        width:'100vw',
        display:'flex',
        alignSelf: 'baseline',
        flexDirection: 'column',
        alignItems: 'center'
    },
    title:{
        fontSize:TEXT_SIZES.HEADER,
        color:BLACK,
        marginTop:50
    },
    body:{
        marginTop:20,
        width:'80vw',
        display:'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start'
    }
}