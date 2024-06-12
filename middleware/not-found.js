const notFound = (req, res) => res.status(404).send("Route dos not exist");

module.exports = notFound;
