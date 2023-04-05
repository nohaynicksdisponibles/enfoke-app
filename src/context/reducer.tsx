type UserAction =
    | { type: 'changeTag', payload: any };

export const userReducer = (state: any, action: UserAction): any => {

    switch (action.type) {
        case 'changeTag':
            return {
                tag: action.payload
            }
        default:
            return state;
    }

}