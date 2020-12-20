//import from library 
import React, {Component} from 'react'
import { Link } from 'react-router-dom';
import { TEXT_SIZES } from '../../utils/constants'
import {  BLUE_1, WHITE } from '../../utils/palette'
export default class HeaderListComponent extends Component {
    render(){
     
        const height =50;
        const title=this.props.title!==undefined?this.props.title:'';
        const right_title=this.props.right_title!==undefined?this.props.right_title:'';
        const des_screen=this.props.des_screen!==undefined?this.props.des_screen:''
        return (
            <div style={{...styles.container,height:height}}>

                <text style={styles.title}>
                    {title}
                </text>

                {
                    title!==''?
                    <Link
                        to={des_screen}>
                        <text style={styles.title}>
                        {right_title}
                        </text>
                    </Link>
                    :
                    null

                }
               
                
                
            </div>
                     
    
        )
    }
}

const styles={
    container:{
        width:'100%',
        display:'flex',
        flexDirection: 'row',
        alignItems:'center',
        backgroundColor: BLUE_1,
        justifyContent: 'space-between'
    },
    title:{

        fontSize:TEXT_SIZES.BIG,
        color:WHITE,
        marginLeft:20,
        marginRight: 20
    },
    body:{
        width:'20%',
        height:'100%',
        marginRight: 30
    }
}