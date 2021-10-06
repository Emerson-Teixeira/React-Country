import React, { useCallback, useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import Card from "./Card.js";
import { Container } from "./styles/Container.styled";
import {
  CustomInput, CustomSelect, FlexRowContainer,
  FlexRowContainerSpaceBetween,
  InputBox
} from "./styles/Home.styled.js";
export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);
  const [region, setRegion] = useState("");
  const [countryName, setCountryName] = useState("");
  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (region) {
      getDataByRegion(region);
      setCountryName("");
    }
  }, [region]);

  useEffect(() => {
    if (data) {
      console.log(data);
      setIsLoading(false);
    }
  }, [data]);

  async function getData() {
    try {
      let response = await fetch(
        "https://restcountries.com/v3.1/all?fields=name,population,region,capital,flags,population"
      );
      setData(await response.json());
    } catch (error) {
      console.log(error);
    }
  }

  async function getDataByName(name) {
    try {
      let response = await fetch(
        `https://restcountries.com/v3.1/name/${name}?fields=name,population,region,capital,flags,populatiom`
      );
      setData(await response.json());
    } catch (error) {
      console.log(error);
    }
  }

  async function getDataByRegion(name) {
    try {
      let response = await fetch(
        `https://restcountries.com/v3.1/region/${name}?fields=name,population,region,capital,flags,populatiom`
      );
      setData(await response.json());
    } catch (error) {
      console.log(error);
    }
  }

  function debounce(delayFunction) {
    let timer;
    return function (...args) {
      const context = this;
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        timer = null;
        delayFunction.apply(context, args);
      }, 500);
    };
  }

  const handleCityInput = (cityName) => {
    cityName ? getDataByName(cityName) : getData();
    region("");
  };
  const handleInputDebounce = useCallback(debounce(handleCityInput), []);
  return (
    <Container>
      {!isLoading ? (
        <>
          <FlexRowContainerSpaceBetween>
            <InputBox>
              <BsSearch size={20} />
              <CustomInput
                value={countryName}
                type="text"
                placeholder="Search for a country..."
                onChange={(e) => {
                  setCountryName(e.target.value);
                  handleInputDebounce(e.target.value);
                }}
              />
            </InputBox>
            <CustomSelect
              value={region}
              onChange={(e) => setRegion(e.target.value)}
            >
              <option value="">Filter by Region</option>
              <option value="africa">Africa</option>
              <option value="america">America</option>
              <option value="asia">Asia</option>
              <option value="europe">Europe</option>
              <option value="oceania">Oceania</option>
            </CustomSelect>
          </FlexRowContainerSpaceBetween>
          <FlexRowContainer>
            {data?.map((element, index) => {
              return (
                <Card
                  key={index}
                  name={element.name}
                  flag={element?.flags?.png}
                  region={element.region}
                  capital={element.capital}
                  population={element.population}
                />
              );
            })}
          </FlexRowContainer>
        </>
      ) : (
        ""
      )}
    </Container>
  );
}
