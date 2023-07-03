const HEAD = (
  <div
    style={{
      width: "70px",
      height: "70px",
      borderRadius: "100%",
      border: "10px solid black",
      position: "absolute",
      top: "50px",
      right: "-30px",
    }}
    data-testid='head'
    role="body-part"
    key={"head"}
  />
);

const BODY = (
  <div
    style={{
      width: "10px",
      height: "100px",
      background: "black",
      position: "absolute",
      top: "120px",
      right: 0,
    }}
    data-testid='body'
    role="body-part"
    key={"body"}    
  />
);

const RIGHT_ARM = (
  <div
    style={{
      width: "100px",
      height: "10px",
      background: "black",
      position: "absolute",
      top: "150px",
      right: "-100px",
      rotate: "-30deg",
      transformOrigin: "left bottom",
    }}
    data-testid='right-arm'
    role="body-part"
    key={"right-arm"}
  />
);

const LEFT_ARM = (
  <div
    style={{
      width: "100px",
      height: "10px",
      background: "black",
      position: "absolute",
      top: "150px",
      right: "10px",
      rotate: "30deg",
      transformOrigin: "right bottom",
    }}
    data-testid='left-arm'
    role="body-part"
    key={"left-arm"}
  />
);

const RIGHT_LEG = (
  <div
    style={{
      width: "100px",
      height: "10px",
      background: "black",
      position: "absolute",
      top: "210px",
      right: "-90px",
      rotate: "60deg",
      transformOrigin: "left bottom",
    }}
    data-testid='right-leg'
    role="body-part"
    key={"right-leg"}
  />
);

const LEFT_LEG = (
  <div
    style={{
      width: "100px",
      height: "10px",
      background: "black",
      position: "absolute",
      top: "210px",
      right: 0,
      rotate: "-60deg",
      transformOrigin: "right bottom",
    }}
    data-testid='left-leg'
    role="body-part"
    key={"left-leg"}
  />
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
