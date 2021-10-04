import React,{useState, useEffect} from 'react'
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom"
import styled from "styled-components"
import axios from "axios"

function Home() {
    const [places,setPlaces] = useState([]);
    useEffect(() => {
        axios.get("https://traveller.talrop.works/api/v1/places/")
        .then(function (response) {
            console.log(response.data.data);
            setPlaces(response.data.data);
        })
        .catch(function (error) {
            console.log(error);
        });
    },[]);
    let renderItems = () => {
        return places.map((item) => (
            <ListItem> 
                <Link to={`/place/${item.id}`}>
                    <ListImageContainer>
                        <ListImage src={item.image} alt="Place Image" />
                    </ListImageContainer>
                </Link>
                <Content>
                    <Top>
                        <PlaceName>{item.name}</PlaceName>
                    </Top>
                    <Bottom>
                        <LocationImage src={require("../assets/images/place.svg").default} alt="Location" />
                        <PlaceNameSmall>{item.location}</PlaceNameSmall>
                    </Bottom>
                </Content>
            </ListItem>
        ));
    };
    return (
        <>
        <Container>
            <Spotlight>
                <TopContainer>
                    <Heading>Welcome</Heading>
                    <SubHeading>Explore the world around you</SubHeading>
                </TopContainer>
                <BottomContainer>
                    <ListItems>
                        {renderItems()}
                    </ListItems>
                </BottomContainer>
            </Spotlight>
        </Container>
        </>
    )
}
const Container = styled.div`
    max-width: 1200px;
    margin: 0 auto;
`;
const Spotlight = styled.div`
    padding: 0 30px;
`;
const TopContainer = styled.div``;
const BottomContainer = styled.div`
    padding: 30px 0;
`;
const Heading = styled.h3`
    font-size: 40px;
    font-weight: 600;
    margin: 0;
    margin-bottom: 10px;
`;
const SubHeading = styled.h6`
    font-size: 20px;
    font-weight: 600;
    margin: 0;
    color: #cfcfcf;
`;
const ListItems = styled.ul`
    display: flex;
    justify-tracks: space-between;
    align-items: center;
    flex-wrap: wrap;
`;
const ListItem = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 25%;
    margin-bottom: 20px;
`;
const ListImageContainer = styled.div`
    cursor: pointer;
`;
const ListImage = styled.img`
    width: 90%;
    display: block;
   border-top-left-radius: 8px;
   border-top-right-radius: 8px;
   margin-bottom: 10px;
`;
const PlaceName = styled.h3`
    font-size: 20px;
`;
const LocationImage = styled.img`
    display: block;
    margin-right: 10px;
`;
const PlaceNameSmall = styled.h6`
    font-size: 16px;
    font-weight: normal;
`;
const Content = styled.div`
    display: flex;
    justify-content: left;
    flex-direction: column;
    width: 100%;
    margin-left: 30px;
`;
const Top = styled.div`
    margin-right: 10px;
    text-align: left;
    margin-bottom: 10px;
`;
const Bottom = styled.div`
    display: flex;
    justify-content: left;
    align-items: center;
`;
export default Home;
