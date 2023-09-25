import clsx from "clsx";
import Link from "@docusaurus/Link";
import React, { ReactNode } from "react";
import styles from "./styles.module.css";

export interface EmbedCardProps {
  href: string;
  title: ReactNode;
  description?: ReactNode;
  image?: ReactNode;
  className?: string;
}

export default function EmbedCard(props: EmbedCardProps) {
  return (
    <Link className={clsx(styles.embedCard, props.className)} href={props.href}>
      <div className={clsx("padding--md", styles.embedCard__left)}>
        <div className={styles.embedCard__title}>{props.title}</div>
        {props.description && <div className={styles.embedCard__description}>{props.description}</div>}
        <div className={styles.embedCard__href}>{props.href}</div>
      </div>
      {props.image && (
        <div className={styles.embedCard__image}>
          <div className={styles.embedCard__imageWrapper}>
            <div className={styles.embedCard__imageContent}>
              {props.image}
            </div>
          </div>
        </div>
      )}
    </Link>
  );
}