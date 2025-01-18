const jwt = require("jsonwebtoken");

//decode,verigy and genrate

const value = {
  name : "harkirat",
  accnumber : "123123123"
}

//const token =jwt.sign(value,"secret");
//console.log(token);

const verifiedValue = jwt.verify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiaGFya2lyYXQiLCJhY2NudW1iZXIiOiIxMjMxMjMxMjMiLCJpYXQiOjE3MzcxMjgyMzN9.6SOUwcgoag82bQLZGCrByKIn3eV4vxoNxDCecY853Ak","secret");

console.log(verifiedValue);