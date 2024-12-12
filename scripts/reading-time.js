const article = document.querySelector(".paper-info");

// `document.querySelector` may return null if the selector doesn't match anything.
if (article) {
    const text = article.textContent;
    const wordMatchRegExp = /[^\s]+/g; // Regular expression
    const words = text.matchAll(wordMatchRegExp);
    // matchAll returns an iterator, convert to array to get word count
    const wordCount = [...words].length;
    const readingTime = Math.round(wordCount / 200);
    const badge = document.createElement("p");
    // Use the same styling as the publish information in an article's header
    badge.classList.add("paper-info");
    badge.textContent = `⏱️ ${readingTime} min read`;

    // Support for API reference docs
    const heading = document.querySelector("h1");
    // Support for article docs with date
    // const date = document.querySelector(".paper-info")?.parentNode;

    // (date ?? heading).insertAdjacentElement("afterend", badge);
    if (heading instanceof Element) {
        heading.insertAdjacentElement("afterend", badge);
    } else {
        console.error("Heading is not a valid Element.");
    }
}