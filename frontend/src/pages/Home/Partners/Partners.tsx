import { useTranslation } from "react-i18next";
import styles from "./Partners.module.css";
import { ArrowCommon } from "../../../assets/icons";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../../store/store";
import { useEffect } from "react";
import { fetchPartners } from "../../../store/partners/partners.slice";

function Partners() {
  const { t } = useTranslation("home");
  const { status, partners } = useSelector(
    (state: RootState) => state.partners,
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchPartners());
    }
  }, [dispatch, status]);

  return (
    <section className={styles.partners}>
      <div className="partners__container">
        <div className={styles.partners__body}>
          <h4 className={styles.partners__title}>{t("partners.title")}</h4>
          <ul className={styles.partners__list}>
            {partners.map((partner, index) => (
              <li key={index} className={styles.partners__item}>
                <img
                  className={styles["partners__item-img"]}
                  src={partner.image}
                  alt="partnerImg"
                />
              </li>
            ))}
          </ul>
          <button className={styles.partners__more}>
            {t("partners.allPartners")}
            <ArrowCommon className={styles["partners__more-arrow"]} />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Partners;
