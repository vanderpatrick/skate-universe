import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import styles from "../../styles/SignInUpForm.module.css";
import appStyles from "../../App.module.css";

function About() {
  return (
    <Row className={styles.Row}>
      <Col className="my-auto p-0 p-md-2">
        <Container className={`${appStyles.Content} ${styles.Border} text-center  p-5 `}>
          <h1 className={styles.Header}>Welcome user</h1>
          <p>We from skate universe would like to thank you for your visit,</p>
          <p>This platform was developed to make an interresting and focused social media application </p>
          <p>If you have encounterd any issues whatsoever with your experience here please contact us in the email bellow</p>
          <p>vanderflierp@gmail.com</p>
        </Container>
      </Col>
    </Row>
  );
}

export default About;
