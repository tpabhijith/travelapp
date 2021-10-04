import React, {useState, useEffect} from 'react'
import styled from "styled-components"
import axios from "axios"
import {useParams} from "react-router"

function Place() {
    const [places,setPlaces] = useState([]);
    const {id} = useParams();
    useEffect(() => {
        axios.get(`https://traveller.talrop.works/api/v1/places/view/${id}`)
        .then(function (response) {
            console.log(response.data.data);
            setPlaces(response.data.data);
            console.log(places.gallery);
        })
        .catch(function (error) {
            console.log(error);
        });
    },[]);
    let renderItems = () => {
       if(places.gallery) {
           return places.gallery.map((item) => (
                    <ListItem>
                        <GalleryImages src={item.image} alt="Images" />
                    </ListItem>
                ))
            }
    };
    return (
        <>
            <Container>
                <Heading>{places.name}</Heading>
                <Content>   
                    <ContentTop>
                        <Category>{places.category_name}</Category>
                        <ImageContainer>
                            <LocationImage src={require("../assets/images/place.svg").default} alt="Location Image" />
                        </ImageContainer>
                        <PlaceName>{places.name}</PlaceName>
                    </ContentTop>
                    <CategoryMiddle>
                        <Left>
                            <LocationImageContainer>
                                <LocationImage src= {places.image} />
                            </LocationImageContainer>
                        </Left>
                        <Right>
                           <ListItems>
                                {renderItems()}
                           </ListItems>
                        </Right>
                    </CategoryMiddle>
                    <CategoryBottom>
                        <PlaceDetails>Place Details</PlaceDetails>
                        <PlaceContent>{places.description}</PlaceContent>
                    </CategoryBottom>
                </Content>
            </Container>
        </>
    )
}
const Container = styled.div`
    max-width: 900px;
    margin: 0 auto;
`;
const Heading = styled.h3`
    font-size: 30px;
    margin-bottom: 20px;
`;
const Content = styled.div`
`;
const ContentTop = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 30px;
`;
const Category = styled.div`
    border: 2px solid #cfcfcf;
    border-radius: 30px;
    display: inline;
    padding: 2px 5px;
    margin-right: 10px;
    color: #cfcfcf;
`;
const ImageContainer = styled.div`
    margin-right: 5px;
`;
const LocationImageContainer = styled.div`
    width: 100%;
   & img {
    border-top-left-radius: 30px;
   }
`;
const LocationImage = styled.img`
    width: 100%;
    display: block;
`;
const PlaceName = styled.h6`
    font-size: 14px;
    color: #cfcfcf;
`;
const CategoryMiddle = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 30px;
`;
const Left = styled.div`
    width: 45%;
`;
const Right = styled.div`
    width: 45%;
`;
const ListItems = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
`;
const ListItem = styled.li`
    width: 45%;
    margin-bottom: 23px;
    &:last-child {
        margin-bottom: 0;
    }
    &:nth-child(3) {
        margin-bottom: 0;
    }
    &:nth-child(2) img {
       border-top-right-radius: 30px;
    }
    &:last-child img {
        border-bottom-right-radius: 30px;
    }
`;
const CategoryBottom = styled.div``;
const PlaceDetails = styled.p`
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 20px;
`;
const PlaceContent = styled.p`
    font-size: 20px;
    margin-bottom: 20px;
`;
const GalleryImages = styled.img`
    width: 100%;
    display: block;
`;


export default Place
