import { USER_ACTIONS } from "../constant/index.constant";
import sample_db from '../../sample_db/sample_db.json'
import { CONTENT_MODE, PRACTICE_MODE } from "../../utils/constants";

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
    practice_modals:[false,false,false,false,false]
};

let userReducer=(state=initial_user_info,action)=>{
    let payload=action.payload
    let mode
    let li
    let modals
    let cmode
    switch (action.type){

        case USER_ACTIONS.CHOOSE_PRACTICE_MODE:
            mode=payload.practice_mode
           return {
               ...state,
               lesson_index:0,
               practice_mode:mode,
               lesson_data:practice_lessons[mode][0],
               rule_data:mode===PRACTICE_MODE.RHYME?practice_rhyme_rules[0]:null,
           };


        case USER_ACTIONS.CHOOSE_LESSON:
            mode=state.practice_mode
            li=payload.lesson_index

            return {
                ...state,
                lesson_index:li,
                lesson_data:practice_lessons[mode][li],
                rule_data:mode===PRACTICE_MODE.RHYME?practice_rhyme_rules[li]:null,
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
        default :
            return state;
    }
}

export default userReducer;