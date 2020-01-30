import React from "react";
import { Card, Comment, Avatar, Tooltip, Icon } from "antd";
import moment from "moment";

const CardPost = () => {
  const actions = [
    <span key="comment-basic-like">
      <Tooltip title="Like">
        <Icon type="like" theme="filled" />
      </Tooltip>
      <span style={{ paddingLeft: 8, cursor: "auto" }}>2</span>
    </span>
  ];

  return (
    <Card>
      <Comment
        actions={actions}
        author="Erick"
        avatar={
          <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"></Avatar>
        }
        content="We supply a series of design principles, practical patterns and high quality design
            resources (Sketch and Axure), to help people create their product prototypes beautifully
            and efficiently"
        datetime={
          <Tooltip title={moment().format("YYYY-MM-DD HH:mm:ss")}>
            <span>{moment().fromNow()}</span>
          </Tooltip>
        }
      ></Comment>
    </Card>
  );
};

export default CardPost;
