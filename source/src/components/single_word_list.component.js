//import from library 
import React, {Component} from 'react'
import { TEXT_SIZES } from '../utils/constants'
import { BLACK, BLUE_1, GRAY_1, GRAY_2, GRAY_3, GRAY_5, WHITE } from '../utils/palette'

const wordsP=[
    {

        name: "Account Manager",
  
    },
    {
      
        name: "Cisco",

    },
    {
        
        name: "Agile CRM",
    
    },
    {
       
        name: "Billing",
      
    },
    {
      
        name: "Zendesk",
    }
]

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

export default class SingleWordListComponent extends Component {
    constructor(props){
        super(props);
    }   



    render(){
        const label=this.props.label!==undefined?this.props.label:'';
        const list=this.props.list;
        return (
    

            <div style={styles.container}>
                    <text style={styles.label}>
                        {label}
                    </text>
                    
                    <div style={styles.body}>
                        {
                            list.map((item,index)=>{
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
        flex:1,
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
