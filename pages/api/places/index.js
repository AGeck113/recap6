import dbConnect from "../../../db/connect.js";
import Place from "../../../db/models/Place.js";

export default async function handler(request, response) {
  await dbConnect();
  if (request.method === "GET") {
    const places = await Place.find();
    console.log("PLACES PLACES PLACES", places);
    return response.status(200).json(places);
  }
  if (request.method === "POST") {
    try {
      const placeData = request.body;
      const newPlace = new Place(placeData);
      await newPlace.save();
      console.log(newPlace);
      return response.status(201).json({ status: "place created" });
    } catch (error) {
      console.error(error);
      response.status(400).json({ error: error.message });
    }
  }
}
