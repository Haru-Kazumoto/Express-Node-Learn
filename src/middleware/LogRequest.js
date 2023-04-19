import chalk from 'chalk';

const logRequest = (req,res, next) => {
    console.log(
        chalk.yellow(`[Requesting] ${chalk.blue(req.method)} - ${chalk.green(req.url)}`)
    );
    next();
}

const errorLog = (err,req,res,next) => {
    console.error(err.stack);
    res.status(500).json({
        message: "Internal server error"
    });
}

export default {
    logRequest,
    errorLog
};

