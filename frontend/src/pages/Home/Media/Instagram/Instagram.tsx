import instagramPostImg from "../../../../assets/img/instagramPost.jpeg";
import { useTranslation } from "react-i18next";
import styles from "./Instagram.module.css";
import { ArrowCommon } from "../../../../assets/icons";

function Instagram() {
  const posts = [
    {
      id: 1,
      image: instagramPostImg,
    },
    {
      id: 2,
      image: instagramPostImg,
    },
    {
      id: 3,
      image: instagramPostImg,
    },
    {
      id: 4,
      image: instagramPostImg,
    },
    {
      id: 5,
      image: instagramPostImg,
    },
    {
      id: 6,
      image: instagramPostImg,
    },
  ];

  const { t } = useTranslation("home");

  return (
    <div className={styles.instagram}>
      <h4 className={styles.instagram__title}>{t("media.instagram")}</h4>
      <div className={styles.instagram__posts}>
        <div className={styles["instagram__posts-container1"]}>
          {posts.map((post) => (
            <div key={post.id} className={styles.instagram__post}>
              <img
                className={styles["instagram__post-img"]}
                src={post.image}
                alt="instagramPostImg"
              />
            </div>
          ))}
        </div>
        <div className={styles["instagram__posts-container2"]}>
          {posts.map((post) => (
            <div key={post.id} className={styles.instagram__post}>
              <img
                className={styles["instagram__post-img"]}
                src={post.image}
                alt="instagramPostImg"
              />
            </div>
          ))}
        </div>
      </div>
      <div className={styles.instagram__more}>
        {t("media.instagramMore")}
        <ArrowCommon className={styles["instagram__more-arrow"]} />
      </div>
    </div>
  );
}

export default Instagram;
