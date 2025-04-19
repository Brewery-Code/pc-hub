import { useTranslation } from "react-i18next";
import { IProduct } from "../../../store/product/product.slice";
import ProductSmall from "../ProductSmall/ProductSmall";
import styles from "./Credit.module.css";
import { UIButton } from "../../../components/UI";
import {
  ArrowBold,
  MonobankIcon,
  OschadbankIcon,
  PrivateBankIcon,
} from "../../../assets/icons";
import { useRef, useState } from "react";
import clsx from "clsx";

interface ICreditProps {
  product: IProduct;
  addProductToCart: () => void;
}

interface IBank {
  conditionRef: React.RefObject<HTMLUListElement>;
  isConditionMenuOpen: boolean;
  deadlineRef: React.RefObject<HTMLUListElement>;
  isDeadlineMenuOpen: boolean;
  name: string;
  conditions: string;
  deadline: number;
  icon: JSX.Element;
}

function Credit({ product, addProductToCart }: ICreditProps) {
  const { t } = useTranslation("product");

  const [banksList, setBanksList] = useState<IBank[]>([
    {
      conditionRef: useRef<HTMLUListElement>(null),
      deadlineRef: useRef<HTMLUListElement>(null),
      isConditionMenuOpen: false,
      isDeadlineMenuOpen: false,
      name: "privateBank",
      conditions: "Оплата частинами",
      deadline: 3,
      icon: <PrivateBankIcon className={styles.bank__icon} />,
    },
    {
      conditionRef: useRef<HTMLUListElement>(null),
      deadlineRef: useRef<HTMLUListElement>(null),
      isConditionMenuOpen: false,
      isDeadlineMenuOpen: false,
      name: "monobank",
      conditions: "Оплата частинами",
      deadline: 3,
      icon: <MonobankIcon className={styles.bank__icon} />,
    },
    {
      conditionRef: useRef<HTMLUListElement>(null),
      deadlineRef: useRef<HTMLUListElement>(null),
      isConditionMenuOpen: false,
      isDeadlineMenuOpen: false,
      name: "oschadbank",
      conditions: "Оплата частинами",
      deadline: 3,
      icon: <OschadbankIcon className={styles.bank__icon} />,
    },
  ]);

  const handleBank = (
    name: string,
    isConditionMenuOpen?: boolean,
    isDeadlineMenuOpen?: boolean,
    conditions?: string,
    deadline?: number,
  ) => {
    setBanksList((prevState) =>
      prevState.map((bank) =>
        bank.name === name
          ? {
              ...bank,
              ...(conditions !== undefined && { conditions }),
              ...(deadline !== undefined && { deadline }),
              ...(isConditionMenuOpen !== undefined && { isConditionMenuOpen }),
              ...(isDeadlineMenuOpen !== undefined && { isDeadlineMenuOpen }),
            }
          : bank,
      ),
    );
  };

  return (
    <div className={styles.credit}>
      <div className={styles.credit__block}>
        <h4 className={styles.credit__title}>{t("credit.title")}</h4>
        <ul className={styles.credit__list}>
          {banksList.map((bank) => (
            <>
              <li className={styles.credit__item} key={bank.name}>
                <div className={styles.bank}>
                  <div className={styles.credit__subtitle}>
                    {t("credit.creditor")}
                  </div>
                  <div className={styles.bank__logo}>
                    {bank.icon}
                    <div className={styles.bank__name}>
                      {t(`credit.${bank.name}`)}
                    </div>
                  </div>
                </div>
                <button className={clsx(styles.credit__more, "only-mobile")}>
                  {t("credit.termsAndConditions")}
                </button>
                <div className={styles.conditions}>
                  <div className={styles.credit__subtitle}>
                    {t("credit.conditions")}
                  </div>
                  <div className={styles.menu}>
                    <div
                      className={styles.menu__active}
                      onClick={() =>
                        handleBank(bank.name, !bank.isConditionMenuOpen)
                      }
                    >
                      {bank.conditions}
                      <ArrowBold className={styles.menu__arrow} />
                    </div>
                    <ul
                      className={clsx(
                        styles.menu__list,
                        bank.isConditionMenuOpen && styles.menu__list_active,
                      )}
                      ref={bank.conditionRef}
                      style={{
                        maxHeight: bank.isConditionMenuOpen
                          ? `${100}px`
                          : "0px",
                      }}
                    >
                      {bank.conditions !==
                        t("credit.paymentInInstallments") && (
                        <li
                          className={styles.menu__item}
                          onClick={() =>
                            handleBank(
                              bank.name,
                              false,
                              undefined,
                              t("credit.paymentInInstallments"),
                            )
                          }
                        >
                          {t("credit.paymentInInstallments")}
                        </li>
                      )}
                      {bank.conditions !== t("credit.commonCredit") && (
                        <li
                          className={styles.menu__item}
                          onClick={() =>
                            handleBank(
                              bank.name,
                              false,
                              undefined,
                              t("credit.commonCredit"),
                            )
                          }
                        >
                          {t("credit.commonCredit")}
                        </li>
                      )}
                    </ul>
                  </div>
                </div>
                <div className={styles.deadline}>
                  <div className={styles.credit__subtitle}>
                    {t("credit.deadline")}
                  </div>
                  <div className={styles.menu}>
                    <div
                      className={styles.menu__active}
                      onClick={() =>
                        handleBank(
                          bank.name,
                          undefined,
                          !bank.isDeadlineMenuOpen,
                        )
                      }
                    >
                      {bank.deadline} {t("credit.month")}
                      <ArrowBold className={styles.menu__arrow} />
                    </div>
                    <ul
                      className={clsx(
                        styles.menu__list,
                        bank.isDeadlineMenuOpen && styles.menu__list_active,
                      )}
                      ref={bank.deadlineRef}
                      style={{
                        maxHeight: bank.isDeadlineMenuOpen ? `${100}px` : "0px",
                      }}
                    >
                      {[3, 6, 9, 12].map((month) =>
                        bank.deadline !== month ? (
                          <li
                            key={month}
                            className={styles.menu__item}
                            onClick={() =>
                              handleBank(
                                bank.name,
                                undefined,
                                false,
                                undefined,
                                month,
                              )
                            }
                          >
                            {month} {t("credit.month")}
                          </li>
                        ) : null,
                      )}
                    </ul>
                  </div>
                </div>
                <div className={styles.installment}>
                  <div className={styles.credit__subtitle}>
                    {t("credit.installment")}
                  </div>
                  <div className={styles.installment__amount}>
                    0 {t("credit.currency")}
                  </div>
                </div>
                <div className={styles.monthly}>
                  <div className={styles.credit__subtitle}>
                    {t("credit.installment")}
                  </div>
                  <div className={styles.monthly__amount}>
                    {Math.round(product.price / bank.deadline)}{" "}
                    {t("credit.currency")}
                  </div>
                </div>
                <UIButton
                  color="primary"
                  style="filled"
                  className={styles.credit__buy}
                >
                  {t("credit.buy")}
                </UIButton>
                <button className={clsx(styles.credit__more, "only-desktop")}>
                  {t("credit.termsAndConditions")}
                </button>
              </li>
              <div className={styles.credit__line}></div>
            </>
          ))}
        </ul>
      </div>
      <ProductSmall
        addProductToCart={addProductToCart}
        product={product}
        className={styles.credit__product}
      />
    </div>
  );
}

export default Credit;
