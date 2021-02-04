const express = require("express");

module.exports = app => {
    app.use('/uploads', express.static(process.cwd() + '/uploads'))
};