export function startServer(port, server) {
    server.listen(port, (params) => {
        // console.log(params);
        console.log('Server is running on port ' + port)
    })
}

//Now, we need to import server from server.js and startServer from functions.js into index.j