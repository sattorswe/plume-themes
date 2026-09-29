# Plume Themes

A minimal light and dark theme for VS Code, in the spirit of the classic Visual Studio themes: keywords, strings, comments, and numbers get a color, everything else stays plain. Plume also reshapes the VS Code interface itself with soft rounded cards, quiet selections, and a clean status bar.

This extension is not published to the VS Code Marketplace. You build it from this repository and install it on your own machine.

## What you get

Plume is made of three layers. Each one is installed by a different step below.

| Layer | What it does | Needs |
| --- | --- | --- |
| **Color themes** | Plume Light and Plume Dark. VS Code switches between them automatically with your macOS appearance. | Only the extension |
| **Layout defaults** | Wider line spacing, a compact gutter, a clean editor header, the file name as the window title, and a status bar item that shows the language and its version (for example `PHP 8.5.11` or `TypeScript 7.0.2`). | Only the extension |
| **Plume CSS** | Rounded cards for the Command Palette, hovers, suggestions, and notifications; soft pill selection in the Explorer; thin scrollbars; a tidier editor header without split and `...` buttons; the CommitMono interface font; and the shimmering status bar labels. | The Custom CSS and JS Loader extension and the CommitMono font |

If you skip the Plume CSS layer, the themes and layout defaults still work. You just get the standard VS Code shapes and font.

## Requirements

Check each item before you start. The install steps assume all of them.

1. **macOS.** Plume is made and tested on macOS. The colors work everywhere, but the steps below use macOS paths and shortcuts.
2. **VS Code 1.139 or newer**, installed in `/Applications`.
3. **The `code` command.** Open VS Code, press `Cmd+Shift+P`, and run **Shell Command: Install 'code' command in PATH**. Check it in a new terminal:

   ```bash
   code --version
   ```

4. **Bun 1.4.2 or newer.** It builds the extension. Install it with Homebrew, then check it:

   ```bash
   brew install oven-sh/bun/bun
   bun --version
   ```

5. **The CommitMono font.** Plume CSS uses it for the interface, and it is the recommended editor font:

   ```bash
   brew install --cask font-commit-mono
   ```

6. **Git or the GitHub CLI** to download this repository.

Optional:

