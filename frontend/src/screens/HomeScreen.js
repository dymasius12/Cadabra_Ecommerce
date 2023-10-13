import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import products from "../products";
import Loader from '../components/Loader'
import Message from '../components/Message'
import Paginate from '../components/Paginate'
import ProductCarousel from '../components/ProductCarousel'
import { listProducts } from '../actions/productActions'
import ChatComponent from "../components/ChatComponent";
// Import useLocation from react-router-dom
import { useLocation } from 'react-router-dom'

function HomeScreen() {
  const dispatch = useDispatch()
    const productList = useSelector(state => state.productList)
    const { error, loading, products, page, pages } = productList

    // Use the useLocation hook to get the location object
    const location = useLocation()

    let keyword = location.search

    useEffect(() => {
        dispatch(listProducts(keyword))

    }, [dispatch, keyword])

  return (
    <div>
      {!keyword && <ProductCarousel />}

      <h1>Latest Products</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <div>
          <Row>
            {products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
          <Paginate page={page} pages={pages} keyword={keyword} />
        </div>
      )}
      <footer>
        <ChatComponent></ChatComponent>
      </footer>
    </div>
  );
}

export default HomeScreen;
