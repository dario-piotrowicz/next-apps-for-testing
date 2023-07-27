"use client";

import * as React from "react";
import styles from "./page.module.css";

import {
  Avatar,
  Grid,
  Loading,
  Progress,
  Button,
  Switch,
  Dropdown,
  Collapse,
  Text,
} from "@nextui-org/react";

import * as NextUI from '@nextui-org/react';

export const runtime = 'edge';

export default function NextUiPage() {
  console.log(typeof NextUI);

  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Grid.Container gap={2}>
          <Grid>
            <Avatar
              squared
              src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
            />
          </Grid>
          <Grid>
            <Avatar squared text="Junior" />
          </Grid>
          <Grid>
            <Avatar
              squared
              src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
            />
          </Grid>
          <Grid>
            <Avatar squared text="Jane" />
          </Grid>
          <Grid>
            <Avatar
              squared
              src="https://i.pravatar.cc/150?u=a04258114e29026702d"
            />
          </Grid>
          <Grid>
            <Avatar squared text="Joe" />
          </Grid>
        </Grid.Container>
      </div>

      <div className={styles.item}>
        <Button>Default</Button>
        <Button disabled>Disabled</Button>
        <Button shadow color="gradient" auto>
          Gradient
        </Button>

        <Button disabled auto bordered color="primary" css={{ px: "$13" }}>
          <Loading color="currentColor" size="sm" />
        </Button>

        <Button disabled auto bordered color="secondary" css={{ px: "$13" }}>
          <Loading type="spinner" color="currentColor" size="sm" />
        </Button>

        <Button disabled auto bordered color="success" css={{ px: "$13" }}>
          <Loading type="points" color="currentColor" size="sm" />
        </Button>

        <Button disabled auto bordered color="warning" css={{ px: "$13" }}>
          <Loading type="points-opacity" color="currentColor" size="sm" />
        </Button>

        <Button bordered color="error" auto>
          Error
        </Button>
      </div>

      <div className={styles.item}>
        <Progress color="primary" value={75} />

        <Progress color="primary" value={55} />

        <Progress color="primary" value={35} />
      </div>

      <div className={styles.item}>
        <Switch initialChecked />

        <Switch squared color="primary" checked={true}>
          Squared option
        </Switch>
      </div>

      <div className={styles.item}>
        <Dropdown>
          <Dropdown.Button flat>Trigger</Dropdown.Button>
          <Dropdown.Menu aria-label="Static Actions">
            <Dropdown.Item key="new">New file</Dropdown.Item>
            <Dropdown.Item key="copy">Copy link</Dropdown.Item>
            <Dropdown.Item key="edit">Edit file</Dropdown.Item>
            <Dropdown.Item key="delete" color="error">
              Delete file
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>

      <div className={styles.item}>
        <Collapse.Group>
          <Collapse title="Option A">
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Text>
          </Collapse>
          <Collapse title="Option B">
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Text>
          </Collapse>
          <Collapse title="Option C">
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Text>
          </Collapse>
        </Collapse.Group>
      </div>
    </div>
  );
}
