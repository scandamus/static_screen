"use strict";

import PageBase from "./PageBase.js";

export default class extends PageBase {
    constructor(params) {
        super(params);
        this.setTitle("GamePlay");
    }

    async getHtml() {
        return `
            <canvas id="playBoard"></canvas>
        `;
    }
}