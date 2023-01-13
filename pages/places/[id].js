import { useRouter } from "next/router";
import useSWR from "swr";
import Image from "next/image";
import Link from "next/link";

export default function DetailPage() {
  const router = useRouter();
  const { id } = router.query;
  const { data } = useSWR(id ? `/api/places/${id}` : null, { body: id });
  console.log("data", data);
  if (!data) {
    return <h1>Loading...</h1>;
  }
  console.log(data);
  function handleDelete() {
    try {
      const response = fetch(`/api/places/${id}`, { method: "DELETE" });
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <>
      <Link href="/">Back</Link>
      <h1>{data.name}</h1>
      <Image src={data.image} alt={data.name} width="600" height="600" />
      <p>{data.location}</p>
      <p>{data.desctiption}</p>
      <Link href={data.mapURL}>Go to Google Maps!</Link>
      <button
        onClick={() => {
          handleDelete();
          router.push("/");
        }}
      >
        DELETE
      </button>
    </>
  );
}
