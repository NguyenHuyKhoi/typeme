//import from library 
import React, {Component} from 'react'
import FooterBarComponent from '../components/common/footer_bar.component';
import HeaderBarComponent from '../components/common/header_bar.component';
import HomeBannerComponent from '../components/common/home_banner.component';   
import KolReviewListComponent from '../components/kol_review_list.component';
import { BLACK, BLUE_1, WHITE } from '../utils/palette';
import FunctionListComponent from '../components//function_list.component';

export default class HomeScreen extends Component {


   
    render(){
        return (

            <div style={styles.container}>
                
              
                <HeaderBarComponent/>

                <div style={styles.body}>

                    <HomeBannerComponent/>

                    <FunctionListComponent/>


                    <KolReviewListComponent/>
                </div>

                <FooterBarComponent/>
            </div>
            
        )
    }
}

const styles={
    container:{
        width:'100vw',
        height:'100vh',
        backgroundColor:WHITE,
        overflowX:'hidden',
        display:'flex',
        flexDirection: 'column'
    },
    body:{
        width:'100vw',
        display:'flex',
        flexDirection: 'column',
        paddingBottom:100
    }
}
