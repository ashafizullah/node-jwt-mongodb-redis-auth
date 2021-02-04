const express = require("express");

exports.findOne = (req, res) => {
  const id = req.params.id;

  express.static('../uploads' + id);
};