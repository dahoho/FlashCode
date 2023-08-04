"use client";

import { Container } from "@/components/organisms/Container";
import { FlashCard } from "@/components/organisms/FlashCard/FlashCard";

import { Progress } from "@nextui-org/react";

const String = () => {
  return (
    <Container>
      <FlashCard />
      <Progress className="mt-4" aria-label="Loading..." size="sm" value={40} />
    </Container>
  );
};

export default String;
