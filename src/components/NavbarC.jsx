import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import { useEffect } from "react";
import { useRef } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useNavigate } from "react-router-dom";
import CarouselItem from "react-bootstrap/esm/CarouselItem";

function NavbarC() {
  const [getNavbarValue, setNavbarValue] = useState(false);
  const navigate = useNavigate();
  const pencet = () => {
    setNavbarValue((getNavbarValue) => !getNavbarValue);
    console.log(getNavbarValue);
  };

  let menuRef = useRef();

  useEffect(() => {
    document.addEventListener("mousedown", (event) => {
      if (!menuRef.current?.contains(event.target)) {
        setNavbarValue(false);
      }
    });
  });

  let isi;
  const searchRef = useRef();

  function cari(e) {
    if (e.keyCode == 13) {
      const keyword = searchRef.current.value;
      // isi = document.getElementById("searchBox").value;
      // console.log(isi);

      navigate(`/Search/${keyword}`);
    }
  }

  // function keren() {
  //   console.log(searchRef);
  // }

  let warnaTombol = getNavbarValue ? "red" : "black";
  let genreContainerOn = getNavbarValue ? "none" : "none";
  return (
    <>
      <Navbar className="bg-body-tertiary ">
        <Container className="d-flex justify-content-between">
          <Navbar.Brand className="fs-3">ANIFLIX</Navbar.Brand>
          <Form.Control
            onClick={() => {
              pencet();
            }}
            onKeyDown={() => {
              cari(event);
            }}
            type="text"
            placeholder="Search"
            className=" mr-sm-2"
            id="searchBox"
            style={{ width: "400px" }}
            ref={searchRef}
          />
          <div className="d-flex mt-2">
            <h2
              onClick={() => {
                navigate("/");
              }}
            >
              <a className="navText " href="">
                Home
              </a>
            </h2>

            <h2 className="ms-4">
              <a className="navText " href="">
                Settings
              </a>
            </h2>
          </div>
        </Container>
      </Navbar>
      <div ref={menuRef} className="genreContainer" style={{ display: genreContainerOn }}>
        <Container>
          <Row>
            <Col className="p-0">
              <div style={{ height: "250px", backgroundColor: "red" }}></div>
            </Col>
            <Col className="p-0">
              <div style={{ height: "250px", backgroundColor: "blue" }}></div>
            </Col>
            <Col className="p-0">
              <div style={{ height: "250px", backgroundColor: "green" }}></div>
            </Col>
          </Row>
          <Row>
            <Col className="p-0">
              <div style={{ height: "250px", backgroundColor: "purple" }}></div>
            </Col>
            <Col className="p-0">
              <div style={{ height: "250px", backgroundColor: "orange" }}></div>
            </Col>
            <Col className="p-0">
              <div style={{ height: "250px", backgroundColor: "yellow" }}></div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default NavbarC;
