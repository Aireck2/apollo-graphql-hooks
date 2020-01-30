import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { Row, Col, Card, Skeleton, Avatar } from "antd";
import gql from "graphql-tag";
import CardPosts from "../components/CardPosts";

const { Meta } = Card;

const Home = () => {
  const { loading, data } = useQuery(FETCH_POSTS_QUERY);

  return (
    <React.Fragment>
      <h1>Recent Posts</h1>
      <Row gutter={[20, 20]} type="flex" align="top">
        {loading ? (
          <Col span={8}>
            <Card>
              <Skeleton loading={loading} avatar active>
                <Meta
                  avatar={
                    <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                  }
                  title="Card title"
                  description="This is the description"
                />
              </Skeleton>
            </Card>
          </Col>
        ) : (
          data &&
          data.getPosts.map(post => (
            <Col span={8} key={post.id}>
              <CardPosts post={post} />
            </Col>
          ))
        )}
      </Row>
    </React.Fragment>
  );
};

const FETCH_POSTS_QUERY = gql`
  {
    getPosts {
      id
      likeCount
      username
      body
      commentCount
    }
  }
`;

export default Home;
