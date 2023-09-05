import { CSSProperties, Key } from "react";

const createBodyPart = (styles: CSSProperties | undefined, key: Key | null | undefined) => (
  <div
    style={{
      position: "absolute",
      ...styles,
    }}
    data-testid={`${key}`}
    role="body-part"
    key={key}
  />
);

const commonStyles = {
  width: "10px",
  height: "100px",
  background: "black",
};

const HEAD = createBodyPart(
  {
    width: "70px",
    height: "70px",
    borderRadius: "100%",
    border: "10px solid black",
    top: "50px",
    right: "-30px",
  },
  "head"
);

const BODY = createBodyPart(
  {
    ...commonStyles,
    top: "120px",
    right: 0,
  },
  "body"
);

const RIGHT_ARM = createBodyPart(
  {
    ...commonStyles,
    top: "150px",
    right: "-100px",
    rotate: "-30deg",
    transformOrigin: "left bottom",
  },
  "right-arm"
);

const LEFT_ARM = createBodyPart(
  {
    ...commonStyles,
    top: "150px",
    right: "10px",
    rotate: "30deg",
    transformOrigin: "right bottom",
  },
  "left-arm"
);

const RIGHT_LEG = createBodyPart(
  {
    ...commonStyles,
    top: "210px",
    right: "-90px",
    rotate: "60deg",  
    transformOrigin: "left bottom",
  },
  "right-leg"
);

const LEFT_LEG = createBodyPart(
  {
    ...commonStyles,
    top: "210px",
    right: 0,
    rotate: "-60deg",
    transformOrigin: "right bottom",
  },
  "left-leg"
);

const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG];

type HangmanDrawingProps = {
  numberOfGuesses: number;
};

export function HangmanDrawing({ numberOfGuesses }: HangmanDrawingProps) {
  return (
    <div className="initial-drawing">
      <div className="initial-drawing__vertical_top_line" />
      <div className="initial-drawing__horisontal_top_line" />
      <div className="initial-drawing__vertical_line" />
      <div className="initial-drawing__horisontal_bottom_line" />
      {BODY_PARTS.slice(0, numberOfGuesses)}
    </div>
  );
}
