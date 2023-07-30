const mongoose = require('mongoose');

const athleteSchema = new mongoose.Schema({
    discipline_title: { type: String, required: true },
    slug_game: { type: String, required: true },
    event_title: { type: String, required: true },
    event_gender: { type: String, required: true },
    medal_type: { type: String, required: true },
    participant_type: { type: String, required: true },
    athlete_full_name: { type: String, required: true },
    country_name: { type: String, required: true },
    country_code: { type: String, required: true },
    country_3_letter_code: { type: String, required: true },
    games_participations: { type: Number, required: true },
    first_game: { type: String, required: true },
    athlete_year_birth: { type: Number, required: true },
    athlete_medals: { type: String, required: true },
    bio: { type: String, default: null }, // Assuming bio can be a String or null
    Age: { type: Number, required: true }, // Assuming "Age" is a number
  });

  const Athlete = mongoose.model('Athlete', athleteSchema);

module.exports = Athlete;