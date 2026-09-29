import type { ThemePalette } from "@/types/PaletteTypes.ts";
import type { NotificationColorId, WorkbenchColors } from "@/types/WorkbenchColorTypes.ts";

export const notificationColors = (palette: ThemePalette): WorkbenchColors<NotificationColorId> => ({
  "notifications.background": palette.surface,
  "notifications.foreground": palette.text,
  "notifications.border": palette.divider,
  "notificationToast.border": palette.transparent,
  "notificationCenter.border": palette.transparent,
  "notificationCenterHeader.background": palette.surface,
  "notificationCenterHeader.foreground": palette.text,
  "notificationLink.foreground": palette.accent,
  "notificationsInfoIcon.foreground": palette.accent,
  "notificationsWarningIcon.foreground": palette.warning,
  "notificationsErrorIcon.foreground": palette.error,
});
