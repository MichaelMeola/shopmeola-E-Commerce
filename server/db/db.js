import { Sequelize } from "sequelize";

async function connectToDB(dbURI) {
    console.log(`Connection to DB: ${dbURI}`)

    const sequelize = new Sequelize(dbURI, {
        logging: false, //THIS SETS WHERE THE LOGS GO, SET TO FALSE TO DISABLE
        define: {
            timestamps: false, // THIS SETS THE AUTOMATIC GENERATION OF CREATED_AT AND UPDATED_AT COLUMNS
            underscored: true // THIS WILL TELL IT TO USE UNDERSCORES RATHER THAN CAMELCASE FOR COLUMN NAMES
        }
    })

    try {
        await sequelize.authenticate() //MAKE SURE SEQUELIZE CAN CONNECT SECURELY TO DATABASE
        console.log(`Connected successfully to DB!`)
    } catch (error) {
        console.log(`Unable to connect to DB`, error)
    }

    return sequelize
}

export default connectToDB