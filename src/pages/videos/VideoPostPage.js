import React, { useEffect, useState } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import appStyles from "../../App.module.css";
import { useParams } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import Video from "./Video";
import VideoComment from "../videoComments/VideoComment";
import VideoCommnetCreateForm from "../videoComments/VideoCommentCreateForm";
import { useCurrentUser } from "../../contexts/CurrentUserContext";

function VideoPostPage() {
  const { id } = useParams();
  const [video, setVideo] = useState({ results: [] });

  const currentUser = useCurrentUser();
  const profile_image = currentUser?.profile_image;
  const [videoComment, setVideoComments] = useState({ results: [] });

  useEffect(() => {
    const handleMount = async () => {
      try {
        const [{ data: video }, { data: videoComment }] = await Promise.all([
          axiosReq.get(`/videos/${id}`),
          axiosReq.get(`/videocomments/?video=${id}`),
        ]);
        setVideo({ results: [video] });
        setVideoComments(videoComment);
        console.log(video);
      } catch (err) {
        console.log(err);
      }
    };

    handleMount();
  }, [id]);

  return (
    <Row className="h-100">
      <Col className="py-2 p-0 p-lg-2" lg={12}>
        <Video {...video.results[0]} setVideo={setVideo} videoPost />
        <Container className={appStyles.Content}>
          {currentUser ? (
            <VideoCommnetCreateForm
              profile_id={currentUser.profile_id}
              profileImage={profile_image}
              video={id}
              setVideo={setVideo}
              setVideoComments={setVideoComments}
            />
          ) : videoComment.results.length ? (
            <span className={appStyles.CommentsCorlor}>Comments</span>
          ) : null}
          {videoComment.results.length ? (
            videoComment.results.map((videoComment) => (
              <VideoComment
                key={videoComment.id}
                {...videoComment}
                setVideo={setVideo}
                setVideoComments={setVideoComments}
              />
            ))
          ) : currentUser ? (
            <span className={appStyles.CommentsCorlor}>No comments yet, be the first to comment!</span>
          ) : (
            <span className={appStyles.CommentsCorlor}>No comments... yet</span>
          )}
        </Container>
      </Col>
      
    </Row>
  );
}

export default VideoPostPage;
