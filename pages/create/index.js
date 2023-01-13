import Link from "next/link";
import { useRouter } from "next/router";
import useSWR from "swr";

export default function CreatePage() {
  const router = useRouter();

  function handleSubmit(event) {
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    try {
      const response = fetch("api/places", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-type": "application/json" },
      });
      if (!response.ok) {
        console.log("test", response);

        // event.target.reset();
        router.push("/");
      } else {
        console.error(`Error:${response.status}`);
      }
    } catch (error) {
      console.log("test   ");
      console.error(error);
    }
    event.target.reset();
  }
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();

        handleSubmit(event);
      }}
    >
      <Link href="/">Back</Link>
      <label htmlFor="name-input">
        Name: <input required type="text" name="name" id="name-input"></input>
      </label>
      <label htmlFor="location-input">
        Location:
        <input required type="text" name="location" id="location-input"></input>
      </label>
      <label htmlFor="description-input">
        Description:
        <input
          required
          type="text"
          name="description"
          id="description-input"
        ></input>
      </label>
      <label required htmlFor="mapURL-input">
        Map Url:
        <input
          defaultValue={
            "https://www.google.com/maps/place/Elbphilharmonie+Hamburg/@53.543085,9.9859608,15.47z/data=!4m5!3m4!1s0x47b18f066770c44f:0xb2e4ab2a68984286!8m2!3d53.5413297!4d9.9841308"
          }
          type="text"
          name="mapURL"
          id="mapURL-input"
        ></input>
      </label>
      <label required htmlFor="image-input">
        image:
        <input
          defaultValue={
            "https://images.unsplash.com/photo-1553547274-0df401ae03c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGF1c3NlbmFsc3RlciUyMGhhbWJ1cmd8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60"
          }
          type="text"
          name="image"
          id="image-input"
        ></input>
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}
