import { CardContainer, CardInformation,CountryName,CountryDescription,Data,CustomImg } from "./styles/Card.styled.js";

export default function Card({ name, flag, region, capital, population }) {
  return (
    <CardContainer>
      <CustomImg alt="" src={flag} width={"100%"} height={"200px"} />
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
  );
}
