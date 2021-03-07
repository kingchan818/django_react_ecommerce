import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';

import Product from '../components/Product';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../action/productAction';
import Message from '../components/Message';

const HomeScreen = () => {
    const dispatch = useDispatch();
    const { products, error, loading } = useSelector((state) => state.productList);

    useEffect(() => {
        dispatch(listProducts());
    }, [dispatch]);

    return (
        <div>
            <h1>Latest Products</h1>
            {loading ? (
                <h2>Loading...</h2>
            ) : error ? (
                <Message variant={'danger'} error={error} />
            ) : (
                <Row>
                    {products.map((product) => (
                        <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                            <Product product={product} />
                        </Col>
                    ))}
                </Row>
            )}
        </div>
    );
};

export default HomeScreen;
