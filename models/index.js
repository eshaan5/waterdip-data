import mongoose from "mongoose";

const entrySchema = new mongoose.Schema({
  hotel: String,
  arrival_date_year: String,
  arrival_date_month: String,
  arrival_date_day_of_month: String,
  adults: String,
  children: String,
  babies: String,
  country: String,
});

const Entry = mongoose.model("Entry", entrySchema);

export default Entry;
