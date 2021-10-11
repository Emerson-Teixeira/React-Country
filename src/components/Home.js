import React, { useCallback, useEffect, useState } from "react";
import { BsSearch, BsXCircle } from "react-icons/bs";
import Card from "./Card.js";
import ClipLoader from "react-spinners/ClipLoader";
import {
  CustomInput,
  CustomSelect,
  FlexRowContainer,
  FlexRowContainerSpaceBetween,
  FlexRowContainerLoading,
  InputBox,
  Container,
} from "./styles/Home.styled.js";
import { useTheme } from "styled-components";
export default function Home() {
  const theme = useTheme();
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
      setIsLoading(false);
    }
  }, [data]);

  async function getData() {
    setIsLoading(true);
    try {
      let response = await fetch(
        "https://restcountries.com/v3.1/all?fields=name,population,region,capital,flags,population,cca3"
      );
      setData(await response.json());
    } catch (error) {
      console.log(error);
    }
  }

  async function getDataByName(name) {
    setIsLoading(true);
    try {
      let response = await fetch(
        `https://restcountries.com/v3.1/name/${name}?fields=name,population,region,capital,flags,population,cca3`
      );
      setData(await response.json());
    } catch (error) {
      console.log(error);
    }
  }

  async function getDataByRegion(name) {
    setIsLoading(true);
    try {
      let response = await fetch(
        `https://restcountries.com/v3.1/region/${name}?fields=name,population,region,capital,flags,population,cca3`
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
    setRegion("");
  };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleInputDebounce = useCallback(debounce(handleCityInput), []);
  return (
    <Container>
      <FlexRowContainer>
        <FlexRowContainerSpaceBetween>
          <InputBox>
            <BsSearch size={20} />
            <CustomInput
              name="SearchCountry"
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
            aria-label="Region"
          >
            <option value="">Filter by Region</option>
            <option value="africa">Africa</option>
            <option value="america">America</option>
            <option value="asia">Asia</option>
            <option value="europe">Europe</option>
            <option value="oceania">Oceania</option>
          </CustomSelect>
        </FlexRowContainerSpaceBetween>
        {!isLoading ? (
          data.length > 0 ? (
            data.map((element, index) => {
              return (
                <Card
                  key={index}
                  name={element.name}
                  flag={element?.flags?.png}
                  region={element.region}
                  capital={element.capital}
                  population={element.population}
                  cca3={element.cca3}
                />
              );
            })
          ) : (
            <FlexRowContainerLoading>
              <BsXCircle size={250} />
              <span>Nothing Found</span>
            </FlexRowContainerLoading>
          )
        ) : (
          <FlexRowContainerLoading>
            <ClipLoader color={theme.text} loading={isLoading} size={150} />
            <span>Loading...</span>
          </FlexRowContainerLoading>
        )}
      </FlexRowContainer>
    </Container>
  );
}
