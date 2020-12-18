//import from library 
import React, {Component} from 'react'
import { IconContext } from 'react-icons/lib';
import { bullshitIcons } from '../../utils/constants';

export default class CustomIconComponent extends Component {
    render(){
        const name=this.props.name
        const color=this.props.color;
        const size=this.props.size;
        return (
            <IconContext.Provider
                value={{ 
                    color: this.props.color, 
                    style:{width: size,
                        height:size,
                        borderRadius:2}
                }}>
                <div>
                    {bullshitIcons[this.props.name]}
                </div>
            </IconContext.Provider>
        )
    }
}

