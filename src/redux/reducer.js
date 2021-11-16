import {FAVORITOS, NO_FAVORITOS} from "./actions";

function reducer(state, action) {
    switch(action.type){
        case FAVORITOS:
            let tempHpInfo = state.hpInfo.map(hpInfoItem => {
                if(hpInfoItem.name === action.payload.name){
                    if(state.amount < 5){
                        hpInfoItem = { ...hpInfoItem, favorite: !hpInfoItem.favorite, amount: state.amount++}
                    }else{
                        alert('Solo puedes agregar hasta 5 personajes favoritos')
                    }
                }
                return hpInfoItem
            })
            return {
                ...state,
                hpInfo: tempHpInfo
            }
        case NO_FAVORITOS:
            let temporaryHpInfo = state.hpInfo.map(hpInfoItem => {
                if(hpInfoItem.name === action.payload.name){
                    hpInfoItem = { ...hpInfoItem, favorite: !hpInfoItem.favorite, amount: state.amount--}
                }
                return hpInfoItem
            })
            return {
                ...state,
                hpInfo: temporaryHpInfo
            }
        default:
            return state
    }
}

export default reducer;