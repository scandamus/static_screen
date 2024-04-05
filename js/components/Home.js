"use strict";

import PageBase from "./PageBase.js";

export default class extends PageBase {
    constructor(params) {
        super(params);
        this.setTitle("Home");
    }

    async getHtml() {
        return `
            <h1>Home</h1>
            <p>HomeHomeHomeHomeHomeHomeHomeHomeHomeHome</p>
            <ul>
                <li><a href="/page1" data-link>page1</a></li>
                <li><a href="/page2" data-link>page2</a></li>
            </ul>
        `;
    }
}