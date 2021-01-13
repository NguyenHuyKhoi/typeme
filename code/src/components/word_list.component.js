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
                onClick={this.props.onClick} 
                style={{...styles.item_container,
                    marginTop:this.props.marginTop,
                    backgroundColor: is_picked?BLUE_1:GRAY_3}}>
            <text style={{...styles.item_name,
                        color: is_picked?WHITE:GRAY_1}}>
                {item} 
            </text>
        </div>
        )
    }
}

export default class WordListComponent extends Component {
    constructor(props){
        super(props);
        this.state={
            picked_items:[],
        };
    }   


    isPicked=(i)=>{
        //only save skill_name on picked_skills
        return (this.state.picked_items.filter(item=>item===i).length)>0;
    }

    clickItem= (i)=>{


        let arr=this.state.picked_items;
        // skill_name is not on picked_skills
        if (this.isPicked(i)){
            arr=arr.filter(item=>item!==i);
        }
        else{
            arr.push(i)
        };
        this.setState({
            picked_items:arr
        })

    }

    render(){
        const label=this.props.label!==undefined?this.props.label:'';
        const list=this.props.list;
        const disable=this.props.disable!==undefined?this.props.disable:true
        const auto_picked=this.props.auto_picked!==undefined?this.props.auto_picked:false;
        const marginTop=this.props.marginTop!==undefined?this.props.marginTop:7
        return (

            <div style={styles.container}>
                    <text style={styles.label}>
                        {label}
                    </text>
                    
                    <div style={styles.body}>
                        {
                            list.map((item,index)=>{
                           //     console.log('Item in SkillPicker :',item)
                                const is_picked=auto_picked?
                                    true
                                    :
                                    disable?
                                        false
                                        : 
                                        this.isPicked(item);
                                return (
                                    <Item
                                        onClick={()=>{
                                            if (!disable) this.clickItem(item)
                                        }} 
                                        marginTop={marginTop}
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
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:3,
        padding: 7
    },
    item_name:{
        fontSize:TEXT_SIZES.SMALL
    }
}
