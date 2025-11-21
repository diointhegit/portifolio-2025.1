export function openNewTab(
  url: string,
  tabName: string = "_blank"
): Window | null {
  /**
   * Opens a new browser tab with the specified URL.
   * @param url The URL to open in the new tab.
   * @param tabName The name of the browsing context (tab or window). Defaults to '_blank' for a new tab.
   * @returns A WindowProxy object if the new tab is successfully opened, otherwise null.
   */
  try {
    const newTab = window.open(url, tabName);
    if (newTab) {
      // Optionally, you can add 'noopener' and 'noreferrer' to protect against security vulnerabilities.
      // This is especially important when opening external links.
      if (tabName === "_blank") {
        newTab.opener = null; // Prevents the new tab from accessing the original window's opener property.
      }
    }
    return newTab;
  } catch (error) {
    console.error("Failed to open new tab:", error);
    return null;
  }
}
