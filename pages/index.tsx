import axios from "axios";
import { GetStaticProps } from "next";
import { useState } from "react";
import { Card } from "../components/countryCard/countryCard";
import { Country } from "../interfaces/data.interface";
import { withLayout } from "../layout/layout";


function Home({data}: DataProps) {

  return (
    <>
      
    </>
  );
};

export default withLayout(Home);

export const getStaticProps: GetStaticProps = async () => {
  const { data: data } = await axios.get<Country[]>("https://restcountries.com/v2/all");
  return{
    props: {
      data
    }
  };
};

interface DataProps extends Record<string, unknown> {
  data: Country[];
};