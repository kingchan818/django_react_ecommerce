import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Footer from './components/footer';
import Header from './components/header';
import ProductScreen from './screens/ProductScreen';
import HomeScreen from './screens/homeScreen';

function App() {
    return (
        <Router>
            <Header />
            <main className="py-3">
                <Container>
                    <Route path="/" component={HomeScreen} exact />
                    <Route path="/product/:id" component={ProductScreen} />
                </Container>
            </main>
            <Footer />
        </Router>
    );
}

export default App;
