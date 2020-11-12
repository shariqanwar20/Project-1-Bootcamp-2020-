const transactionReducer = (state, action) => {
    //state was an array of objects; action.payload is an object
    //now we want payload to be added to that array/list so we can use the spread operator
    //it will merge all the objects and return a new thing that can be iterated
    //Since we passed an array and added to that array it will return an array
    //if it would have been a string or an object it would have returned respectively
    switch (action.type)
    {
        case "ADD_TRANSACTION" :
            return [action.payload, ...state];
        case "REMOVE_TRANSACTION" :
        {
            const newList = []
            state.map((item) => {
                if (item.id !== action.id)
                {
                    newList.push(item)
                }
                return newList;
            })
            break;
            //return newList;
        }
            
        default :
            return state;
    }
}

export default transactionReducer;
