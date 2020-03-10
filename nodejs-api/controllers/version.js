const { SPTRANS_VERSION } = require('../services/utils/constants');

module.exports = {
    getSpTransVersion(_, res) {
        res.json({
            "sptransVersion": SPTRANS_VERSION
        });
    }
};