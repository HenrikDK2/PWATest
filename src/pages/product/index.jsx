import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Image from "../../components/Image";
import InstallButton from "../../components/InstallButton";
import queryString from "query-string";
import Loader from "../../components/Loader";
import { Link } from "react-router-dom";

const Section = styled.section`
  padding: 3rem 1rem;
`;
const Article = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  & h3 {
    margin: 20px 0;
    text-align: center;
  }

  & p {
    max-width: 400px;
  }

  & figure {
    width: 100%;
    height: auto;
    max-width: 800px;
  }

  & img {
    object-fit: cover;
  }
`;

const Button = styled.button`
  display: block;
  margin: 0 auto;
  cursor: pointer;
`;

const Index = () => {
  const { id } = queryString.parse(location.search);
  const [product, setProduct] = useState(null);
  useEffect(() => {
    (async () => {
      const jsonData = await fetch("https://jsonplaceholder.typicode.com/posts/" + id).then((res) =>
        res.json()
      );

      setProduct(jsonData);
    })();
  }, []);

  return (
    <Section>
      {product ? (
        <Article>
          <h3>{product.title}</h3>
          <Image src="https://via.placeholder.com/350x150" />
          <p>{product.body}</p>
        </Article>
      ) : (
        <Loader />
      )}
      <Link to="/">
        {" "}
        <Button>Go back</Button>
      </Link>
      <InstallButton />
    </Section>
  );
};

export default Index;
