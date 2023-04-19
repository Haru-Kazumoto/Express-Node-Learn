import express from 'express';
import startServer from '../StartServer.js';
import userRoute from './routes/UserRoute.js';
import middlewareLog from './middleware/LogRequest.js';

const app = express();
const port = 8890;

/**
 * Middleware
 */
app.use(middlewareLog.logRequest);
app.use(middlewareLog.errorLog);
app.use(express.json()); //Enable the app to request json in request body

//Main code
app.use('/users', userRoute);

app.use("/", (req, res) => {
    db.execute('SELECT * FROM users', (err, rows) => {
        if(err){
            res.json({
                status: 2002,
                message: "Connection refused!"
            });
        }

        res.json({
            message: "Connection success!",
            data: rows
        })
    })
})

//Starting server
startServer(app, port);