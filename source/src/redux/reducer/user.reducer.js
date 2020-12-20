import { USER_ACTIONS } from "../constant/index.constant";
import sample_db from '../../sample_db/sample_db.json'
import { CONTENT_MODE, PRACTICE_MODE,WORD_STATE } from "../../utils/constants";
import { GRAY_2, GRAY_6, INDIGO_0 } from "../../utils/palette";

const practice_lessons=sample_db.practice_lessons
const practice_processes=sample_db.practice_processes
const practice_rhyme_rules=sample_db.practice_rhyme_rules

const initial_user_info={
    lesson_data:practice_lessons[0][0],
    rule_data:null,
    process_data:practice_processes[0],
    lesson_index:0,
    practice_mode:0,
    content_mode:CONTENT_MODE.SHOW_LESSON,
    practice_modals:[false,false,false,false,false],
    word_state:practice_lessons[0][0].content.split(" ").map(item=>WORD_STATE.NOT_TYPED),
    current_word_index:0,
    correct_words:0,
    reset_timer:true,
    choosed_header_item:0,
    background_color:GRAY_6,
    steno_color:INDIGO_0,
    keyboard_color:GRAY_2
};

let userReducer=(state=initial_user_info,action)=>{
    let payload=action.payload
    let mode
    let li
    let modals
    let cmode
    let wstate
    let cwi
    switch (action.type){

        case USER_ACTIONS.CHOOSE_PRACTICE_MODE:
            mode=payload.practice_mode
           return {
               ...state,
               lesson_index:0,
               practice_mode:mode,
               lesson_data:{...practice_lessons[mode][0],index:0},
               content_mode:CONTENT_MODE.SHOW_LESSON,
               rule_data:mode===PRACTICE_MODE.RHYME?practice_rhyme_rules[0]:null,
               word_state:practice_lessons[mode][0].content.split(" ").map(item=>WORD_STATE.NOT_TYPED),
               current_word_index:0,
               correct_words:0,
               reset_timer:true
           };


        case USER_ACTIONS.CHOOSE_LESSON:
            mode=state.practice_mode
            li=payload.lesson_index

            return {
                ...state,
                lesson_index:li,
                lesson_data:{...practice_lessons[mode][li],index:li},
                rule_data:mode===PRACTICE_MODE.RHYME?practice_rhyme_rules[li]:null,
                word_state:practice_lessons[mode][li].content.split(" ").map(item=>WORD_STATE.NOT_TYPED),
                current_word_index:0,
                correct_words:0,
                reset_timer:true
            };

        case USER_ACTIONS.CHOOSE_CONTENT_MODE:
            cmode=payload.content_mode
                return {
                       ...state,
                       content_mode:cmode
                   };

        case USER_ACTIONS.OPEN_PRACTICE_MODAL:
            console.log('Hello')
            mode=state.practice_mode
            modals=state.practice_modals
            modals[mode]=true
            return {
                ...state,
                practice_modals:modals
            };

        case USER_ACTIONS.CLOSE_PRACTICE_MODAL:
            mode=state.practice_mode
            modals=state.practice_modals
            modals[mode]=false
            return {
                ...state,
                practice_modals:modals
            };

        case USER_ACTIONS.TYPE_CORRECT:
            wstate=state.word_state;
            cwi=state.current_word_index;
            wstate[cwi]=WORD_STATE.CORRECT;
            let next_cwi=cwi<wstate.length-1?cwi+1:cwi
            wstate[next_cwi]=WORD_STATE.IS_TYPING
            return {
                ...state,
                word_state:wstate,
                current_word_index:cwi<wstate.length-1?cwi+1:cwi,
                correct_words:state.correct_words+1
            }
        case USER_ACTIONS.TYPE_WRONG:
            wstate=state.word_state;
            cwi=state.current_word_index
            wstate[cwi]=WORD_STATE.WRONG;
            let next_cwi2=cwi<wstate.length-1?cwi+1:cwi
            wstate[next_cwi2]=WORD_STATE.IS_TYPING
            return {
                ...state,
                word_state:wstate,
                current_word_index:cwi<wstate.length-1?cwi+1:cwi
            }

        case USER_ACTIONS.RESETED_TIMER:
            return {
                ...state,
                reset_timer:false
            }
        case USER_ACTIONS.CHOOSE_HEADER_ITEM:
            let index=payload.index
            return {
                ...state,
                choosed_header_item:index
            }

        case USER_ACTIONS.CHOOSE_BACKGROUND_COLOR:
            let color=payload.color
            return {
                ...state,
                background_color:color
            }
        case USER_ACTIONS.CHOOSE_STENO_COLOR:
            let color2=payload.color
            return {
                ...state,
                steno_color:color2
            }

        case USER_ACTIONS.CHOOSE_KEYBOARD_COLOR:
            let color3=payload.color
            return {
                ...state,
                keyboard_color:color3
            }

        

        default :
            return state;
    }
}

export default userReducer;