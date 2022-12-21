import React from "react";
import styles from "../../styles/Post.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";

import Card from "react-bootstrap/Card";
import Media from "react-bootstrap/Media";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

import { Link, useHistory } from "react-router-dom";
import Avatar from "../../components/Avatar";
import { axiosRes } from "../../api/axiosDefaults";
import { MoreDropdown } from "../../components/MoreDropdown";

const Post = (props) => {
  const {
    id,
    owner,
    profile_id,
    profile_image,
    dislike_id,
    comments_count,
    dislike_count,
    like_count,
    post_favorite_id,
    post_favorite_count,
    like_id,
    title,
    content,
    image,
    updated_at,
    postPage,
    setPosts,
  } = props;

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;
  const history = useHistory();

  const handleEdit = () => {
    history.push(`/posts/${id}/edit`);
  };

  const handleDelete = async () => {
    try {
      await axiosRes.delete(`/posts/${id}`);
      history.goBack();
    } catch (err) {
      // console.log(err);
    }
  };

  const handleLike = async () => {
    try {
      const { data } = await axiosRes.post("/likes/", { post: id });
      setPosts((prevPosts) => ({
        ...prevPosts,
        results: prevPosts.results.map((post) => {
          return post.id === id
            ? { ...post, like_count: post.like_count + 1, like_id: data.id }
            : post;
        }),
      }));
    } catch (err) {
      // console.log(err);
    }
  };
  const handleFavorite = async () => {
    try {
      const { data } = await axiosRes.post("/favorites/", { post_favorite: id });
      setPosts((prevPosts) => ({
        ...prevPosts,
        results: prevPosts.results.map((post_favorite) => {
          return post_favorite.id === id
            ? {
                ...post_favorite,
                post_favorite_count: post_favorite.post_favorite_count + 1,
                post_favorite_id: data.id,
              }
            : post_favorite;
        }),
      }));
    } catch (err) {
      // console.log(err);
    }
  };
  const handleRemoveFavorite = async () => {
    try {
      await axiosRes.delete(`/favorites/${post_favorite_id}`);
      setPosts((prevPosts) => ({
        ...prevPosts,
        results: prevPosts.results.map((post_favorite) => {
          return post_favorite.id === id
            ? { ...post_favorite, post_favorite_count: post_favorite.post_favorite_count - 1, post_favorite_id: null }
            : post_favorite;
        }),
      }));
    } catch (err) {
      // console.log(err);
    }
  };
  const handleDislike = async () => {
    try {
      const { data } = await axiosRes.post("/dislikes/", { post: id });
      setPosts((prevPosts) => ({
        ...prevPosts,
        results: prevPosts.results.map((post) => {
          return post.id === id
            ? {
                ...post,
                dislike_count: post.dislike_count + 1,
                dislike_id: data.id,
              }
            : post;
        }),
      }));
    } catch (err) {
      // console.log(err);
    }
  };

  const handleUnlike = async () => {
    try {
      await axiosRes.delete(`/likes/${like_id}`);
      setPosts((prevPosts) => ({
        ...prevPosts,
        results: prevPosts.results.map((post) => {
          return post.id === id
            ? { ...post, like_count: post.like_count - 1, like_id: null }
            : post;
        }),
      }));
    } catch (err) {
      // console.log(err);
    }
  };
  const handleRemoveDislike = async () => {
    try {
      await axiosRes.delete(`/dislikes/${dislike_id}`);
      setPosts((prevPosts) => ({
        ...prevPosts,
        results: prevPosts.results.map((post) => {
          return post.id === id
            ? {
                ...post,
                dislike_count: post.dislike_count - 1,
                dislike_id: null,
              }
            : post;
        }),
      }));
    } catch (err) {
      // console.log(err);
    }
  };

  return (
    <Card className={styles.Post}>
      <Card.Body>
        <Media className="align-items-center justify-content-between">
          <Link to={`/profiles/${profile_id}`}>
            <Avatar src={profile_image} height={55} />
            {owner}
          </Link>
          <div className="d-flex align-items-center">
            <span>{updated_at}</span>
            {is_owner && postPage && (
              <MoreDropdown
                handleEdit={handleEdit}
                handleDelete={handleDelete}
              />
            )}
          </div>
        </Media>
      </Card.Body>
      <Link to={`/posts/${id}`}>
        <Card.Img src={image} alt={title} />
      </Link>
      <Card.Body>
        {title && <Card.Title className="text-center">{title}</Card.Title>}
        {content && <Card.Text>{content}</Card.Text>}
        <div className={styles.PostBar}>
          {is_owner ? (
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>You can't like your own post!</Tooltip>}
            >
              <i className="far fa-heart" />
            </OverlayTrigger>
          ) : like_id ? (
            <span onClick={handleUnlike}>
              <i className={`fas fa-heart ${styles.Heart}`} />
            </span>
          ) : currentUser ? (
            <span onClick={handleLike}>
              <i className={`far fa-heart ${styles.HeartOutline}`} />
            </span>
          ) : (
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>Log in to like posts!</Tooltip>}
            >
              <i className="far fa-heart" />
            </OverlayTrigger>
          )}
          {like_count}

          <Link to={`/posts/${id}`}>
            <i className="far fa-comments" />
            {comments_count}
          </Link>
          {is_owner ? (
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>You can't Dislike your own post!</Tooltip>}
            >
              <i className="fa-solid fa-thumbs-down" />
            </OverlayTrigger>
          ) : dislike_id ? (
            <span className="mx-2" onClick={handleRemoveDislike}>
              <i className={`fa-solid fa-thumbs-down ${styles.Heart}`} />
            </span>
          ) : currentUser ? (
            <span onClick={handleDislike}>
              <i className={`fa-solid fa-thumbs-down ${styles.HeartOutline}`} />
            </span>
          ) : (
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>Log in to Dislike posts!</Tooltip>}
            >
              <i className="far fa-heart" />
            </OverlayTrigger>
          )}
          {dislike_count}
          {is_owner ? (
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>You can't favorite your own post!</Tooltip>}
            >
              <i class="fa-solid fa-bookmark"></i>
            </OverlayTrigger>
          ) : post_favorite_id ? (
            <span className="mx-2" onClick={handleRemoveFavorite}>
              <i className={`fa-solid fa-bookmark ${styles.Heart}`} />
            </span>
          ) : currentUser ? (
            <span onClick={handleFavorite}>
              <i className={`fa-solid fa-bookmark ${styles.HeartOutline}`} />
            </span>
          ) : (
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>Log in to Dislike posts!</Tooltip>}
            >
              <i className="far fa-heart" />
            </OverlayTrigger>
          )}
          {post_favorite_count}
        </div>
      </Card.Body>
    </Card>
  );
};

export default Post;
