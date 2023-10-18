import clsx from "clsx";
import React from "react";
import styles from "./styles.module.css";
import CardListItem, { CardItem } from "./CardListItem";

interface CardListProps {
  items: CardItem[];
}

export default function CardList(props: CardListProps) {
  const { items } = props;

  return (
    <section className="row">
      {items.map((item, index) => (
        <article key={index} className={clsx("col col--6 margin-bottom--lg flex", styles.cardListItem)}>
          <CardListItem item={item} />
        </article>
      ))}
    </section>
  );
}
