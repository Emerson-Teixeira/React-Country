/* eslint-disable react-hooks/exhaustive-deps */
import {
  Container,
  FlexContainerFullWidth,
  BackButton,
  FlexContainerFullWidthSpaceBetween,
  Flag,
  Description,
  CountryName,
  DescriptionContainer,
  DescriptionData,
  BorderCountry,
  Content,
  DivFlag,
  BorderBox,
  FlexRowContainerLoading,
} from "./styles/DescriptionPage.styled.js";
import ClipLoader from "react-spinners/ClipLoader";
import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useTheme } from "styled-components";
import { useEffect, useState } from "react";

export default function DescriptionPage(props) {
  const theme = useTheme();
  const style = {
    color: theme.text,
    textDecoration: "none",
  };

  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);
  const [border, setBorder] = useState(null);
  useEffect(() => {
    getData(props.match.params.code);
  }, []);

  useEffect(() => {
    if (data) {
      getBorder(data.borders);
    }
  }, [data]);
  useEffect(() => {
    if (border !== null) {
      setIsLoading(false);
    }
  }, [border]);

  async function getData(code) {
    setIsLoading(true);
    try {
      let response = await fetch(
        `https://restcountries.com/v3.1/alpha/${code}`
      );
      let arrayResponse = await response.json();
      setData(arrayResponse[0]);
    } catch (error) {
      console.log(error);
    }
  }
  async function getBorder(border) {
    if (!border) {
      setIsLoading(true);
      setBorder([]);
      return;
    }
    setIsLoading(true);
    setBorder(null);
    try {
      let response = await fetch(
        `https://restcountries.com/v3.1/alpha?fields=name,cca3&codes=${border.join(
          ","
        )}`
      );
      setBorder(await response.json());
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <Container>
      {isLoading ? (
        <FlexRowContainerLoading>
          <ClipLoader color={theme.text} loading={isLoading} size={150} />
          Loading...
        </FlexRowContainerLoading>
      ) : (
        <Content>
          <FlexContainerFullWidth>
            <Link style={style} to="/">
              <BackButton>
                <BsArrowLeft />
                Back
              </BackButton>
            </Link>
          </FlexContainerFullWidth>
          <FlexContainerFullWidthSpaceBetween>
            <DivFlag>
              <Flag src={data.flags?.png} width={"100%"} />
            </DivFlag>
            <DescriptionContainer>
              <CountryName>{data.name?.common}</CountryName>
              <Description>
                <DescriptionData>
                  <span>
                    <strong>Native Name: </strong>{" "}
                    {data?.name.nativeName
                      ? Object.keys(data?.name.nativeName)
                          .map(function (item) {
                            return data?.name.nativeName[item].common;
                          })
                          .join(", ")
                      : "N/A"}
                  </span>
                  <span>
                    <strong>Population: </strong>
                    {data.population ? data.population : "N/A"}
                  </span>
                  <span>
                    <strong>Region: </strong>
                    {data.region ? data.region : "N/A"}
                  </span>
                  <span>
                    {" "}
                    <strong>Sub Region: </strong>
                    {data.subregion ? data.subregion : "N/A"}
                  </span>
                  <span>
                    <strong>Capital: </strong>
                    {data.capital ? data.capital?.join(", ") : "N/A"}
                  </span>
                </DescriptionData>
                <DescriptionData>
                  <span>
                    <strong>Top Level Domain: </strong>
                    {data.tld ? data.tld?.join(", ") : "N/A"}
                  </span>
                  <span>
                    <strong>Currencies: </strong>
                    {data?.currencies
                      ? Object.keys(data?.currencies)
                          .map(function (item) {
                            return data.currencies[item].name;
                          })
                          .join(", ")
                      : "N/A"}
                  </span>
                  <span>
                    {" "}
                    <strong>Languages: </strong>
                    {data?.languages
                      ? Object.keys(data?.languages)
                          .map(function (item) {
                            return data?.languages[item];
                          })
                          .join(", ")
                      : "N/A"}
                  </span>
                </DescriptionData>
              </Description>
              <strong style={{ marginBottom: "10px", marginTop: "25px" }}>
                Border Countries:
              </strong>
              <BorderBox>
                {border.length > 0
                  ? border.map((Element, index) => (
                    <Link style={style} to={`/${Element.cca3}`}>
                    <BorderCountry
                        onClick={(e) => {
                          getData(Element.cca3);
                        }}
                      >
                        {Element.name.common}
                      </BorderCountry>
                    </Link>
                    ))
                  : "None"}
              </BorderBox>
            </DescriptionContainer>
          </FlexContainerFullWidthSpaceBetween>
        </Content>
      )}
    </Container>
  );
}
