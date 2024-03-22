console.log('Express Tutorial')
const express = require('express');
const { products } = require("./data");
let { people } = require("./data");

const app = express();

const logger = (req, res, next) => {
    const method = req.method;
    const url = req.url;
    const time = new Date().toLocaleTimeString();
    console.log(method, url, time);
    next();

}

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
const peopleRouter = require("./routes/people");
app.use("/api/v1/people", peopleRouter);

/*app.get('/api/v1/people', (req, res) => {
    res.status(200).json({ sucess: true, data: people })
})
app.post('/api/v1/people', (req, res) => {
    if (!req.body.name) {
        return res.status(400).json({ success: false, message: "Please provide a name" });
    }
    people.push({ id: people.length + 1, name: req.body.name });
    res.status(201).json({ success: true, name: req.body.name });

})
*/
app.use(logger);
app.use(express.static('./methods-public'));

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
