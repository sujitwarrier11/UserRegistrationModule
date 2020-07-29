const env = {
    prod:{
        connectionString: ''
    },
    dev:{
        connectionString: ''
    }
}

const currEnv = process.env.NODE_ENV || 'dev';

module.exports = env[currEnv];