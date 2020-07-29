const env = {
    prod:{
        connectionString: ''
    },
    dev:{
        connectionString: "mongodb+srv://sujitwarrier:HomeTest123@cluster0.esuaw.mongodb.net/HomeTest1?retryWrites=true&w=majority"
    }
}

const currEnv = process.env.NODE_ENV || 'dev';

module.exports = env[currEnv];