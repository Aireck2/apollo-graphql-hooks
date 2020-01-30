import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { Row, Col } from "antd";
import gql from "graphql-tag";
import CardPosts from "../components/CardPosts";

const Home = () => {
  const { loading, data } = useQuery(FETCH_POSTS_QUERY);

  return (
    <Row gutter={[20, 20]}>
      <h1>Recent Posts</h1>

      {loading ? (
        <p>loading...</p>
      ) : (
        data &&
        data.getPosts.map(posts => (
          <Col span={8} key={posts.id}>
            <CardPosts />
          </Col>
        ))
      )}
    </Row>
  );
};

const FETCH_POSTS_QUERY = gql`
  {
    getPosts {
      id
      likeCount
    }
  }
`;

export default Home;
