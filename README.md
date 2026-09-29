# Plume Themes

Plume Light and Plume Dark for VS Code: a minimal theme in the spirit of the classic Visual Studio themes, with a softer, rounder interface.

| Light | Dark |
| --- | --- |
| ![Plume Light editor](docs/screenshots/light-editor.png) | ![Plume Dark editor](docs/screenshots/dark-editor.png) |
| ![Plume Light explorer](docs/screenshots/light-explorer.png) | ![Plume Dark explorer](docs/screenshots/dark-explorer.png) |
| ![Plume Light command palette](docs/screenshots/light-command-palette.png) | ![Plume Dark command palette](docs/screenshots/dark-command-palette.png) |

## Installation

You need VS Code 1.139 or newer and the `code` command. To get the command, open VS Code, press `Cmd+Shift+P`, and run **Shell Command: Install 'code' command in PATH**.

**1. Install the extension**

```bash
curl -fLO https://github.com/sattorswe/plume-themes/releases/latest/download/plume-themes.vsix
code --install-extension plume-themes.vsix --force
rm plume-themes.vsix
```

**2. Follow the prompts in VS Code**

Open VS Code, or run **Developer: Reload Window** if it is already open. Plume then asks three things:

1. **Install Loader.** Installs the Custom CSS and JS Loader, which Plume uses for its rounded interface.
2. **Apply Styles.** If VS Code then says your installation "appears to be corrupt", click **Don't Show Again**. The loader edits VS Code's own files, so this warning is expected.
3. **Quit VS Code.** Open VS Code again, and Plume is ready.

Plume Light and Plume Dark switch automatically with your macOS appearance.

**3. Optional: install the CommitMono font**

Plume uses CommitMono for the editor and the interface when it is installed:

```bash
brew install --cask font-commit-mono
```

To update Plume, run step 1 again.

## License

[MIT](LICENSE)
