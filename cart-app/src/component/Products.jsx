import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Col, Row } from "react-bootstrap";
import Container from "react-bootstrap/esm/Container";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../RTK/slices/products-slice";
import { addToCart } from "../RTK/slices/cart-slice";

function Products() {
  const products = useSelector((state) => state.products);

  console.log(products);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  return (
    <Container className="py-5">
      <Row className="py-5">
        {products.map((product) => (
          <Col key={product.id}>
            <Card style={{ width: "18rem" }}>
              <Card.Img
                style={{ height: "300px" }}
                variant="top"
                src={product.image}
              />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <Card.Text>Price: {product.price}$</Card.Text>
                <Button
                  variant="primary"
                  onClick={() => dispatch(addToCart(product))}
                >
                  Add To Cart
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Products;
