export const updateProduct = (products)=>({
    type:'UPDATE_PRODUCT',
    id :'updateproduct1',
    products
})
export const addproduct = (products)=>({
    type:'ADD_PRODUCT',
    id :'addproduct1',
    products
})
export const updateProfile = (user)=>({
    type:'updateProfile',
    updateProfile: true,
    user:[user]
})
export const addProfile = (users)=>({
    type:'addProfile',
    addProfile: true,
    users
})