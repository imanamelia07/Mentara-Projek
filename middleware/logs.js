const logRequest = (req, res, next) => {
    console.log('happen req to: ', req.path);
    next();
}

module.exports = logRequest;