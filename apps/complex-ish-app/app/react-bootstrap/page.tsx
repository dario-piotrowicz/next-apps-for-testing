/* eslint-disable @next/next/no-img-element */
"use client";

import * as React from "react";
import styles from "./page.module.css";

import { Carousel, Spinner, Button, SSRProvider } from "react-bootstrap";

import * as ReactBootstrap from 'react-bootstrap';

export const runtime = "edge";

export default function ReactBootstrapPage() {
  console.log(typeof ReactBootstrap);

  return (
    <SSRProvider>
      <div className={styles.container}>
        <div className={styles.item}>
          <Button variant="outline-primary">Primary</Button>
          <Button variant="outline-secondary">Secondary</Button>
          <Button variant="outline-success">Success</Button>
          <Button variant="outline-warning">Warning</Button>
          <Button variant="outline-danger">Danger</Button>
          <Button variant="outline-info">Info</Button>
          <Button variant="outline-light">Light</Button>
          <Button variant="outline-dark">Dark</Button>
        </div>

        <div className={styles.item}>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block"
                style={{ height: "25rem" }}
                src="api/og/"
                alt="First slide"
              />
              <Carousel.Caption>
                <br />
                <br />
                <p style={{ color: "black" }}>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block"
                style={{ height: "25rem" }}
                src="api/og/"
                alt="Second slide"
              />

              <Carousel.Caption>
                <br />
                <br />
                <p style={{ color: "black" }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block"
                style={{ height: "25rem" }}
                src="api/og/"
                alt="Third slide"
              />

              <Carousel.Caption>
                <br />
                <br />
                <p style={{ color: "black" }}>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>

        <div className={styles.item}>
          <Spinner animation="border" variant="primary" />
          <Spinner animation="border" variant="secondary" />
          <Spinner animation="border" variant="success" />
          <Spinner animation="border" variant="danger" />
          <Spinner animation="border" variant="warning" />
          <Spinner animation="border" variant="info" />
          <Spinner animation="border" variant="light" />
          <Spinner animation="border" variant="dark" />
          <Spinner animation="grow" variant="primary" />
          <Spinner animation="grow" variant="secondary" />
          <Spinner animation="grow" variant="success" />
          <Spinner animation="grow" variant="danger" />
          <Spinner animation="grow" variant="warning" />
          <Spinner animation="grow" variant="info" />
          <Spinner animation="grow" variant="light" />
          <Spinner animation="grow" variant="dark" />
        </div>
      </div>
    </SSRProvider>
  );
}
