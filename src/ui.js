import xss from "xss-filters";

let ui = {
  renderPosts(posts){
    let target = document.querySelector(".container");

    let postElements = posts.map( post => {
      return articleElement(post.title, post.lastReply);
    });

    target.innerHTML = postElements.join("");
  },

  renderActiveUsers(users){

    let target = document.querySelector(".sidebar-content");

    let elements = users.map( (user) => {
      let { name, avatar } = user;
      return activeUsersTemplate(name, avatar);
    });

    target.innerHTML = elements.join("");
  }
};

function articleElement(title, lastReply){
  let safeTitle = xss.inHTMLData(title);
  let safeLastReply = xss.inHTMLData(lastReply);

  return`<article class='post'>
    <h2 class='post-title'>
      ${safeTitle}
    </h2>
    <p class='post-meta'>
      last reply on ${safeLastReply}
    </p>
  </article>`;
}

function activeUsersTemplate(name, avatar){

  let safeName = xss.inHTMLData(name);
  let safeAvatar = xss.inDoubleQuotedAttr(avatar);

  let template = `
    <div class="active-avatar">
    <img width="54" src="assets/images/${safeAvatar}">
    <h5 class="post-author">${safeName}</h5>
    </div>`;

  return template;
}

export default ui;
