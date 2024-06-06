import express from 'express'

const router = express.Router();
const products = [
    {
        id: 1,
        name: "Product 1",
        price: 10.99,
        description: "This is product 1",
    },
    {
        id: 2,
        name: "Product 2",
        price: 19.99,
        description: "This is product 2",
    },
    {
        id: 3,
        name: "Product 3",
        price: 7.99,
        description: "This is product 3",
    },
];


router.get('/', (req, res) => {
    res.json(products);
});


router.get('/:id', (req, res) => {
    const product = products.find(p => p.id === parseInt(req.params.id));
    if (product) {
        res.json(product);
    } else {
        res.status(404).send( 'Product not found');
    }
});

export default router;
