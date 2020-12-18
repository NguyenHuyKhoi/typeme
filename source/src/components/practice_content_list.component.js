//import from library 
import React, {Component} from 'react'
import { TEXT_SIZES } from '../utils/constants'
import { BLACK, BLUE_1, GRAY_1, GRAY_2, GRAY_3, GRAY_5, WHITE } from '../utils/palette'


class Item extends Component{
    render(){
        const item=this.props.item;
        const is_picked=this.props.is_picked;
        return (
            <div
               // onClick={this.props.onClick} 
                style={{...styles.item_container,
                    backgroundColor: is_picked?BLUE_1:GRAY_3}}>
            <text style={{...styles.item_name,
                        color: is_picked?WHITE:GRAY_1}}>
                {item} 
            </text>
        </div>
        )
    }
}

export default class PracticeContentListComponent extends Component {
    constructor(props){
        super(props);   
        this.state={
        }
    }   

    extractItemsFromContent=()=>{
        const content=this.props.content+'';
        console.log('content:',content,content.split(' '))
        return content.split(' ');
    }



    render(){
        const title=this.props.title!==undefined?this.props.title:'';
        const items=this.extractItemsFromContent();
        return (
    

            <div style={styles.container}>
                    <text style={styles.label}>
                        {title}
                    </text>
                    
                    <div style={styles.body}>
                        {
                            items.map((item,index)=>{
                           //     console.log('Item in SkillPicker :',item)
                                const is_picked=false;
                                return (
                                    <Item
                                        item={item}
                                        key={''+index}
                                        is_picked={is_picked}
                                    />
                                )
                             }
                            )
                        }
                    </div>
            
                </div>

        )
    }
}

const styles={
    container:{
        display:'flex',
        width: '100%',
        flexDirection: 'column'
    },
    label:{
        fontSize:TEXT_SIZES.NORMAL,
        color:BLACK
    },
    body:{
        marginTop:5,
        width:'100%',
        alignSelf: 'baseline',
        display:'flex',
        lexDirection: 'row',
        flexWrap:'wrap',
        alignItems: 'flex-start'
    },
    item_container:{
        display:'flex',
        marginRight:10,
        marginTop:7,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:3,
        padding: 7
    },
    item_name:{
        fontSize:TEXT_SIZES.SMALL
    }
}
