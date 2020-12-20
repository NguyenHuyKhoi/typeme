//import from library 
import React, {Component} from 'react';
import {TEXT_SIZES, WORD_STATE} from '../utils/constants';
import {BLACK, BLUE_1, GRAY_1, GRAY_2, GRAY_3, GRAY_5, GREEN_1, RED_1, WHITE} from '../utils/palette';
import {collapseText} from '../utils/helper';

class Item extends Component {
  render() {
    const item = this.props.item;
    const state = this.props.state;
    const is_picked = this.props.is_picked;
    console.log('state_item:', state);
    return (
      <div
        // onClick={this.props.onClick}
        style={{
          ...styles.item_container,
          backgroundColor:
            state == WORD_STATE.IS_TYPING ?
              BLUE_1
              :
              state === WORD_STATE.NOT_TYPED ?
                GRAY_3
                :
                state === WORD_STATE.WRONG ?
                  RED_1
                  :
                  GREEN_1
        }}>
        <text style={{
          ...styles.item_name,
          color: WHITE
        }}>
          {item}
        </text>
      </div>
    );
  }
}

export default class PracticeLessonContentComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  extractItems = () => {
    const content = this.props.lesson.content + '';
    console.log('content:', content, content.split(' '));
    return content.split(' ');
  };


  render() {
    const lesson = this.props.lesson;
    const title = lesson.title;
    const index = lesson.index !== undefined ? lesson.index : 1;
    const items = this.extractItems();
    const word_state = this.props.word_state;

    console.log('state_item:', word_state);
    return (


      <div style={styles.container}>

        <div style={{width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
          <text style={styles.label}>
            {'Bài ' + (index + 1) + ' : ' + collapseText(title, 50)}
          </text>


          <text
            onMouseOver={e=>e.target.style.cursor = "pointer"}
            onClick={this.props.onClick}
            style={{...styles.label, fontStyle: 'italic', color: BLUE_1, marginRight: 20}}>
            {'Chọn bài'}
          </text>

        </div>


        <div style={styles.body}>
          {
            items.map((item, index) => {
                //     console.log('Item in SkillPicker :',item)
                const is_picked = false;
                return (
                  <Item
                    state={word_state[index]}
                    item={item}
                    key={'' + index}
                    is_picked={is_picked}
                  />
                );
              }
            )
          }
        </div>

      </div>

    );
  }
}

const styles = {
  container: {
    display: 'flex',
    width: '100%',
    flexDirection: 'column'
  },
  label: {
    fontSize: TEXT_SIZES.NORMAL,
    color: BLACK
  },
  body: {
    marginTop: 5,
    width: '100%',
    alignSelf: 'baseline',
    display: 'flex',
    lexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start'
  },
  item_container: {
    display: 'flex',
    marginRight: 10,
    marginTop: 7,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3,
    padding: 7
  },
  item_name: {
    fontSize: TEXT_SIZES.SMALL
  }
};
