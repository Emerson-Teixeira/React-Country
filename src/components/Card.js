import {
  CardContainer,
  CardInformation,
  CountryName,
  CountryDescription,
  Data,
  CustomImg,
} from "./styles/Card.styled.js";
import { Link } from "react-router-dom";
import { useTheme } from "styled-components";

export default function Card({
  name,
  flag,
  region,
  capital,
  population,
  cca3,
}) {
  const theme = useTheme();
  const style = {
    color: theme.text,
    textDecoration: "none",
  };
  return (
    <Link style={style} to={`/${cca3}`} role='country'>
      <CardContainer>
        <CustomImg alt="" src={flag} height={"200"} />
        <CardInformation>
          <CountryName>{name.common}</CountryName>
          <CountryDescription>
            <Data>
              <strong>Population:</strong>
              {population}
            </Data>
            <Data>
              <strong>Region:</strong>
              {region}
            </Data>
            <Data>
              <strong>Capital:</strong>
              {capital}
            </Data>
          </CountryDescription>
        </CardInformation>
      </CardContainer>
    </Link>
  );
}
