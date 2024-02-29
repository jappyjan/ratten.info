import type { IntrinsicElements } from "@builder.io/qwik";
import { component$ } from "@builder.io/qwik";
import styles from "./footer.module.css";
import classNames from "classnames";
import { DynamicLinkList } from "../shared/dynamic-link-list/dynamic-link-list";

export const Footer = component$<IntrinsicElements["footer"]>((props) => {
  return (
    <footer {...props} class={classNames(styles.container, props.class)}>
      <DynamicLinkList linkModel="footer-link" />
      <p>
        ein Herzensprojekt von Carina Jaap
        <br />
        <br />
        &copy; 2024 Carina Jaap
      </p>
    </footer>
  );
});
