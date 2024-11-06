
// index.js
import toast from "react-hot-toast";

const getAllProduct = () => {
    const all = localStorage.getItem('produsctsData');
    if (all) {
        const allProduct = JSON.parse(all);
        return allProduct;
    } else {
        console.log([]);
        return [];
    }
};

const addProduct = (product) => {
    
    const products = getAllProduct();
    const isExits = products.find(item => item.product_id == product.product_id);
    if (isExits) {
        return toast.error('Product Already Added');
    }
    products.push(product);
    localStorage.setItem('produsctsData', JSON.stringify(products));
    toast.success('Successfully added!');
};

const removdProduct = (id) => {
    const products = getAllProduct();
    const remaind = products.filter(product => product.product_id != id);
    localStorage.setItem('produsctsData', JSON.stringify(remaind));
    toast.success('Successfully Removed!');
};

export { getAllProduct, addProduct, removdProduct };
