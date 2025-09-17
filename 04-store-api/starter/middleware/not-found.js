const notFound = (req, res, next) => {
    res.status(404).send("Route does'nt exist!");
}

module.exports = notFound;