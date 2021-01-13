//import from library 
import React, {Component} from 'react'
import { routePaths, TEXT_SIZES } from '../utils/constants'
import { BLACK } from '../utils/palette'
import FunctionItemComponent from './function_item.component'
import sample_db from '../sample_db/sample_db.json'

const functions=sample_db.functions;

const links=[
    routePaths.PRACTICE,
    routePaths.PRACTICE,
    routePaths.STATISTIC,
    routePaths.EDITOR,
    routePaths.STATISTIC,
    routePaths.ROOM_LIST,
    routePaths.FEEDBACK,
    routePaths.SETTING
]
export default class FunctionListComponent extends Component {
    render(){
        return (
            <div style={styles.container}>

            <text style={styles.title}>
                Tại đây, bạn có thể : 
            </text>

            <div style={styles.body}>
                {
                    functions.map((item,index)=>
                        <FunctionItemComponent link={links[index]} key={''+index} item={item} index={index}/>
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