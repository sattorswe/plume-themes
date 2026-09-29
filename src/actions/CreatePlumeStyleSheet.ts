import postcss from "postcss";
import { commandPaletteStyles } from "@/styles/CommandPaletteStyles.ts";
import { editorTitleActionStyles } from "@/styles/EditorTitleActionStyles.ts";
import { editorWidgetStyles } from "@/styles/EditorWidgetStyles.ts";
import { explorerSelectionStyles } from "@/styles/ExplorerSelectionStyles.ts";
import { explorerTreeStyles } from "@/styles/ExplorerTreeStyles.ts";
import { extensionEditorStyles } from "@/styles/ExtensionEditorStyles.ts";
import { findWidgetStyles } from "@/styles/FindWidgetStyles.ts";
import { notificationStyles } from "@/styles/NotificationStyles.ts";
import { panelStyles } from "@/styles/PanelStyles.ts";
import { scrollbarStyles } from "@/styles/ScrollbarStyles.ts";
import { settingsEditorStyles } from "@/styles/SettingsEditorStyles.ts";
import { shimmerKeyframes, shimmerStyles } from "@/styles/ShimmerStyles.ts";
import { sideBarActionStyles } from "@/styles/SideBarActionStyles.ts";
import { sideBarViewStyles } from "@/styles/SideBarViewStyles.ts";
import { themeVariableStyles } from "@/styles/ThemeVariableStyles.ts";
import { userInterfaceFontStyles } from "@/styles/UserInterfaceFontStyles.ts";
import { welcomePageStyles } from "@/styles/WelcomePageStyles.ts";
import type { StyleDeclarations, StyleKeyframes, StyleRule } from "@/types/StyleSheetTypes.ts";

const styleKeyframes: readonly StyleKeyframes[] = [...shimmerKeyframes];

const styleRules: readonly StyleRule[] = [
  ...themeVariableStyles,
  ...userInterfaceFontStyles,
  ...sideBarActionStyles,
  ...scrollbarStyles,
  ...editorTitleActionStyles,
  ...explorerTreeStyles,
  ...explorerSelectionStyles,
  ...shimmerStyles,
  ...commandPaletteStyles,
  ...notificationStyles,
  ...sideBarViewStyles,
  ...editorWidgetStyles,
  ...panelStyles,
  ...findWidgetStyles,
  ...settingsEditorStyles,
  ...welcomePageStyles,
  ...extensionEditorStyles,
];

const createDeclarations = (declarations: StyleDeclarations, important: boolean) =>
  Object.entries(declarations).map(([prop, value]) => postcss.decl({ prop, value, important }));

const createRule = ({ selectors, declarations, important = false }: StyleRule) =>
  postcss.rule({ selectors: [...selectors], nodes: createDeclarations(declarations, important) });

const createKeyframes = ({ name, frames }: StyleKeyframes) =>
  postcss.atRule({
    name: "keyframes",
    params: name,
    nodes: Object.entries(frames).map(([selector, declarations]) =>
      postcss.rule({ selector, nodes: createDeclarations(declarations, false) }),
    ),
  });

export const createPlumeStyleSheet = (): string =>
  postcss.root({ nodes: [...styleKeyframes.map(createKeyframes), ...styleRules.map(createRule)] }).toString();
