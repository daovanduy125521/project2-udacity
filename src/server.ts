import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import users_routers from './handlers/user';
import { UsersStore } from './models/user';
import product_routers from './handlers/product';
import order_routers from './handlers/order';
import orderProduct_routers from './handlers/order_product';

const app: express.Application = express();
const address: string = "0.0.0.0:3000";
const port = 3000;
const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200
}


app.use(cors(corsOptions));
app.use(bodyParser.json());

app.get('/', cors(corsOptions), function (req, res) {
    res.send('Hello World!');
});


users_routers(app);
product_routers(app);
order_routers(app);
orderProduct_routers(app);

app.listen(port, function () {
    console.log(`starting app on: ${address}`);
});

export default app;