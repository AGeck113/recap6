import dbConnect from "@/db/connect";
import Place from "@/db/models/Place";
import { useRouter } from "next/router";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  if (request.method === "GET") {
    try {
      const place = await Place.findById(id);
      return response.status(200).json(place);
    } catch (error) {
      console.error(error);
    }
  }
  if (request.method === "DELETE") {
    try {
      const place = await Place.findByIdAndDelete(id);
      if (!place) {
        return response.status(404).json({ status: "not found" });
      }
      return response(200).json(place);
    } catch (error) {
      console.error(error);
    }
  }
}
