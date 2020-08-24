import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Image from "../../components/Image";
import { Link } from "react-router-dom";
import Loader from "../../components/Loader";

const Heading = styled.h1`
  text-align: center;
  font-size: 3rem;
`;

const Section = styled.section``;
const ProductGrid = styled.section`
  display: grid;
  place-content: center;
  grid-template-columns: repeat(auto-fill, minmax(300px, 400px));
  grid-auto-rows: 300px;
  grid-gap: 20px;
`;
const ProductItem = styled.article`
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.3);
  cursor: pointer;
  & h3 {
    margin: 0;
    text-align: center;
  }

  & figure {
    width: 100%;
    height: 200px;
  }

  & a {
    height: 100%;
    width: 100%;
    display: inline-block;
  }

  & img {
    object-fit: cover;
  }
`;

const Index = () => {
  const [products, setProducts] = useState(null);
  useEffect(() => {
    (async () => {
      const jsonData = await fetch("https://jsonplaceholder.typicode.com/posts").then((res) =>
        res.json()
      );

      setProducts(jsonData);
    })();
  }, []);

  return (
    <Section>
      <Heading>Produkter</Heading>
      {products ? (
        <ProductGrid>
          {products.map((product, i) => {
            return (
              <ProductItem key={i}>
                <Link to={`/product?id=${product.id}`}>
                  <Image src="https://via.placeholder.com/350x150" />
                  <h3>{product.title}</h3>
                </Link>
              </ProductItem>
            );
          })}
        </ProductGrid>
      ) : (
        <Loader />
      )}
    </Section>
  );
};

export default Index;
