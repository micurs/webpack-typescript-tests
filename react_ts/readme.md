# Use React with Typsecript and bundle with WebPack

Make sure you have Webpack installed globally:

    npm i webpack -g

Get the dependencies

    npm install
    tsd reinstall -o

Use Webpack to create the bundle javascript in the dist directory

    webpack

Use http-server to serve the index.html page:

    http-server -p 3000

Browse the example on `http://localhost:3000`


