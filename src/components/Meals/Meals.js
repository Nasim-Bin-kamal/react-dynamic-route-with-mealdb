import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Button, Container, FormControl, InputGroup, Row } from 'react-bootstrap';
import SingleMeal from '../SingleMeal/SingleMeal';

const Meals = () => {
    const [searchText, setSearchText] = useState('');
    const [meals, setMeals] = useState([]);
    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setMeals(data.meals))
            .catch(error => console.log(error));
    }, [searchText]);
    const handleSearch = e => {
        const searchValue = e.target.value;
        setSearchText(searchValue);

    }
    return (
        <Container>
            <h3 className="text-primary text-center my-3">Search Your Favourite Meals</h3>
            <InputGroup className="my-3 w-50 mx-auto">
                <FormControl
                    onChange={handleSearch}
                    type="search"
                    placeholder="Search meals"
                    aria-label="Search meals"
                    aria-describedby="basic-addon2"
                />
                <Button variant="primary">Search</Button>
            </InputGroup>
            <div>
                <Row>
                    {
                        meals?.map(meal => <SingleMeal key={meal.idMeal} meal={meal}></SingleMeal>)
                    }
                </Row>
            </div>

        </Container>
    );
};

export default Meals;