const express =  require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

const routes = require('./routes');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));

app.use('/weapon', routes.weapon);
app.use('/warriors', routes.warriors);

app.listen(3000, () => {
    console.log("i'm Listening! ! !")
})