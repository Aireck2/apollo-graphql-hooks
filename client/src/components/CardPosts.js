import React from "react";
import { Card, Comment, Avatar, Tooltip, Icon } from "antd";
import moment from "moment";

const CardPost = post => {
  const { likeCount, commentCount, username, body } = post.post;
  const actions = [
    <React.Fragment>
      <span key="comment-basic-like">
        <Tooltip title="Like">
          <Icon type="like" theme="filled" />
        </Tooltip>
        <span style={{ paddingLeft: 8, cursor: "auto" }}>{likeCount}</span>
      </span>
      <span key="comment-basic-like">
        <Tooltip title="Like">
          <Icon type="message" theme="filled" />
        </Tooltip>
        <span style={{ paddingLeft: 8, cursor: "auto" }}>{commentCount}</span>
      </span>
    </React.Fragment>
  ];

  return (
    <Card>
      <Comment
        actions={actions}
        author={username}
        avatar={
          <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRAJLzhe1MEiXQ6FHGoZkKEkzzTsZ5onGK1Ah0acCbKrEIXExxs"></Avatar>
        }
        content={body}
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
