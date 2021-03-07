const initialState = {
    product: { reviews: [] },
    loading: true,
    error: '',
};

export const productDetialReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'PRODUCT_DETIALS_REQUEST':
            return {
                loading: true,
                ...state,
            };

        case 'PRODUCT_DETIALS_SUCCESS':
            return {
                loading: false,
                product: action.payload,
            };

        case 'PRODUCT_DETIALS_FAIL':
            return {
                loading: false,
                error: action.payload,
            };

        default:
            return { ...state };
    }
};
