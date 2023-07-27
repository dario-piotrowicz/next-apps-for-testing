"use client";

import styles from "./page.module.css";

export const runtime = "edge";

import * as Chakra from "@chakra-ui/react";

export default function MaterialUiPage() {
  const toast = Chakra.useToast();

  return (
    <Chakra.ChakraProvider>
      <div className={styles.container}>
        <div className={styles.item}>
          <Chakra.Accordion>
            <Chakra.AccordionItem>
              <h2>
                <Chakra.AccordionButton>
                  <Chakra.Box as="span" flex="1" textAlign="left">
                    Section 1 title
                  </Chakra.Box>
                  <Chakra.AccordionIcon />
                </Chakra.AccordionButton>
              </h2>
              <Chakra.AccordionPanel pb={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </Chakra.AccordionPanel>
            </Chakra.AccordionItem>

            <Chakra.AccordionItem>
              <h2>
                <Chakra.AccordionButton>
                  <Chakra.Box as="span" flex="1" textAlign="left">
                    Section 2 title
                  </Chakra.Box>
                  <Chakra.AccordionIcon />
                </Chakra.AccordionButton>
              </h2>
              <Chakra.AccordionPanel pb={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </Chakra.AccordionPanel>
            </Chakra.AccordionItem>
          </Chakra.Accordion>
        </div>

        <div className={styles.item}>
          <Chakra.RangeSlider w="100%" defaultValue={[30, 80]}>
            <Chakra.RangeSliderTrack bg="red.100">
              <Chakra.RangeSliderFilledTrack bg="tomato" />
            </Chakra.RangeSliderTrack>
            <Chakra.RangeSliderThumb boxSize={6} index={0}>
              <Chakra.Box color="tomato" />
            </Chakra.RangeSliderThumb>
            <Chakra.RangeSliderThumb boxSize={6} index={1}>
              <Chakra.Box color="tomato" />
            </Chakra.RangeSliderThumb>
          </Chakra.RangeSlider>
        </div>

        <div className={styles.item}>
          <Chakra.Button
            onClick={() =>
              toast({
                title: "Account created.",
                description: "We've created your account for you.",
                status: "success",
                duration: 9000,
                isClosable: true,
              })
            }
          >
            Show Toast
          </Chakra.Button>
        </div>
      </div>
    </Chakra.ChakraProvider>
  );
}
