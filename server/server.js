const express = require('express');
const cors = require('cors');

const PORT = process.env.PORT || 8080;
const corsOptions = {
    origin: "http://localhost:8081"
};

const app = express();

app.use(cors(corsOptions));
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.json({message: "Welcome!"})
})

const db = require('./models');

// console.log(db['Access'].findAll());


try {
    db.sequelize.authenticate();
    console.log('Connection has been established successfully.');
} catch (err) {
    console.error(err);
}

require('./routes/access.routes')(app);
require('./routes/user.routes')(app);
require('./routes/is.routes')(app);
require('./routes/resource.routes')(app);
require('./routes/role.routes')(app);
require('./routes/position.routes')(app);
require('./routes/subdivision.routes')(app);
require('./routes/department.routes')(app);

app.listen(PORT, () => console.log(`server started on port ${PORT}`));