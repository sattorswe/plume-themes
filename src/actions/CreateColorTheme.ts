import { buildConfig } from "@/BuildConfig.ts";
import { commonSyntaxTokenColors } from "@/editor/CommonSyntaxTokenColors.ts";
import { editorBracketColors } from "@/editor/EditorBracketColors.ts";
import { editorGutterColors } from "@/editor/EditorGutterColors.ts";
import { editorSurfaceColors } from "@/editor/EditorSurfaceColors.ts";
import { editorWidgetColors } from "@/editor/EditorWidgetColors.ts";
import { phpSyntaxTokenColors } from "@/editor/PhpSyntaxTokenColors.ts";
import { typeScriptSyntaxTokenColors } from "@/editor/TypeScriptSyntaxTokenColors.ts";
import type { ColorTheme } from "@/types/ColorThemeTypes.ts";
import type { ThemeVariant } from "@/types/ThemeVariantTypes.ts";
import { activityBarColors } from "@/workbench/ActivityBarColors.ts";
import { badgeColors } from "@/workbench/BadgeColors.ts";
import { buttonColors } from "@/workbench/ButtonColors.ts";
import { inputColors } from "@/workbench/InputColors.ts";
import { listColors } from "@/workbench/ListColors.ts";
import { notificationColors } from "@/workbench/NotificationColors.ts";
import { panelColors } from "@/workbench/PanelColors.ts";
import { quickInputColors } from "@/workbench/QuickInputColors.ts";
import { sashColors } from "@/workbench/SashColors.ts";
import { scrollbarColors } from "@/workbench/ScrollbarColors.ts";
import { sideBarColors } from "@/workbench/SideBarColors.ts";
import { statusBarColors } from "@/workbench/StatusBarColors.ts";
import { terminalColors } from "@/workbench/TerminalColors.ts";
import { titleBarColors } from "@/workbench/TitleBarColors.ts";
import { treeColors } from "@/workbench/TreeColors.ts";

export const createColorTheme = ({ name, type, palette }: ThemeVariant): ColorTheme => ({
  $schema: buildConfig.schema,
  name,
  type,
  semanticHighlighting: false,
  colors: {
    ...editorSurfaceColors(palette),
    ...editorGutterColors(palette),
    ...editorBracketColors(palette),
    ...editorWidgetColors(palette),
    ...sideBarColors(palette),
    ...activityBarColors(palette),
    ...titleBarColors(palette),
    ...statusBarColors(palette),
    ...treeColors(palette),
    ...sashColors(palette),
    ...scrollbarColors(palette),
    ...quickInputColors(palette),
    ...listColors(palette),
    ...notificationColors(palette),
    ...buttonColors(palette),
    ...inputColors(palette),
    ...badgeColors(palette),
    ...panelColors(palette),
    ...terminalColors(palette),
  },
  tokenColors: [
    ...commonSyntaxTokenColors(palette),
    ...phpSyntaxTokenColors(palette),
    ...typeScriptSyntaxTokenColors(palette),
  ],
});
