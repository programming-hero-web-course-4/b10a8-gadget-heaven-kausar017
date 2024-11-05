// index.js
import toast from "react-hot-toast";

const getAddHard = () => {
    const all = localStorage.getItem('hardData');
    if (all) {
        const allProduct = JSON.parse(all);
        console.log(allProduct);
        return allProduct;
    } else {
        console.log([]);
        return [];
    }
};

const addHard = (product) => {
    const products = getAddHard();
    const isExits = products.find(item => item.product_id == product.product_id);
    if (isExits) {
        return toast.error('Product Already Added');
    }
    products.push(product);
    localStorage.setItem('hardData', JSON.stringify(products));
    toast.success('Successfully added!');
};

const removedHard = (id) => {
    const products = getAddHard();
    const remaind = products.filter(product => product.product_id != id);
    localStorage.setItem('hardData', JSON.stringify(remaind));
    toast.success('Successfully Removed!');
};

export { getAddHard, addHard, removedHard };
