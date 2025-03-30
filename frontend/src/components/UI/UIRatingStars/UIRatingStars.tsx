import clsx from "clsx";
import { StarIcon } from "../../../assets/icons";
import styles from "./UIRatingStars.module.css";

interface IRatingStarsProps {
  rating: number;
  className?: string;
  starSize?: string;
}

function UIRatingStars({ rating, className, starSize }: IRatingStarsProps) {
  return (
    <div className={clsx(styles.stars, className)}>
      {Array.from({ length: 5 }).map((_, index) => (
        <StarIcon
          key={index}
          className={clsx(
            styles.star,
            index + 1 <= Math.round(rating) && styles.star_active,
          )}
          width={starSize}
        />
      ))}
    </div>
  );
}

export default UIRatingStars;
