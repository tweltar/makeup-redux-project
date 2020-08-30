const brands = ( brands = {}, action ) => {
    switch(action.type) {
        case 'GET_BRANDS':
            let _brands = {};
            action.payload.brands.map(brand => {
                _brands = {
                    ..._brands,
                    [brand.id]: brand
                }
            });
            return {
                ...brands,
                ..._brands
            };
        default:
            return brands;
    }
}

export default brands;