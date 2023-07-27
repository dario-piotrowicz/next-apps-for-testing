"use client";

import * as React from "react";
import styles from "./page.module.css";
import { Breadcrumb, Button, ColorPicker, DatePicker, Table } from "antd";

export const runtime = "edge";

export default function AntDesignPage() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <DatePicker />
        <Button type="primary">Primary Button</Button>
      </div>

      <div className={styles.item}>
        <Table dataSource={dataSource} columns={columns} />
      </div>

      <div className={styles.item}>
        <Breadcrumb
          items={[
            {
              title: "Home",
            },
            {
              title: <a href="">Application Center</a>,
            },
            {
              title: <a href="">Application List</a>,
            },
            {
              title: "An Application",
            },
          ]}
        />
      </div>

      <div className={styles.item}>
        <ColorPicker showText />
        <ColorPicker
          showText={(color) => <span>Custom Text ({color.toHexString()})</span>}
        />
      </div>
    </div>
  );
}

const dataSource = [
  {
    key: "1",
    name: "Mike",
    age: 32,
    address: "10 Downing Street",
  },
  {
    key: "2",
    name: "John",
    age: 42,
    address: "10 Downing Street",
  },
];

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
];
