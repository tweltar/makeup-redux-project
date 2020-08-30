const isLoading = ( state = true, action ) => {
    switch(action.type) {
        case 'LOADING':
            return true;
        default:
            return false;
    };
};

export default isLoading;