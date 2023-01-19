import 'reflect-metadata';
import app from './app';
import myDataSource from './app-data-source';

const main = async () => {
    // establish database connection
    await myDataSource
        .initialize()
        .then(() => {
            console.log('Data Source has been initialized!');
        })
        .catch((err) => {
            console.error('Error during Data Source initialization:', err);
        });

    // start express server
    app.listen(3000);
};

main();
