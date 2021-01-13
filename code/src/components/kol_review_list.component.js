//import from library 
import React, {Component} from 'react'
import { TEXT_SIZES } from './../utils/constants'
import { BLACK, WHITE } from './../utils/palette'
import sample_db from '../sample_db/sample_db.json'
import KolReviewITemComponent from './kol_review_item.component'

const kol_reviews=sample_db.kol_reviews
export default class KolReviewListComponent extends Component {
    render(){
        let freelancers=this.props.freelancers;
        return (
            <div style={styles.container}>

                <text style={styles.title}>
                    Nhiều người nổi tiếng đã ở đây :
                </text>

                <div style={styles.body}>
                    {
                        kol_reviews.map((item,index)=>
                            <KolReviewITemComponent item={item} index={index} key={''+index}/>
                        )
                    }
                </div>  
            
            </div>
                
        )
    }
}

const styles={
    container:{
        width:'100vw',
        alignSelf: 'baseline',
        display:'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    title:{
        fontSize:TEXT_SIZES.HEADER,
        color:BLACK,
        marginTop:60
    },
    body:{
        marginTop:20,
        width:'80vw',
        display:'flex',
        justifyContent: 'space-between',
        flexDirection: 'row'
    }
}
