import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Button, Card } from 'react-bootstrap';
import Rating from '../components/Rating';
import Message from '../components/Message';
import { useDispatch, useSelector } from 'react-redux';
import { listProductsDetials } from '../action/productAction';

const ProductScreen = ({ match }) => {
    const dispatch = useDispatch();
    const { product, loading, error } = useSelector((state) => state.productDetial);

    useEffect(() => {
        dispatch(listProductsDetials(match.params.id));
    }, []);

    return (
        <div>
            <Link to="/" className="btn btn-light my-3">
                Go Back
            </Link>
            {loading ? (
                <h2>loading....</h2>
            ) : error ? (
                <Message variant={'danger'} error={error} />
            ) : (
                <Row>
                    <Col md={6}>
                        <Image src={product.image} alt={product.name} fluid />
                    </Col>
                    <Col md={3}>
                        <ListGroup variant="flush">
                            <ListGroup.Item>
                                <h3>{product.name}</h3>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Rating
                                    value={product.rating}
                                    text={`${product.numReviews} rating`}
                                    color={'#f8e825'}
                                />
                            </ListGroup.Item>

                            <ListGroup.Item>Price : ${product.price}</ListGroup.Item>
                            <ListGroup.Item>Description :{product.description}</ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col md={3}>
                        <Card>
                            <ListGroup variant="flush">
                                <ListGroup.Item>
                                    <Row>
                                        <Col>Price:</Col>
                                        <Col>
                                            <strong>${product.price}</strong>
                                        </Col>
                                    </Row>
                                </ListGroup.Item>

                                <ListGroup.Item>
                                    <Row>
                                        <Col>Status</Col>
                                        <Col>{product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}</Col>
                                    </Row>
                                </ListGroup.Item>

                                <ListGroup.Item>
                                    <Button className="btn-block" type="button" disabled={product.countInStock === 0}>
                                        Add to Cart
                                    </Button>
                                </ListGroup.Item>
                            </ListGroup>
                        </Card>
                    </Col>
                </Row>
            )}
        </div>
    );
};

export default ProductScreen;