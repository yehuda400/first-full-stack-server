const { newData, data } = require("./dataForProject");
const getData = () => {
    // use a library to get data from the db
    try {
        if (!data) throw new Error("No Data Found!");
        return data;
    } catch (error) {
        return error;
    }
};
module.exports = { getData };
