//import from library 
import React, {Component} from 'react'


import { routePaths, SIDEBAR_RATIO,PADDING_BODY_DASHBOARD, BODY } from '../utils/constants'
import { GRAY_2, GRAY_6,GREEN_1,RED_1,WHITE, YELLOW_1 } from '../utils/palette'
import HeaderBarComponent from '../components/common/header_bar.component'
import TextareaInputComponent from '../components/input/textarea_input.component'
import DictionaryModal from '../components/modal/dictionary.modal'
import {connect }from 'react-redux'
import * as action from './../redux/action/user.action'

class StatisticScreen extends Component {
    constructor(props){
        super(props);
        this.state={
            show_modal:false,
            value:'',

    };
  }

  openModal = () => {
    this.setState({
      show_modal: true
    });
  };

  closeModal = () => {
    this.setState({
      show_modal: false
    });
  };


  render() {
    return (

      <div style={{...styles.container,backgroundColor: this.props.user_infor.background_color}}>

        <DictionaryModal
          is_open={this.state.show_modal}
          clickCancel={this.closeModal}

          clickOk={() => {
            alert('Đã lưu lại tìm kiếm này!!!');
            this.closeModal();
          }}/>

        <HeaderBarComponent/>

        <div style={styles.body}>
          <div style={{flex: 1}}/>
          <iframe width="100%" height="100%"
                  src="https://xd.adobe.com/embed/af9ddbba-ba72-4bd1-872e-b73b34939462-face/screen/580892f3-357e-4014-9dfd-0f7c822adc51" frameBorder="0"
                  allowFullScreen/>
          <div style={{flex: 1}}/>


        </div>


      </div>

    );
  }
}

const styles = {
  container: {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: GRAY_6
  },
  content_body: {
    flex: BODY.FLEX,
    display: 'flex',
    height: '75vh',
    flexDirection: 'column'
  },
  body: {
    backgroundColor: '#F0F2FD',
    width: '100vw',
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
    paddingTop: BODY.PADDING_TOP
  }
};
const mapStateToProps = state => ({
	user_infor: state.user_infor,
});

export default connect(mapStateToProps,action)(StatisticScreen)


