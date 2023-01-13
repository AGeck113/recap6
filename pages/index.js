import Head from "next/head";
import Image from "next/image";
import Card from "@/components/Card";
import styled from "styled-components";
import useSWR from "swr";
import Link from "next/link";

export default function Home() {
  const { data } = useSWR("/api/places");
  if (!data) {
    return <h1>Loading...</h1>;
  }
  return (
    <>
      <Link href="/create">Create!</Link>
      <ul>
        {data.map((place) => {
          console.log(place);
          return <Card place={place} key={place.id} />;
        })}
      </ul>
    </>
  );
}
