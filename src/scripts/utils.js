/**
 * @param {string} url - The URL of the HTML file to import.
 * @param {string} targetDiv - The ID of the div where the imported HTML will be inserted.
 */
async function importHtmlFile(url, targetDiv = "sidemenu") {
  const response = await fetch(url);
  const html = await response.text();

  const receiver = document.getElementById(targetDiv);
  receiver.innerHTML = html;
}
