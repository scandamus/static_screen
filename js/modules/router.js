"use strict";

//page
import Home from "/js/components/Home.js";
import Page1 from "/js/components/Page1.js";
import Page2 from "/js/components/Page2.js";

const routes = [
    { path: "/", view: Home },
    { path: "/page1", view: Page1 },
    // { path: "/user/:id", components: user },
    { path: "/page2", view: Page2 }
];

//pathを正規表現に変換
const pathToRegex = (path) => new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$");
//:idのような形式の場合
const getParams = (match) => {
    const values = match.result.slice(1);
    const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map(result => result[1]);

    return Object.fromEntries(keys.map((key, i) => {
        return [key, values[i]];
    }));
};

const addLinkPageEvClick = (linkPages) => {
    linkPages.forEach((linkPage) => {
        linkPage.addEventListener("click", async (ev) => {
            ev.preventDefault();
            if (window.location.href === ev.target.href) {
                return ;
            }
            history.pushState(null, null, ev.target.href);
            try {
                await router();
            } catch (error) {
                console.error(error);
            }
        });
    });
}

const router = async () => {
    //routesとの一致チェック
    const potentialMatches = routes.map(route => {
        return {
            route: route,
            result: location.pathname.match(pathToRegex(route.path))
        };
    });
    let match = potentialMatches.find(potentialMatch => potentialMatch.result !== null);
    if (!match) {
        match = {
            route: routes[0],
            result: [location.pathname]
        };
    }
    const view = new match.route.view(getParams(match));
    document.querySelector("#app").innerHTML = await view.getHtml();
    const linkPages = document.querySelectorAll('#app a[data-link]');
    addLinkPageEvClick(linkPages);
};

export { addLinkPageEvClick, router };