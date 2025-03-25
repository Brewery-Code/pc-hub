import { useTranslation } from "react-i18next";
import { IProduct } from "../../../store/product/product.slice";
import ProductSmall from "../ProductSmall/ProductSmall";
import styles from "./Credit.module.css";
import { UIButton } from "../../../components/UI";
import {
  ArrowBold,
  MonobankIcon,
  PrivateBankIcon,
} from "../../../assets/icons";
import { useEffect, useRef, useState } from "react";
import clsx from "clsx";

interface ICreditProps {
  product: IProduct;
}

function Credit({ product }: ICreditProps) {
  const [privateBank, setPrivateBank] = useState({
    isConditionMenuOpen: false,
    isDeadlineMenuOpen: false,
    name: "privatebank",
    conditions: "Оплата частинами",
    deadline: 3,
  });

  const [monobank, setMonobank] = useState({
    isMenuOpen: false,
    name: "monobank",
    conditions: "Оплата частинами",
    deadline: 3,
  });

  const [oschadbank, setOschadbank] = useState({
    isMenuOpen: false,
    name: "oschadbank",
    conditions: "Оплата частинами",
    deadline: 3,
  });

  const privateDeadlineRef = useRef<HTMLUListElement>(null);
  const [privateDeadlineHeight, setPrivateDeadlineHeight] = useState(0);
  useEffect(() => {
    if (privateDeadlineRef.current) {
      setPrivateDeadlineHeight(privateDeadlineRef.current.scrollHeight);
    }
  }, [privateBank.isDeadlineMenuOpen]);

  const privateConditionRef = useRef<HTMLUListElement>(null);
  const [privateConditionHeight, setPrivateConditionHeight] = useState(0);
  useEffect(() => {
    if (privateConditionRef.current) {
      setPrivateConditionHeight(privateConditionRef.current.scrollHeight);
    }
  }, [privateBank.isConditionMenuOpen]);

  const handleBank = (
    name: string,
    isConditionMenuOpen?: boolean,
    isDeadlineMenuOpen?: boolean,
    conditions?: string,
    deadline?: number,
  ) => {
    switch (name) {
      case privateBank.name:
        setPrivateBank((prev) => ({
          ...prev,
          ...(conditions !== undefined && { conditions }),
          ...(deadline !== undefined && { deadline }),
          ...(isConditionMenuOpen !== undefined && { isConditionMenuOpen }),
          ...(isDeadlineMenuOpen !== undefined && { isDeadlineMenuOpen }),
        }));
        break;
      case monobank.name:
        setMonobank((prev) => ({
          ...prev,
          ...(conditions !== undefined && { conditions }),
          ...(deadline !== undefined && { deadline }),
          ...(isConditionMenuOpen !== undefined && { isConditionMenuOpen }),
          ...(isDeadlineMenuOpen !== undefined && { isDeadlineMenuOpen }),
        }));
        break;
      case oschadbank.name:
        setOschadbank((prev) => ({
          ...prev,
          ...(conditions !== undefined && { conditions }),
          ...(deadline !== undefined && { deadline }),
          ...(isConditionMenuOpen !== undefined && { isConditionMenuOpen }),
          ...(isDeadlineMenuOpen !== undefined && { isDeadlineMenuOpen }),
        }));
        break;
    }
  };

  const { t } = useTranslation("product");

  return (
    <div className={styles.credit}>
      <div className={styles.credit__block}>
        <h4 className={styles.credit__title}>{t("credit.title")}</h4>
        <ul className={styles.credit__list}>
          <li className={styles.credit__item}>
            <div className={styles.bank}>
              <div className={styles.credit__subtitle}>
                {t("credit.creditor")}
              </div>
              <div className={styles.bank__logo}>
                <PrivateBankIcon className={styles.bank__icon} />
                <div className={styles.bank__name}>
                  {t("credit.privateBank")}
                </div>
              </div>
            </div>
            <div className={styles.conditions}>
              <div className={styles.credit__subtitle}>
                {t("credit.conditions")}
              </div>
              <div className={styles.menu}>
                <div
                  className={styles.menu__active}
                  onClick={() =>
                    handleBank(
                      privateBank.name,
                      !privateBank.isConditionMenuOpen,
                    )
                  }
                >
                  {privateBank.conditions}
                  <ArrowBold className={styles.menu__arrow} />
                </div>
                <ul
                  className={clsx(
                    styles.menu__list,
                    privateBank.isConditionMenuOpen && styles.menu__list_active,
                  )}
                  ref={privateConditionRef}
                  style={{
                    maxHeight: privateBank.isConditionMenuOpen
                      ? `${privateConditionHeight}px`
                      : "0px",
                  }}
                >
                  {privateBank.conditions !==
                    t("credit.paymentInInstallments") && (
                    <li
                      className={styles.menu__item}
                      onClick={() =>
                        handleBank(
                          privateBank.name,
                          false,
                          undefined,
                          t("credit.paymentInInstallments"),
                        )
                      }
                    >
                      {t("credit.paymentInInstallments")}
                    </li>
                  )}
                  {privateBank.conditions !== t("credit.commonCredit") && (
                    <li
                      className={styles.menu__item}
                      onClick={() =>
                        handleBank(
                          privateBank.name,
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
                      privateBank.name,
                      undefined,
                      !privateBank.isDeadlineMenuOpen,
                    )
                  }
                >
                  {privateBank.deadline} {t("credit.month")}
                  <ArrowBold className={styles.menu__arrow} />
                </div>
                <ul
                  className={clsx(
                    styles.menu__list,
                    privateBank.isDeadlineMenuOpen && styles.menu__list_active,
                  )}
                  ref={privateDeadlineRef}
                  style={{
                    maxHeight: privateBank.isDeadlineMenuOpen
                      ? `${privateDeadlineHeight}px`
                      : "0px",
                  }}
                >
                  {privateBank.deadline !== 3 && (
                    <li
                      className={styles.menu__item}
                      onClick={() =>
                        handleBank(
                          privateBank.name,
                          undefined,
                          false,
                          undefined,
                          3,
                        )
                      }
                    >
                      3 {t("credit.month")}
                    </li>
                  )}
                  {privateBank.deadline !== 6 && (
                    <li
                      className={styles.menu__item}
                      onClick={() =>
                        handleBank(
                          privateBank.name,
                          undefined,
                          false,
                          undefined,
                          6,
                        )
                      }
                    >
                      6 {t("credit.month")}
                    </li>
                  )}
                  {privateBank.deadline !== 9 && (
                    <li
                      className={styles.menu__item}
                      onClick={() =>
                        handleBank(
                          privateBank.name,
                          undefined,
                          false,
                          undefined,
                          9,
                        )
                      }
                    >
                      9 {t("credit.month")}
                    </li>
                  )}
                  {privateBank.deadline !== 12 && (
                    <li
                      className={styles.menu__item}
                      onClick={() =>
                        handleBank(
                          privateBank.name,
                          undefined,
                          false,
                          undefined,
                          12,
                        )
                      }
                    >
                      12 {t("credit.month")}
                    </li>
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
                {Math.round(product.price / privateBank.deadline)}{" "}
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
            <button className={styles.credit__more}>
              {t("credit.termsAndConditions")}
            </button>
          </li>
          <span className={styles.credit__line}></span>
          <li className={styles.credit__item}>
            <div className={styles.bank}>
              <div className={styles.credit__subtitle}>
                {t("credit.creditor")}
              </div>
              <div className={styles.bank__logo}>
                <MonobankIcon
                  className={clsx(styles.bank__icon, styles.bank__monobank)}
                />
                <div className={styles.bank__name}>{t("credit.monobank")}</div>
              </div>
            </div>
            <div className={styles.conditions}>
              <div className={styles.credit__subtitle}>
                {t("credit.conditions")}
              </div>
              <div className={styles.menu}>
                <div
                  className={styles.menu__active}
                  onClick={() =>
                    handleBank(
                      privateBank.name,
                      !privateBank.isConditionMenuOpen,
                    )
                  }
                >
                  {privateBank.conditions}
                  <ArrowBold className={styles.menu__arrow} />
                </div>
                <ul
                  className={clsx(
                    styles.menu__list,
                    privateBank.isConditionMenuOpen && styles.menu__list_active,
                  )}
                  ref={privateConditionRef}
                  style={{
                    maxHeight: privateBank.isConditionMenuOpen
                      ? `${privateConditionHeight}px`
                      : "0px",
                  }}
                >
                  {privateBank.conditions !==
                    t("credit.paymentInInstallments") && (
                    <li
                      className={styles.menu__item}
                      onClick={() =>
                        handleBank(
                          privateBank.name,
                          false,
                          undefined,
                          t("credit.paymentInInstallments"),
                        )
                      }
                    >
                      {t("credit.paymentInInstallments")}
                    </li>
                  )}
                  {privateBank.conditions !== t("credit.commonCredit") && (
                    <li
                      className={styles.menu__item}
                      onClick={() =>
                        handleBank(
                          privateBank.name,
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
                      privateBank.name,
                      undefined,
                      !privateBank.isDeadlineMenuOpen,
                    )
                  }
                >
                  {privateBank.deadline} {t("credit.month")}
                  <ArrowBold className={styles.menu__arrow} />
                </div>
                <ul
                  className={clsx(
                    styles.menu__list,
                    privateBank.isDeadlineMenuOpen && styles.menu__list_active,
                  )}
                  ref={privateDeadlineRef}
                  style={{
                    maxHeight: privateBank.isDeadlineMenuOpen
                      ? `${privateDeadlineHeight}px`
                      : "0px",
                  }}
                >
                  {privateBank.deadline !== 3 && (
                    <li
                      className={styles.menu__item}
                      onClick={() =>
                        handleBank(
                          privateBank.name,
                          undefined,
                          false,
                          undefined,
                          3,
                        )
                      }
                    >
                      3 {t("credit.month")}
                    </li>
                  )}
                  {privateBank.deadline !== 6 && (
                    <li
                      className={styles.menu__item}
                      onClick={() =>
                        handleBank(
                          privateBank.name,
                          undefined,
                          false,
                          undefined,
                          6,
                        )
                      }
                    >
                      6 {t("credit.month")}
                    </li>
                  )}
                  {privateBank.deadline !== 9 && (
                    <li
                      className={styles.menu__item}
                      onClick={() =>
                        handleBank(
                          privateBank.name,
                          undefined,
                          false,
                          undefined,
                          9,
                        )
                      }
                    >
                      9 {t("credit.month")}
                    </li>
                  )}
                  {privateBank.deadline !== 12 && (
                    <li
                      className={styles.menu__item}
                      onClick={() =>
                        handleBank(
                          privateBank.name,
                          undefined,
                          false,
                          undefined,
                          12,
                        )
                      }
                    >
                      12 {t("credit.month")}
                    </li>
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
                {Math.round(product.price / privateBank.deadline)}{" "}
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
            <button className={styles.credit__more}>
              {t("credit.termsAndConditions")}
            </button>
          </li>
          <span className={styles.credit__line}></span>
          <li className={styles.credit__item}>
            <div className={styles.bank}>
              <div className={styles.credit__subtitle}>
                {t("credit.creditor")}
              </div>
              <div className={styles.bank__logo}>
                <PrivateBankIcon className={styles.bank__icon} />
                <div className={styles.bank__name}>
                  {t("credit.privateBank")}
                </div>
              </div>
            </div>
            <div className={styles.conditions}>
              <div className={styles.credit__subtitle}>
                {t("credit.conditions")}
              </div>
              <div className={styles.menu}>
                <div
                  className={styles.menu__active}
                  onClick={() =>
                    handleBank(
                      privateBank.name,
                      !privateBank.isConditionMenuOpen,
                    )
                  }
                >
                  {privateBank.conditions}
                  <ArrowBold className={styles.menu__arrow} />
                </div>
                <ul
                  className={clsx(
                    styles.menu__list,
                    privateBank.isConditionMenuOpen && styles.menu__list_active,
                  )}
                  ref={privateConditionRef}
                  style={{
                    maxHeight: privateBank.isConditionMenuOpen
                      ? `${privateConditionHeight}px`
                      : "0px",
                  }}
                >
                  {privateBank.conditions !==
                    t("credit.paymentInInstallments") && (
                    <li
                      className={styles.menu__item}
                      onClick={() =>
                        handleBank(
                          privateBank.name,
                          false,
                          undefined,
                          t("credit.paymentInInstallments"),
                        )
                      }
                    >
                      {t("credit.paymentInInstallments")}
                    </li>
                  )}
                  {privateBank.conditions !== t("credit.commonCredit") && (
                    <li
                      className={styles.menu__item}
                      onClick={() =>
                        handleBank(
                          privateBank.name,
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
                      privateBank.name,
                      undefined,
                      !privateBank.isDeadlineMenuOpen,
                    )
                  }
                >
                  {privateBank.deadline} {t("credit.month")}
                  <ArrowBold className={styles.menu__arrow} />
                </div>
                <ul
                  className={clsx(
                    styles.menu__list,
                    privateBank.isDeadlineMenuOpen && styles.menu__list_active,
                  )}
                  ref={privateDeadlineRef}
                  style={{
                    maxHeight: privateBank.isDeadlineMenuOpen
                      ? `${privateDeadlineHeight}px`
                      : "0px",
                  }}
                >
                  {privateBank.deadline !== 3 && (
                    <li
                      className={styles.menu__item}
                      onClick={() =>
                        handleBank(
                          privateBank.name,
                          undefined,
                          false,
                          undefined,
                          3,
                        )
                      }
                    >
                      3 {t("credit.month")}
                    </li>
                  )}
                  {privateBank.deadline !== 6 && (
                    <li
                      className={styles.menu__item}
                      onClick={() =>
                        handleBank(
                          privateBank.name,
                          undefined,
                          false,
                          undefined,
                          6,
                        )
                      }
                    >
                      6 {t("credit.month")}
                    </li>
                  )}
                  {privateBank.deadline !== 9 && (
                    <li
                      className={styles.menu__item}
                      onClick={() =>
                        handleBank(
                          privateBank.name,
                          undefined,
                          false,
                          undefined,
                          9,
                        )
                      }
                    >
                      9 {t("credit.month")}
                    </li>
                  )}
                  {privateBank.deadline !== 12 && (
                    <li
                      className={styles.menu__item}
                      onClick={() =>
                        handleBank(
                          privateBank.name,
                          undefined,
                          false,
                          undefined,
                          12,
                        )
                      }
                    >
                      12 {t("credit.month")}
                    </li>
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
                {Math.round(product.price / privateBank.deadline)}{" "}
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
            <button className={styles.credit__more}>
              {t("credit.termsAndConditions")}
            </button>
          </li>
          <span className={styles.credit__line}></span>
        </ul>
      </div>
      <ProductSmall product={product} />
    </div>
  );
}

export default Credit;
