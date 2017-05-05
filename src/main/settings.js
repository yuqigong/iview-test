// settings 配置文件

// import axios from 'axios';

const env = {
    local: 'http://localhost:8080',
    test: 'example.com',
    uat: 'example.com',
    prd: 'example.com'
}

const baseURL = process.env.NODE_ENV === 'production' ? env.prd : env.local;

const APi = {};

const Url = {}

export {
    APi,
    Url
};
