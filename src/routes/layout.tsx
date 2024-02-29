import { component$, Slot, useVisibleTask$ } from "@builder.io/qwik";
import "@fontsource/libre-barcode-128-text/400.css";
import "@fontsource-variable/montserrat/wght.css";
import styles from "./layout.module.css";
import { inject as injectVercelAnalytics } from "@vercel/analytics";
import { Link } from "@builder.io/qwik-city";
import { Logo } from "~/components/logo/logo";
import { Footer } from "~/components/footer/footer";
import { Navigation } from "~/components/shared/navigation/navigation";
import { Search } from "~/components/shared/search/search";

export default component$(() => {
  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(() => {
    injectVercelAnalytics();
  });

  return (
    <>
      <div class={styles.appContainer}>
        <Link href="/" class={styles.logo}>
          <Logo />
        </Link>
        <Navigation class={styles.navigation} />
        <Search class={styles.search} />
        <main class={styles.main}>
          <Slot />
        </main>
      </div>
      <Footer />
    </>
  );
});
