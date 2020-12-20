//import from library 
import React, {Component} from 'react'
import { routePaths, TEXT_SIZES } from './../utils/constants'
import { BLACK, BLUE_0, GRAY_1, GRAY_3, WHITE, YELLOW_1 } from './../utils/palette'
import SmallFieldComponent from './common/small_field.component'

import kol_review1 from '../assets/images/kol_review1.png'
import kol_review2 from '../assets/images/kol_review2.png'
import kol_review3 from '../assets/images/kol_review3.jpg'

const avatars=[kol_review1,kol_review2,kol_review3]
export default class KolReviewITemComponent extends Component {
    render(){
        const item=this.props.item
        console.log('item',item);
        const index=this.props.index;
        return (
            <div style={styles.container}>
            
                <img src={avatars[index]}  style={styles.avatar}/>

                <text style={styles.freelancer_name}>
                    {item.name}
                </text>

                 <SmallFieldComponent 
                    background_color={YELLOW_1} 
                    label_color={WHITE} 
                    label={item.tagline}/>

                <text style={styles.tagline}>
                    {item.content}
                </text>

                                                    

            </div>


    
        )
    }
}


const styles={
    container:{
        width:'20vw',
        height:250,
        backgroundColor: WHITE,  
        boxShadow:'5px 5px 5px 5px #707070',
        padding:20, 
        marginBottom:50,           
        display:'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    avatar:{
        width:80,
        height:80,
        borderRadius:40
    },
    freelancer_name:{
        marginTop:20,
        fontSize:TEXT_SIZES.NORMAL,
        color:BLACK
    },
    tagline:{
        fontSize:TEXT_SIZES.SMALL,
        color:GRAY_1,
        textAlign:'center',
        marginTop: 20
    },
    fields:{
        width: '100%',
        marginTop:60
    },
    btn_container:{
        width: '100%',
        marginTop:10,
        textDecoration:'none'
    }
}