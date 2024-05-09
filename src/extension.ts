import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
  let disposable = vscode.commands.registerCommand(
    "your.extension.helloWorld",
    () => {
      const panel = vscode.window.createWebviewPanel(
        "helloWorld",
        "Hello World",
        vscode.ViewColumn.One,
        {}
      );

      panel.webview.html = getWebviewContent();
    }
  );

  context.subscriptions.push(disposable);
}

function getWebviewContent() {
  return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Hello World</title>
    </head>
    <body>
        <h1>Hello World from Webview</h1>
    </body>
    </html>`;
}

export function deactivate() {}
