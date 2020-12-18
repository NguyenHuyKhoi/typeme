//import from library 
import React, {Component} from 'react'
import FilterComponent from '../components/input/filter.component';
import FooterBarComponent from '../components/common/footer_bar.component';

import HeaderBarComponent from '../components/common/header_bar.component';
import FreelancerListComponent from '../components/freelancer/freelancer_list.component';
import api from '../sample_db/fake_api_responses.json'
import { TEXT_SIZES } from '../utils/constants';
import { BLACK } from '../utils/palette';
import {BASE_URL} from '../utils/constants'
import axios from 'axios'
import PracticeTabsBarComponent from '../components/common/practice_tabs.component';
import PracticeComponent from '../components/practice.component'
let FIELDS=['category','keyword','hourly_rate','fixed_price','skills'];

export default class PracticeScreen extends Component {

    constructor(props){
        super(props);
        this.state={
            focus_tab_index:0
        }
    }

   

   



    render(){

        const freelancers=this.state.freelancers;
        return (

            <div style={styles.container}>

                <HeaderBarComponent/>

                <div style={styles.body}>

                    <div style={{width:'60vw'}}>
                    <PracticeTabsBarComponent 
                        focus_tab_index={this.state.focus_tab_index}
                        onClickTab={(index)=>
                            this.setState({
                                focus_tab_index:index
                            })}/>
                    </div>
                    
                    <PracticeComponent/>

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
        display:'flex',
        flexDirection: 'column'
    },
    body:{
        width:'100vw',
        display:'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingBottom:100,
        paddingTop:15
    }
}