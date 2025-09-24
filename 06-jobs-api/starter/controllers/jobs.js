const getAll = (req, res) => {
    res.status(200).json({msg: "all jobs"});
}

const getJob = (req, res) => {
    res.status(200).json({msg: "single job"});
}

const createJob = (req, res) => {
    res.status(200).json({msg: "created job"});
}

const updateJob = (req, res) => {
    res.status(200).json({msg: "updated job"});
}

const deleteJob = (req, res) => {
    res.status(200).json({msg: "deleted job"});
}

module.exports = {getAll,
getJob,
createJob,
updateJob,
deleteJob,}