"use strict";

import PageBase from "./PageBase.js";

export default class extends PageBase {
    constructor(params) {
        super(params);
        this.setTitle("Page1");
    }

    async getHtml() {
        return `
            <h1>Page1</h1>
            <p>Page1Page1Page1Page1Page1Page1Page1Page1Page1Page1Page1Page1</p>
            <ul>
                <li><a href="/page1" data-link>page1</a></li>
                <li><a href="/page2" data-link>page2</a></li>
            </ul>
        `;
    }
}