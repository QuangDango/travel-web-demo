const cart = [];

const handleCart = (state = cart, action) => {
    const product = action.payload;
    switch (action.type) {
        case "ADDITEM":
            // Check item exist in cart
            const exist = state.find((x) => {
                return (x.id === product.id)
            })
            if (exist) {
                // Increase the quantity 
                console.log('state', state)
                return state.map((x) => {
                    return x.id === product.id ? { ...x, qty: x.qty + 1 } : x;
                }
                );
            }
            else {
                // Join item into cart
                const product = action.payload;
                return [
                    ...state,
                    {
                        ...product,
                        qty: 1,
                    }
                ]
            }
            break;
        case "DELITEM":
            const exist1 = state.find((x) => x.id === product.id)
            if (exist1.qty === 1) {
                // Remove item in cart 
                return state.filter((x) => x.id !== exist1.id);
            }
            else {
                // Decrease quantity
                return state.map((x) => {
                    return x.id === product.id ? { ...x, qty: x.qty - 1 } : x
                });
            }
            break;
        case "REMOVEITEM":
            const exist2 = state.find((x) => x.id === product.id)
            if (exist2) {
                // Remove item in cart 
                return state.filter((x) => x.id !== exist2.id);
            }
            break;
        default:
            return state;
            break;
    }
}

export default handleCart;