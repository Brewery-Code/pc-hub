import clsx from "clsx";
import { StarIcon } from "../../../assets/icons";
import styles from "./UIRatingStars.module.css";

interface IRatingStarsProps {
  rating: number;
  className?: string;
}

function UIRatingStars({ rating, className }: IRatingStarsProps) {
  return (
    <div className={clsx(styles.stars, className)}>
      {Array.from({ length: 5 }).map((_, index) => (
        <StarIcon
          key={index}
          className={clsx(
            styles["star"],
            index + 1 <= Math.round(rating) && styles.star_active,
          )}
        />
      ))}
    </div>
  );
}

export default UIRatingStars;
