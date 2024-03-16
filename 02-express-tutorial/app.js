console.log('Express Tutorial')
const express = require('express');
const { products } = require("./data");

const app = express();

//setup static and middleware
app.use(express.static('./public'));

app.get('/api/v1/test', (req, res) => {
    res.json({ message: "It worked!" });
})
app.get('/api/v1/products', (req, res) => {
    res.json(products);
})

app.get('/api/v1/products/query', (req, res) => {
    const { search, limit, maxPrice } = req.query
    let sortedProducts = [...products]

    if (maxPrice) {
        sortedProducts = sortedProducts.filter((product) => {
            return product.price <= Number(maxPrice);
        });
    }

    if (search) {
        sortedProducts = sortedProducts.filter((product) => {
            return product.name.startsWith(search)
        })
    }
    if (limit) {
        sortedProducts = sortedProducts.slice(0, Number(limit))
    }
    if (sortedProducts.length < 1) {
        return res.status(200).json({ success: true, data: [] })
    }
    res.status(200).json(sortedProducts);

})

app.get('/api/v1/products/:productID', (req, res) => {
    const idToFind = parseInt(req.params.productID);
    const singleProduct = products.find((product) => product.id === idToFind);
    if (!singleProduct) {
        return res.status(404).send("That product was not found.")
    }
    return res.json(singleProduct);

})




app.all('*', (req, res) => {
    res.status(404).send('Resource not found')
})


app.listen(3000, () => {
    console.log("Server is listening on port 3000");
})
