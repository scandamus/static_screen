"use strict";

import PageBase from "./PageBase.js";

export default class extends PageBase {
    constructor(params) {
        super(params);
        this.setTitle("Page2");
    }

    async getHtml() {
        return `
            <h1>Page2</h1>
            <p>Page2Page2Page2Page2Page2Page2Page2Page2Page2Page2</p>
            <ul>
                <li><a href="/page1" data-link>page1</a></li>
                <li><a href="/page2" data-link>page2</a></li>
            </ul>
        `;
    }
}