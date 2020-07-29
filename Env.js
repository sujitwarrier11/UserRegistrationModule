const env = {
    prod:{
        connectionString: ''
    },
    dev:{
        connectionString: "mongodb+srv://sujitwarrier:<PWD>@cluster0.esuaw.mongodb.net/<DB>?retryWrites=true&w=majority"
    }
}

const currEnv = process.env.NODE_ENV || 'dev';

module.exports = env[currEnv];