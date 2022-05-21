import { FC } from "react";
import { Page as PageProps } from "../../../types/types";
import Active from "./Active";
import Next from "./Next";
import Normal from "./Normal";
import Prev from "./Prev";
import PrevNextWrapper from "./PrevNextWrapper";

const Page: FC<PageProps> = ({ value, which }) => {
  switch (which) {
    case "ACTIVE":
      return <Active value={value} />;
    case "NORMAL":
      return <Normal value={value} />;
    case "NEXT":
      return (
        <PrevNextWrapper value={value} rounded="rounded-r-lg">
          <Next />
        </PrevNextWrapper>
      );
    default:
      return (
        <PrevNextWrapper value={value} rounded="rounded-l-lg">
          <Prev />
        </PrevNextWrapper>
      );
  }
};

export default Page;
