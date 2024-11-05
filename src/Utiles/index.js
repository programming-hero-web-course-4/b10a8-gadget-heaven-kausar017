// get all product frome localStorag

import toast from "react-hot-toast";

const getAllProduct = () => {
    const all = localStorage.getItem('produsctData')
    if (all) {
        const allProduct = JSON.parse(all)
        console.log(allProduct);
        return allProduct
    } else {
        console.log([]);

        return []
    }

}
// add a product to tahe local storage


const addProduct = product => {
    // get all previuasly saved product data 

    const products = getAllProduct()
    const isExits = products.find(item => item.product_id == product.product_id)
    if (isExits) {
        return toast.error('Product Allrady Added')
    }
    products.push(product)
    localStorage.setItem('produsctData', JSON.stringify(products))
    toast.success('Successfully added!');
}



// reamove product to the loca lstorage
const removdProduct = (id) => {
    const products = getAllProduct()
    const remaind = products.filter(product => product.product_id != id);
    localStorage.setItem('produsctData', JSON.stringify(remaind))
    toast.success('Successfully Removed!');
}
// get all product frome localStorag

const getAddHard = () => {
    const all = localStorage.getItem('produsctData')
    if (all) {
        const allProduct = JSON.parse(all)
        console.log(allProduct);
        return allProduct
    } else {
        console.log([]);

        return []
    }

}
// add a product to tahe local storage


const addHard = product => {
    // get all previuasly saved product data 

    const products = getAddHard()
    const isExits = products.find(item => item.product_id == product.product_id)
    if (isExits) {
        return toast.error('Product Allrady Added')
    }
    products.push(product)
    localStorage.setItem('produsctData', JSON.stringify(products))
    toast.success('Successfully added!');
}



// reamove product to the loca lstorage
const removedHard = (id) => {
    const products = getAddHard()
    const remaind = products.filter(product => product.product_id != id);
    localStorage.setItem('produsctData', JSON.stringify(remaind))
    toast.success('Successfully Removed!');
}


export { addProduct, getAllProduct, removdProduct };