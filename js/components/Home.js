"use strict";

import PageBase from "./PageBase.js";

export default class extends PageBase {
    constructor(params) {
        super(params);
        this.setTitle("LOGIN");
    }

    async getHtml() {
        return `
            <form action="" method="post">
                <button type="submit" id="btnLogin" class="unitButton unitButton-large">Sign in with 42</button>
            </form>
        `;
    }
}