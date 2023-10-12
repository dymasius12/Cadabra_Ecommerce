import React from "react";
import { Row, Col } from "react-bootstrap";
import products from "../products";
import Product from '../components/Product'
import ChatComponent from "../components/ChatComponent";

function HomeScreen() {
  return (
    <div>
      <h1>Latest Products</h1>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>

      <footer>
          <ChatComponent></ChatComponent>
      </footer>
    </div>
  );
}

export default HomeScreen;
