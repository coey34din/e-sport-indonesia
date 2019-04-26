import Post from "/admin/preview-templates/post.js";
import Page from "/admin/preview-templates/page.js";
import Game from "/admin/preview-templates/game.js";
import Komunitas from "/admin/preview-templates/komunitas.js";
import Tips from "/admin/preview-templates/tips.js";
import Profil from "/admin/preview-templates/profil.js";
// Register the Post component as the preview for entries in the blog collection
CMS.registerPreviewTemplate("blog", Post);
CMS.registerPreviewTemplate("pages", Page);
CMS.registerPreviewTemplate("game", Game);
CMS.registerPreviewTemplate("komunitas", Komunitas);
CMS.registerPreviewTemplate("tips", Tips);
CMS.registerPreviewTemplate("profil", Profil);
CMS.registerPreviewStyle("/_includes/assets/css/inline.css");
// Register any CSS file on the home page as a preview style
fetch("/")
  .then(response => response.text())
  .then(html => {
    const f = document.createElement("html");
    f.innerHTML = html;
    Array.from(f.getElementsByTagName("link")).forEach(tag => {
      if (tag.rel == "stylesheet" && !tag.media) {
        CMS.registerPreviewStyle(tag.href);
      }
    });
  });
