
const getHomePage = (req, res) => {
    // process data
    // call models

    res.send("Van Anh ne");
}

const getAnhVA = (req, res) => {
    // process data
    // call models

    res.render('sample')
}

module.exports = {
    getHomePage,
    getAnhVA
}