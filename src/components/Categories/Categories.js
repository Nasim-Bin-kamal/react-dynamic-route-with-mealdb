import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container, FormControl, InputGroup, Table, Button } from 'react-bootstrap';

const Categories = () => {
    const [categories, setCategories] = useState([]);
    const [displayCategories, setDisplayCategories] = useState([]);
    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
            .then(res => res.json())
            .then(data => {
                setCategories(data.categories);
                setDisplayCategories(data.categories);
            });
    }, []);

    const handleSearch = e => {
        const searchText = e.target.value;
        const matchedCategory = categories.filter(category => category.strCategory.toLowerCase().includes(searchText.toLowerCase()));
        setDisplayCategories(matchedCategory);
    }
    return (
        <Container>
            <div>
                <h2 className="text-center text-success my-4 mx-auto">List of All Meal Categories</h2>
                <InputGroup className="my-4 w-50 mx-auto">
                    <FormControl
                        onChange={handleSearch}
                        placeholder="Recipient's username"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                    />
                    <Button variant="primary">Search</Button>
                </InputGroup>
                <Table striped bordered hover responsive>
                    <thead>
                        <tr className="text-uppercase text-center text-primary">
                            <th>Id</th>
                            <th>Meal Name</th>
                            <th>Image</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    {
                        displayCategories?.map(category => (
                            <tbody>
                                <tr>
                                    <td>{category?.idCategory}</td>
                                    <td><b>{category?.strCategory}</b></td>
                                    <td><img className="img-fluid" src={category.strCategoryThumb} alt="" /></td>
                                    <td><small>{category?.strCategoryDescription}</small></td>
                                </tr>
                            </tbody>
                        ))
                    }
                </Table>
            </div>
        </Container>
    );
};

export default Categories;