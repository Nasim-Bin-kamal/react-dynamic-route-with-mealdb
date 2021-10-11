import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Card, Col, Container, Row, Button } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';


const SingleMealDetails = () => {
    const { mealId } = useParams();
    const [mealDetails, setMealDetails] = useState({});
    const { strMeal, strArea, strCategory, strInstructions, strMealThumb } = mealDetails || {};
    const history = useHistory();
    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
            .then(res => res.json())
            .then(data => setMealDetails(data.meals[0]));
    }, [mealId]);

    const handlePreviousPage = () => {
        history.push("/meals");
    }
    return (
        <div>
            <Container className="w-75">
                <h3 className="my-5">Full Details of <span className="text-primary">{strMeal}</span></h3>
                <Row className="border border-3 rounded-3 shadow-lg">
                    <Col md={4}>
                        <Card className="mx-auto my-3">
                            <Card.Img className="img-fluid" variant="top" src={strMealThumb} />
                        </Card>
                    </Col>
                    <Col md={8}>
                        <Card.Body>
                            <h3>Meal Name: {strMeal}</h3>
                            <h4>Area:{strArea}</h4>
                            <h5>Cateroty: {strCategory}</h5>
                            <Card.Text>
                                <b>Detail Instructions:</b> {strInstructions}
                            </Card.Text>
                        </Card.Body>
                    </Col>
                </Row>
                <Button
                    onClick={handlePreviousPage}
                    className="mx-auto d-flex align-items center my-3"
                    variant="warning"
                    size="md"
                >Back To All Meals</Button>
            </Container>
        </div>
    );
};

export default SingleMealDetails;