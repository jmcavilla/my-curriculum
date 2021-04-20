
export const SET_I18N = "SET_I18N"

export const setLang = (lang) => ({
    type: SET_I18N,
    payload: lang
})

const initialState = {
    lang: navigator.language.includes('es') ? 'ES' : 'EN' 
}

export const i18nReducer = ( state = initialState, action ) => {
    
    switch (action.type) {
        case SET_I18N:
            return {
                ...state,
                lang: action.payload
            }
        default:
            return state;
    }

}