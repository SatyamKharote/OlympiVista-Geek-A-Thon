const mongoose = require('mongoose');

const athleteSchema = new mongoose.Schema(
  {
    Name: { type: Array}
  });

  const Athlete_data2 = mongoose.model('athlete_data2', athleteSchema);

module.exports = Athlete_data2;