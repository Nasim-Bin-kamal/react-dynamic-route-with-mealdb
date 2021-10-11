import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import { useHistory } from 'react-router';

const SingleMeal = (props) => {
    const { idMeal, strMeal, strMealThumb } = props.meal || {};
    const history = useHistory();
    const handleShowDetails = () => {
        history.push(`/meal/${idMeal}`);
    }
    return (
        <Col md={3}>
            <Card className="mx-2 my-3 p-3 border-3 rounded-3 shadow-lg">
                <Card.Img variant="top" src={strMealThumb} />
                <Card.Body>
                    <Card.Title className="text-center text-primary fs-4">{strMeal}</Card.Title>
                </Card.Body>
                <Button onClick={handleShowDetails} variant="success w-100">See Details</Button>
            </Card>
        </Col>
    );
};

export default SingleMeal;