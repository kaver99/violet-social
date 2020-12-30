const express = require('express');
const graphqlHTTP = require('express-graphql');
const cors = require('cors');
const schema = require('./schema/schema');

class App {
    constructor() {
        this.app = express();

        this.setGraphqlHttp();

        this.setMiddleware();
        
        this.setLocals();

        this.status404();

        this.errorHandler();
    }

    setGraphqlHttp() {
        // [GraphQL]
        this.app.use('/graphql', graphqlHTTP({
            schema,
            graphiql: true
        }));
    }

    setMiddleware() {
        // Allow Cross Site
        this.app.use(cors());
    }

    // [Global Variable setting(전역 변수)]
    setLocals() {
        this.app.use((req, res, next) => {
            this.app.locals.isLogin = true;
            this.app.locals.req_path = req.path; // req.path : express에서 현재 url정보
            next();
        });
    }

    // [404 Error Page]
    status404() {
        this.app.use((req, res, _) => {
            res.setHeader('Content-Type', 'application/json');
            res.status(400).json({ data: {status: 'error', errmsg: 'is Not Page.'} })
        });
    }

    // [error Handler]
    errorHandler() {
        this.app.use((err, req, res, _) => {
            console.log(err);
            res.setHeader('Content-Type', 'application/json');
            res.status(500).json({ data: {status: 'error', errmsg: err} });
        });
    }
}

module.exports = new App().app;

