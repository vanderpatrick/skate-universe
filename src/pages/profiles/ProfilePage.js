import React, { useEffect, useState } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import Asset from "../../components/Asset";

import styles from "../../styles/ProfilePage.module.css";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";

import PopularProfiles from "./PopularProfiles";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { useParams } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import {
  useProfileData,
  useSetProfileData,
} from "../../contexts/ProfileDataContext";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import InfiniteScroll from "react-infinite-scroll-component";
import Post from "../posts/Post";
import { fetchMoreData } from "../../utils/utils";
import NoResults from "../../assets/no-results.png";
import { ProfileEditDropdown } from "../../components/MoreDropdown";
import Video from "../videos/Video";

function ProfilePage() {
  const [hasLoaded, setHasLoaded] = useState(false);
  const [profilePosts, setProfilePosts] = useState({ results: [] });
  const [profileVideos, setProfileVideos] = useState({ results: [] });

  const currentUser = useCurrentUser();
  const { id } = useParams();

  const { setProfileData, handleFollow, handleUnfollow } = useSetProfileData();
  const { pageProfile } = useProfileData();

  const [profile] = pageProfile.results;
  const is_owner = currentUser?.username === profile?.owner;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [
          { data: pageProfile },
          { data: profilePosts },
          { data: profileVideos },
        ] = await Promise.all([
          axiosReq.get(`/profiles/${id}`),
          axiosReq.get(`/posts/?owner__profile=${id}`),
          axiosReq.get(`/videos/?owner__profile=${id}`),
        ]);
        setProfileData((prevState) => ({
          ...prevState,
          pageProfile: { results: [pageProfile] },
        }));
        setProfilePosts(profilePosts);
        setProfileVideos(profileVideos);
        console.log(pageProfile);
        setHasLoaded(true);
      } catch (err) {
        // console.log(err);
      }
    };
    fetchData();
  }, [id, setProfileData]);

  const mainProfile = (
    <>
      {profile?.is_owner && <ProfileEditDropdown id={profile?.id} />}
      <Row noGutters className="px-3 text-center">
        <Col lg={3} className="text-lg-left">
          <Image
            className={styles.ProfileImage}
            roundedCircle
            src={profile?.image}
          />
        </Col>
        <Col lg={6}>
          <h3 className="m-2">{profile?.owner}</h3>
          <Row className={`justify-content-center no-gutters ${styles.Color}`}>
            <Col xs={3} className=" my-2">
              <div>{profile?.posts_count}</div>
              <div className={styles.Color}>posts</div>
            </Col>
            <Col xs={3} className="my-2">
              <div>{profile?.videos_count}</div>
              <div>videos</div>
            </Col>
            <Col xs={3} className="my-2">
              <div>{profile?.followers_count}</div>
              <div>followers</div>
            </Col>
            <Col xs={3} className="my-2">
              <div>{profile?.following_count}</div>
              <div>following</div>
            </Col>
          </Row>
        </Col>
        <Col lg={3} className="text-lg-right">
          {currentUser &&
            !is_owner &&
            (profile?.following_id ? (
              <Button
                className={`${btnStyles.Button} ${btnStyles.BlackOutline}`}
                onClick={() => handleUnfollow(profile)}
              >
                unfollow
              </Button>
            ) : (
              <Button
                className={`${btnStyles.Button} ${btnStyles.Black}`}
                onClick={() => handleFollow(profile)}
              >
                follow
              </Button>
            ))}
        </Col>
      </Row>
    </>
  );
  const profileBio = (
    <>
      <p className="text-center">{profile?.content}</p>

    </>
  );

  const mainProfilePosts = (
    <>
      <hr />
      <p className="text-center">{profile?.owner}'s posts</p>
      <hr />
      {profilePosts.results.length ? (
        <InfiniteScroll
          children={profilePosts.results.map((post) => (
            <Post key={post.id} {...post} setPosts={setProfilePosts} />
          ))}
          dataLength={profilePosts.results.length}
          loader={<Asset spinner />}
          hasMore={!!profilePosts.next}
          next={() => fetchMoreData(profilePosts, setProfilePosts)}
        />
      ) : (
        <Asset
          src={NoResults}
          message={`No results found, ${profile?.owner} hasn't posted yet.`}
        />
      )}
    </>
  );
  const mainProfileVideos = (
    <>
      <hr />
      <p className="text-center">{profile?.owner}'s Videos</p>
      <hr />
      {profileVideos.results.length ? (
        <InfiniteScroll
          children={profileVideos.results.map((video) => (
            <Video key={video.id} {...video} setVideo={setProfileVideos} />
          ))}
          dataLength={profileVideos.results.length}
          loader={<Asset spinner />}
          hasMore={!!profileVideos.next}
          next={() => fetchMoreData(profileVideos, setProfileVideos)}
        />
      ) : (
        <Asset
          src={NoResults}
          message={`No results found, ${profile?.owner} hasn't posted yet.`}
        />
      )}
    </>
  );

  return (
    <Row>
      <Col className="py-2 p-0 p-lg-2" lg={12}>
        <PopularProfiles mobile />
        <Container className={appStyles.Content}>
          {hasLoaded ? <>{mainProfile}</> : <Asset spinner />}
        </Container>
      </Col>
      <Col className="py-2 p-0 p-lg-2" lg={12}>
        <Container className={appStyles.Content}>
          {hasLoaded ? <>{profileBio}</> : <Asset spinner />}
        </Container>
      </Col>
      <Col lg={6} className=" d-lg-block p-0 p-lg-2">
        <Container className={appStyles.Content}>
          {hasLoaded ? <>{mainProfilePosts}</> : <Asset spinner />}
        </Container>
      </Col>
      <Col lg={6} className=" d-lg-block p-0 p-lg-2">
        <Container className={appStyles.Content}>
          {hasLoaded ? <>{mainProfileVideos}</> : <Asset spinner />}
        </Container>
      </Col>
    </Row>
  );
}

export default ProfilePage;
