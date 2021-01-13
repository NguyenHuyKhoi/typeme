//import from library 
import React, {Component} from 'react'
import { TEXT_SIZES } from '../../utils/constants'
export default class SmallFieldComponent extends Component {
    render(){
        return (
            <text style={{
                ...styles.label,
                backgroundColor: this.props.background_color,
                color:this.props.label_color,}}>
                {this.props.label}
            </text>
        )
    }
}

const styles={
    label:{
        fontSize:TEXT_SIZES.SMALL,
        paddingTop:4,
        paddingLeft:7,
        paddingRight:7,
        borderRadius:5}
}

