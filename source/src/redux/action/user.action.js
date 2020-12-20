import { USER_ACTIONS } from "../constant/index.constant"

export const chooseLessonIndex=(payload)=>{
    console.log('choose_lesson:',payload);
    return {
        type:USER_ACTIONS.CHOOSE_LESSON,
        payload:payload
    }
}

export const chooseHeaderItem=(payload)=>{
    console.log('choose_lesson:',payload);
    return {
        type:USER_ACTIONS.CHOOSE_HEADER_ITEM,
        payload:payload
    }
}

export const chooseBackgroundColor=(payload)=>{
    console.log('background:',payload);
    return {
        type:USER_ACTIONS.CHOOSE_BACKGROUND_COLOR,
        payload:payload
    }
}

export const chooseKeyboardColor=(payload)=>{
    console.log('background:',payload);
    return {
        type:USER_ACTIONS.CHOOSE_KEYBOARD_COLOR,
        payload:payload
    }
}


export const chooseStenoColor=(payload)=>{
    console.log('steno:',payload);
    return {
        type:USER_ACTIONS.CHOOSE_STENO_COLOR,
        payload:payload
    }
}


export const choosePracticeMode=(payload)=>{
    console.log('action choose_practice_mode:',payload);
    return {
        type:USER_ACTIONS.CHOOSE_PRACTICE_MODE,
        payload:payload
    }
}

export const chooseContentMode=(payload)=>{
    console.log('action choose_content_mode:',payload);
    return {
        type:USER_ACTIONS.CHOOSE_CONTENT_MODE,
        payload:payload
    }
}

export const openPracticeModal=(payload)=>{
    console.log('action open_practice_mode:',payload);
    return {
        type:USER_ACTIONS.OPEN_PRACTICE_MODAL,
        payload:payload
    }
}

export const closePracticeModal=(payload)=>{
    console.log('action open_practice_mode:',payload);
    return {
        type:USER_ACTIONS.CLOSE_PRACTICE_MODAL,
        payload:payload
    }
}

export const typeCorrect=(payload)=>{
    console.log('action typeCorrect :',payload);
    return {
        type:USER_ACTIONS.TYPE_CORRECT,
        payload:payload
    }
}


export const typeWrong=(payload)=>{
    console.log('action typeFail:',payload);
    return {
        type:USER_ACTIONS.TYPE_WRONG,
        payload:payload
    }
}

export const resetedTimer=(payload)=>{
    console.log('action typeFail:',payload);
    return {
        type:USER_ACTIONS.RESETED_TIMER,
        payload:payload
    }
}



