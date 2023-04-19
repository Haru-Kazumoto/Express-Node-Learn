import chalk from "chalk";

export default function startServer(app, port){
    app.listen(port, () => {
        console.log(chalk.green(`[server] Express server listening on port ${chalk.yellow(`http://localhost:8890`)}`));
    });
};