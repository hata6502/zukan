const getSingleImageURL = () => {
  const imageElements = document.querySelectorAll("img");

  return imageElements.length === 1 && imageElements[0].src;
};

const sendPage = () => {
  const url = location.href;

  const title =
    document.querySelector('meta[property="og:title"]')?.content ??
    document.title;

  const metaDescription =
    document.querySelector('meta[name="description"]')?.content ?? "";

  const description = `${[title, url, metaDescription]
    .filter((line) => line)
    .join("\n\n")}\n\n`;

  const imageURL =
    document.querySelector('meta[property="og:image"]')?.content ??
    getSingleImageURL() ??
    "";

  const metadata = [
    ...[...document.querySelectorAll("meta[name]")].flatMap((metaElement) => {
      const content = [url, imageURL, metaDescription, title].reduce(
        (previousValue, currentValue) =>
          previousValue.split(currentValue).join(""),
        metaElement.content
      );

      return content ? [`${metaElement.name}:${content}`] : [];
    }),
    ...[...document.querySelectorAll('script[type="application/ld+json"]')].map(
      (scriptElement) =>
        [url, imageURL, metaDescription, title].reduce(
          (previousValue, currentValue) =>
            previousValue.split(currentValue).join(""),
          JSON.stringify(JSON.parse(scriptElement.innerText))
        )
    ),
  ].join(" ");

  chrome.runtime.sendMessage({
    url,
    description,
    imageURL,
    metadata,
    title,
  });
};

sendPage();
setInterval(sendPage, 1000);
