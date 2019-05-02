import htm from "https://unpkg.com/htm?module";

const html = htm.bind(h);

// Preview component for a Page
const Page = createClass({
  render() {
    const entry = this.props.entry;

    return html`
      <main>
        <h1>${entry.getIn(["data", "title"], null)}</h1>
        <p>${entry.getIn(["data", "layout"], "")}</p>
        <p>${entry.getIn(["data", "article_image"], "")}</p>
        <p>${entry.getIn(["data", "description"], "")}</p>
        <p>
            <small>
              <time
                >${
                  format(
                    entry.getIn(["data", "date"], new Date()),
                    "DD MMM, yyyy"
                  )
                }</time
              >
              ${" by Author"}
            </small>
          </p>
          <p>
            <small>
              <time
                >${
                  format(
                    entry.getIn(["data", "modified_date"], new Date()),
                    "DD MMM, yyyy"
                  )
                }</time
              >
              ${" by Author"}
            </small>
          </p>  
        ${this.props.widgetFor("body")}
      </main>
    `;
  }
});

export default Page;
