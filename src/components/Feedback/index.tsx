import React, { ReactNode, useState } from "react";
import styles from "./styles.module.css";

export interface FeedbackProps {
  title?: ReactNode;
  description?: ReactNode;
  yes?: ReactNode;
  no?: ReactNode;
  result?: ReactNode;
}

export enum PageFeedbackResult {
  Unuseful,
  Useful,
}

export function sendGtmFeedback(props: {
  result: PageFeedbackResult;
}) {
  if (typeof window !== 'undefined' && "dataLayer" in window) {
    const dataLayer = window['dataLayer'] as any[];
    dataLayer.push?.({
      event: "page_usefulness",
      value: props.result,
    });
  } else {
    console.error("Unable to add feedback to GTM as window or window.dataLayer does not exist");
  }
}

export default function Feedback(props: FeedbackProps) {
  const [sent, setSent] = useState(false);

  function sendFeedback(result: PageFeedbackResult) {
    sendGtmFeedback({ result });
    setSent(true);
  }

  return (
    <div className={styles.feedback} id="feedback">
      <div className={styles.feedback__title}>{props.title ?? 'Was this page helpful?'}</div>
      {!sent && (
        <div className={styles.feedback__buttons}>
          <button className={styles.feedback__button} onClick={() => sendFeedback(PageFeedbackResult.Useful)}>
            {props.yes ?? '👍 Yes, helpful'}
          </button>
          <button className={styles.feedback__button} onClick={() => sendFeedback(PageFeedbackResult.Unuseful)}>
            {props.no ?? '👎 No'}
          </button>
        </div>
      )}
      {sent && (
        <div className={styles.feedback__result}>{props.result ?? 'Thanks for your feedback'}</div>
      )}
    </div>
  );
}