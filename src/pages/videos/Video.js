import React from "react";
import styles from "../../styles/Post.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Card, Media, OverlayTrigger, Tooltip } from "react-bootstrap";
import { Link } from "react-router-dom";
import Avatar from "../../components/Avatar";
import { axiosRes } from "../../api/axiosDefaults";
const Video = (props) => {
  const {
    id,
    owner,
    profile_id,
    profile_image,
    video_comments,
    video_likes,
    video_like_id,
    video_dislike,
    video_dislike_id,
    title,
    content,
    video,
    updated_at,
    videoPost,
    setVideo,
  } = props;

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;

  const handleVideoLike = async () => {
    try {
      const { data } = await axiosRes.post("/videolikes/", { video: id });
      setVideo((prevVideos) => ({
        ...prevVideos,
        results: prevVideos.results.map((video) => {
          return video.id === id
            ? {
                ...video,
                video_likes: video.video_likes + 1,
                video_like_id: data.id,
              }
            : video;
        }),
      }));
    } catch (err) {
      console.log(err);
    }
  };

  const handleVideoUnlike = async () => {
    try {
      await axiosRes.delete(`/videolikes/${video_like_id}`);
      setVideo((prevVideos) => ({
        ...prevVideos,
        results: prevVideos.results.map((video) => {
          return video.id === id
            ? {
                ...video,
                video_likes: video.video_likes - 1,
                video_like_id: null,
              }
            : video;
        }),
      }));
    } catch (err) {
      console.log(err);
    }
  };

  const handleDislike = async () => {
    try {
      const { data } = await axiosRes.post("/videodislikes/", { video: id });
      setVideo((prevVideos) => ({
        ...prevVideos,
        results: prevVideos.results.map((video) => {
          return video.id === id
            ? {
                ...video,
                video_dislike: video.video_dislike + 1,
                video_dislike_id: data.id,
              }
            : video;
        }),
      }));
    } catch (err) {
      // console.log(err);
    }
  };

  const handleRemoveDislike = async () => {
    try {
      await axiosRes.delete(`/videodislikes/${video_dislike_id}`);
      setVideo((prevVideos) => ({
        ...prevVideos,
        results: prevVideos.results.map((video) => {
          return video.id === id
            ? { ...video, video_dislike: video.video_dislike - 1, video_dislike_id: null }
            : video;
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
            <Avatar src={profile_image} height={55} /> {owner}
          </Link>
          <div className="d-flex align-items-center">
            <span>{updated_at}</span>
            {is_owner && videoPost && "..."}
          </div>
        </Media>
      </Card.Body>
      <video src={video} controls></video>
      <Card.Body>
        {title && <Card.Title className="text-center">{title}</Card.Title>}
        {content && <Card.Text className="text-center">{content}</Card.Text>}
        <div className={styles.PostBar}>
          {is_owner ? (
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>You can't like your own post!</Tooltip>}
            >
              <i className="far fa-heart" />
            </OverlayTrigger>
          ) : video_like_id ? (
            <span onClick={handleVideoUnlike}>
              <i className={`fas fa-heart ${styles.Heart}`} />
            </span>
          ) : currentUser ? (
            <span onClick={handleVideoLike}>
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
          {video_likes}
          <Link to={`/posts/${id}`}>
            <i className="far fa-comments" />
            {video_comments}
          </Link>
          {is_owner ? (
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>You can't Dislike your own post!</Tooltip>}
            >
              <i className="fa-solid fa-thumbs-down" />
            </OverlayTrigger>
          ) : video_dislike_id ? (
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
          {video_dislike}
        </div>
      </Card.Body>
    </Card>
  );
};

export default Video;
