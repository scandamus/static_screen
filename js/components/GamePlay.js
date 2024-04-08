"use strict";

import PageBase from "./PageBase.js";

export default class extends PageBase {
    constructor(params) {
        super(params);
        this.setTitle("GamePlay");
    }

    async getHtml() {
        return `
           <div class="playBoardWrap">
                <ul class="listPlayer">
                    <li class="listPlayer_item">player1</li>
                    <li class="listPlayer_item">player2</li>
                </ul>
                <canvas id="playBoard"></canvas>
            </div>
        `;
    }
}