import {SKIP_INTRO} from "./actions";

export default function(state = {}, action) {
    let newState = Object.assign({},state);

    switch(action.type){
        case SKIP_INTRO:
            newState.showIntro = false;
            return newState;
    }
    return state;
}