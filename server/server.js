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

app.listen(PORT, () => console.log(`server started on port ${PORT}`));