- **PHP on your `PATH`**, if you want the status bar to show your PHP version. Without it, the item shows only `PHP`.
- **[Plume Icons](https://github.com/sattorswe/plume-icons)**, the matching product icon theme.

## Install

### 1. Download the code

```bash
gh repo clone sattorswe/plume-themes
cd plume-themes
```

### 2. Install the build tools

```bash
bun install
```

Bun may print `Blocked 1 postinstall`. That is expected and safe: it is a signing helper for the Marketplace, which Plume doesn't use.

### 3. Build the extension

```bash
bun run package
```

This creates `plume-themes-0.0.1.vsix` in the project folder.

### 4. Install it into VS Code

```bash
code --install-extension plume-themes-0.0.1.vsix
rm plume-themes-0.0.1.vsix
```

If VS Code is already open, press `Cmd+Shift+P` and run **Developer: Reload Window** so the theme and its layout defaults load.

### 5. Check the theme

Plume turns on automatic switching for you. Open **Settings** (`Cmd+,`), search for `autoDetectColorScheme`, and make sure **Window: Auto Detect Color Scheme** is checked. VS Code now uses Plume Light when macOS is light and Plume Dark when macOS is dark.

To pick one theme yourself instead, uncheck that setting, press `Cmd+K Cmd+T`, and choose **Plume Light** or **Plume Dark**.

### 6. Set the editor font

Open your `settings.json` (`Cmd+Shift+P`, then **Preferences: Open User Settings (JSON)**) and add:

```json
"editor.fontFamily": "CommitMono"
```

### 7. Turn on Plume CSS

1. Install the loader:

   ```bash
   code --install-extension be5invis.vscode-custom-css
   ```

2. Print the address of the Plume stylesheet on your machine:

   ```bash
   echo "file://$HOME/.vscode/extensions/plume.plume-themes-0.0.1/dist/plume.css"
   ```

3. Add that address to your `settings.json`. Use the exact line the previous command printed:

   ```json
   "vscode_custom_css.imports": [
       "file:///Users/you/.vscode/extensions/plume.plume-themes-0.0.1/dist/plume.css"
   ]
   ```

4. Press `Cmd+Shift+P` and run **Enable Custom CSS and JS**.
5. VS Code may say that your installation "appears to be corrupt". This is expected, because the loader edits VS Code's own files. Click **Don't Show Again**.
6. Quit VS Code completely with `Cmd+Q` and open it again. Reload Window is not enough.

### 8. Clean up the status bar

Plume shows the language and version on the left and the cursor position (`Ln 1, Col 1`) on the right. VS Code doesn't let extensions hide its other status bar items, so hide them once by hand:

1. Right-click an empty part of the status bar.
2. Uncheck everything except **Plume Language Version** and **Editor Selection**.

VS Code remembers this choice.

### 9. Check that everything works

Open a TypeScript or PHP file. You should see:

- A white editor in light mode, or dark gray in dark mode, with blue keywords, and black (or light gray) line numbers.
- Only the file name at the top of the window. The editor header shows the file name, the close button, and tools for the current file, such as Markdown preview, but no split or `...` buttons.
- A bold blue `TypeScript 7.0.2` (or `PHP ...`) at the bottom left and a bold `Ln, Col` at the bottom right, both with a moving shimmer.
- Rounded cards when you press `Cmd+Shift+P`, and the interface in the CommitMono font.

If only the first two items work, Plume CSS is not active. Go back to step 7.

## Update

```bash
git pull
bun install
bun run package
code --install-extension plume-themes-0.0.1.vsix --force
rm plume-themes-0.0.1.vsix
```

Then, in VS Code, run **Reload Custom CSS and JS** from the Command Palette, and after that **Developer: Reload Window**. The loader copies the stylesheet into VS Code when you enable or reload it, so style changes only appear after that command.

## After a VS Code update

A VS Code update replaces the files the loader edited, so the Plume CSS layer disappears. Run **Enable Custom CSS and JS** again, then quit and reopen VS Code. The color themes are not affected.

## Settings Plume changes

The extension sets these defaults. Any value in your own `settings.json` wins over them, so remove a line from your settings if you want Plume's value.

| Setting | Plume value | Why |
| --- | --- | --- |
| `editor.lineHeight` | `2.2` | Airier lines |
| `editor.lineNumbersMinChars` | `2` | Compact line number column |
| `editor.lineDecorationsWidth` | `24` | Space between line numbers and code |
| `editor.glyphMargin` | `false` | Removes the empty column left of line numbers |
| `breadcrumbs.enabled` | `false` | Only the file name in the editor header |
| `workbench.tree.indent` | `16` | File tree indentation |
| `workbench.tree.renderIndentGuides` | `always` | Shows the dotted guide of the active folder |
| `window.commandCenter` | `false` | Removes the search box from the title bar |
| `window.title` | `${activeEditorShort}` | Shows only the file name as the window title |
| `window.autoDetectColorScheme` | `true` | Follows the macOS appearance |
| `workbench.preferredLightColorTheme` | `Plume Light` | Theme for light mode |
| `workbench.preferredDarkColorTheme` | `Plume Dark` | Theme for dark mode |
| `vscode_custom_css.statusbar` | `false` | Hides the loader's own status bar icon |

## Uninstall

1. Run **Disable Custom CSS and JS** from the Command Palette, then quit and reopen VS Code.
2. Remove the extension:

   ```bash
   code --uninstall-extension plume.plume-themes
   ```

3. Delete the `vscode_custom_css.imports` entry from your `settings.json`.
4. Press `Cmd+K Cmd+T` and pick another theme.

## Troubleshooting

**Style changes don't show up.** Run **Reload Custom CSS and JS**, then **Developer: Reload Window**.

**The status bar still shows Git, Spaces, UTF-8, and other items.** Hide them as described in step 8. If they come back after you hid them, quit VS Code with `Cmd+Q` and open it again.

**The title bar is gone.** VS Code hides an empty title bar in full screen. Use a normal or maximized window instead of full screen.

**Breakpoints are invisible.** Plume turns off the column where VS Code draws them. Add `"editor.glyphMargin": true` to your `settings.json` while you debug.

**The status bar shows `PHP` without a version.** Make sure `php -v` works in a terminal, then restart VS Code.

**The loader reports a permission error.** VS Code must be in `/Applications` and owned by your user account.

**A Plume setting has no effect.** Your own `settings.json` probably sets the same key. Remove it there.

## How the build works

`bun run build` writes everything into `dist/`:

1. `plume-light-color-theme.json` and `plume-dark-color-theme.json`, generated from one set of color rules and two palettes.
2. `plume.css`, the Plume CSS layer, generated with PostCSS. Its colors are CSS variables that switch with the active theme.
3. `extension.cjs`, the small runtime that adds the language version to the status bar.

`bun run typecheck` checks the code, and `bun run package` builds and packs the `.vsix`.

## Project structure

```
src/
├── index.ts          Build entry point
├── BuildConfig.ts    Theme names, output files, and bundle settings
├── actions/          One build step per file
├── palette/          Light and dark palettes and the theme variants
├── editor/           Editor and syntax colors
├── workbench/        Colors for the rest of the interface
├── styles/           Plume CSS rules and shared style tokens
├── typography/       Font settings
├── runtime/          The status bar runtime
├── support/          Small shared helpers
└── types/            Shared TypeScript types
```
