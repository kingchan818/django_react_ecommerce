import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import FormContainer from '../components/FormContainer';
import { Login } from '../action/userAction';

function LoginScreen({ location, history }) {
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const dispath = useDispatch();

    const redirect = location.search ? location.search.split('=')[1] : '/';
    const { loading, error, userInfo } = useSelector((state) => state.userLogin);

    useEffect(() => {
        console.log(redirect);
        if (userInfo.length > 0) {
            history.push(redirect);
        }
        console.log(userInfo);
    }, [history, userInfo, redirect]);

    const submitHandler = (e) => {
        e.preventDefault();
        dispath(Login(email, password));
    };

    return (
        <FormContainer>
            <h1>Sign in </h1>
            <Form onSubmit={submitHandler}>
                <Form.Group controlId="email">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    ></Form.Control>
                </Form.Group>

                <Form.Group controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Enter Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    ></Form.Control>
                </Form.Group>

                <Button type="submit"> Submit </Button>
            </Form>

            <Row className="py-3">
                <Col>
                    New Customer ? <Link to={redirect ? `/register?redirect=${redirect}` : '/register'}>Register</Link>
                </Col>
            </Row>
        </FormContainer>
    );
}

export default LoginScreen;
