import Image from "next/image";
import Link from "next/link";
export default function Card({ place }) {
  return (
    <article>
      <Link href={`/places/${place._id}`}>
        <p>{place.name}</p>
      </Link>

      <Image src={place.image} alt={place.name} width="300" height="200" />
      <p>Location: {place.location}</p>
    </article>
  );
}
