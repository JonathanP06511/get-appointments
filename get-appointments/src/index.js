const express = require ('express');
const morgan = require ('morgan');
const app = express();
var cors = require('cors');
const setupSwagger = require('./swagger/swagger');
app.set('port', 5012);

app.use(cors());
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

setupSwagger(app);
app.use('/apidataappointments', require('./AppointmentInformation/apidataapointment'));

app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});