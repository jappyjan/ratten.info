import type { RegisteredComponent } from "@builder.io/sdk-qwik";
import { LogoRegistryDefinition } from "./logo/logo";
import { PageGridRegistryDefinition } from "./shared/page-grid/page-grid";
import { CardRegistryDefinition } from "./shared/card/card";
import { InstructionsRegistryDefinition } from "./shared/instructions/instructions";
import { PageHeadlineRegistryDefinition } from "./shared/page-headline/page-headline";
import { ExpandableImageRegistryDefinition } from "./shared/expandable-image/expandable-image";
import { TextRegistryDefinition } from "./shared/text/text";
import { TLDRRegistryDefinition } from "./shared/tldr/tldr";
import { NewsRegistryDefinition } from "./shared/news/news";

/**
 * This array is used to integrate custom components within Builder.
 * https://www.builder.io/c/docs/custom-components-intro
 *
 * These components will be found the "Custom Components"
 * section of Builder's visual editor.
 * You can also turn on "components only mode" to limit
 * editing to only these components.
 * https://www.builder.io/c/docs/guides/components-only-mode
 */

export const CUSTOM_COMPONENTS: RegisteredComponent[] = [
  PageGridRegistryDefinition,
  CardRegistryDefinition,
  InstructionsRegistryDefinition,
  LogoRegistryDefinition,
  PageHeadlineRegistryDefinition,
  ExpandableImageRegistryDefinition,
  TextRegistryDefinition,
  TLDRRegistryDefinition,
  NewsRegistryDefinition,
];
