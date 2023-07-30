const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, "../data/athleteData.json");
const rawData = fs.readFileSync(filePath);
const athleteData = JSON.parse(rawData);

module.exports = athleteData;
