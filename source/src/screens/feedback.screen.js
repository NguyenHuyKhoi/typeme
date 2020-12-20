//import from library 
import React, {Component} from 'react'
import FeedbackModal from '../components/feed_back.modal';
import FooterBarComponent from '../components/common/footer_bar.component';

import HeaderBarComponent from '../components/common/header_bar.component';
import FeedbackListComponent from '../components/feedback_list.component';

import api from '../sample_db/fake_api_responses.json'
import { BODY, TEXT_SIZES } from '../utils/constants';
import { BLACK, GRAY_6 } from '../utils/palette';
import FeedbackCreateModal from '../components/modal/feedback_create_modal';
import ButtonComponent from '../components/common/button.component';


export default class FeedbackScreen extends Component {
    constructor(props){
        super(props);
        this.state={
            show_create_modal:false,
        }
    }

    openCreateModal=()=>{
        this.setState({
            show_create_modal:true
        })
    }

    closeCreateModal=()=>{
        this.setState({
            show_create_modal:false
        })
    }

    render(){
        return (

            <div style={styles.container}>
                <FeedbackCreateModal
                    is_open={this.state.show_create_modal} 
                    clickCancel={this.closeCreateModal}

                    clickOk={()=>{
                        alert('Góp ý của bạn đã được đăng, cảm ơn!!!')
                        this.closeCreateModal();
                    }}/>

                {/* header */}
                <HeaderBarComponent />

                <div style={styles.body}>

                    <div style={{flex:1}}/>

                    <div style={{flex:BODY.FLEX}}>
                            <FeedbackListComponent/>
                    </div>
                 
                     
                    <div style={{flex:1,display:'flex',flexDirection:'column',alignItems: 'center'}}>
                        <div style={{width: '60%'}}>
                            <ButtonComponent
                                onClick={this.openCreateModal}
                                 label='Gửi góp ý'/>
                        </div>
                      
                    </div>
                </div>


                {/* footer */}
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
        flexDirection: 'column',
        backgroundColor: GRAY_6
    },
    body:{
        width:'100vw',
        display:'flex',
        flexDirection: 'row',
        paddingBottom:100,
        paddingTop:BODY.PADDING_TOP
    }
}
