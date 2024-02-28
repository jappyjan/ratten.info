import type { RegisteredComponent } from "@builder.io/sdk-qwik";
import {
  PageGridRegistryDefinition,
  InstructionsRegistryDefinition,
  PageHeadlineRegistryDefinition,
  ExpandableImageRegistryDefinition,
  TextRegistryDefinition,
  NewsRegistryDefinition,
  TLDRRegistryDefinition,
  CardRegistryDefinition,
} from "@jappyjan/qwik-jminimal";
import { LogoRegistryDefinition } from "./logo/logo";

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
