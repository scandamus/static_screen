"use strict";

import PageBase from "./PageBase.js";

export default class extends PageBase {
    constructor(params) {
        super(params);
        this.setTitle("USER");
    }

    async getHtml() {
        return `
            <p>USER</p>
        `;
    }
}