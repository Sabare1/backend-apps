const notFound = (req, res, next) => {
    res.status(404).json({msg:"Cannot find what you're looking for!"});
}

module.exports = notFound;