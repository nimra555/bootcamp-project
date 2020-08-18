

const TransactionReducer = ((state, action) => {
    switch (action.type) {
        case 'ADD_Transaction': {
            return {
                ...state,
                transaction : [action.payload, ...state.transaction]
            }
            // return [action.payload , ...state];
        }
        case 'Delete': {
            return{
                ...state,
                transaction: state.transaction.filter(transac => transac.id !==
                    action.payload)  
            }  
        }
        default:
            return state ; 
    }
})

export default TransactionReducer;