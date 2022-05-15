import { ReactComponent as StarFull } from "../../assets/star-full.svg";
import { ReactComponent as StarHalf } from "../../assets/star-half.svg";
import { ReactComponent as StarEmpty } from "../../assets/star-empty.svg";

import "./styles.css";

type Props = {
  score: number;
};

type StartProps = {
  fill: number;
};

// EX:
// getFills(3.5) => [1, 1, 1, 0.5, 0]
// getFills(4.1) => [1, 1, 1, 1, 0.5]
function getFills(score: number) {
  const fills = [0, 0, 0, 0, 0];

  const integerPart = Math.floor(score);

  for (let i = 0; i < integerPart; i++) {
    fills[i] = 1;
  }

  const diff = score - integerPart;
  if (diff > 0) {
    fills[integerPart] = 0.5;
  }

  return fills;
}

function Star({ fill }: StartProps) {
  return fill === 0 ? <StarEmpty /> : fill === 1 ? <StarFull /> : <StarHalf />;
}

export function MovieStars({ score }: Props) {
  const fills = getFills(score);

  return (
    <div className="dsmovie-stars-container">
      <Star fill={fills[0]} />
      <Star fill={fills[1]} />
      <Star fill={fills[2]} />
      <Star fill={fills[3]} />
      <Star fill={fills[4]} />
    </div>
  );
}
