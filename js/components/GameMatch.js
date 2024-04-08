"use strict";

import PageBase from "./PageBase.js";

export default class extends PageBase {
    constructor(params) {
        super(params);
        this.setTitle("GameMatch");
        this.labelButton = "対戦を申し込む";
    }

    async getHtml() {
        return `
            <div class="listPlayers">
                <section class="listPlayers_item unitPlayer">
                    <header class="unitPlayer_header unitPlayerHeader">
                        <div class="unitPlayerHeader_name">
                            <h3>user1</h3>
                            <p class="thumb"><img src="https://dummyimage.com/100x100/59fa14/212121.png&text=ico" alt="" width="60" height="60"></p>
                        </div>
                        <button class="unitPlayerHeader_button unitButton">${this.labelButton}</button>
                    </header>
                    <div class="unitPlayer_score">
                        <p>RANK: 4 (20勝3敗)</p>
                        <p>過去の対戦成績: 2勝1敗</p>
                    </div>
                </section>
                <section class="listPlayers_item unitPlayer">
                    <header class="unitPlayer_header unitPlayerHeader">
                        <div class="unitPlayerHeader_name">
                            <h3>user1</h3>
                            <p class="thumb"><img src="https://dummyimage.com/100x100/59fa14/212121.png&text=ico" alt="" width="60" height="60"></p>
                        </div>
                        <button class="unitPlayerHeader_button unitButton">${this.labelButton}</button>
                    </header>
                    <div class="unitPlayer_score">
                        <p>RANK: 4 (20勝3敗)</p>
                        <p>過去の対戦成績: 2勝1敗</p>
                    </div>
                </section>
                <section class="listPlayers_item unitPlayer">
                    <header class="unitPlayer_header unitPlayerHeader">
                        <div class="unitPlayerHeader_name">
                            <h3>user1</h3>
                            <p class="thumb"><img src="https://dummyimage.com/100x100/59fa14/212121.png&text=ico" alt="" width="60" height="60"></p>
                        </div>
                        <button class="unitPlayerHeader_button unitButton">${this.labelButton}</button>
                    </header>
                    <div class="unitPlayer_score">
                        <p>RANK: 4 (20勝3敗)</p>
                        <p>過去の対戦成績: 2勝1敗</p>
                    </div>
                </section>
                <section class="listPlayers_item unitPlayer">
                    <header class="unitPlayer_header unitPlayerHeader">
                        <div class="unitPlayerHeader_name">
                            <h3>user1</h3>
                            <p class="thumb"><img src="https://dummyimage.com/100x100/59fa14/212121.png&text=ico" alt="" width="60" height="60"></p>
                        </div>
                        <button class="unitPlayerHeader_button unitButton">${this.labelButton}</button>
                    </header>
                    <div class="unitPlayer_score">
                        <p>RANK: 4 (20勝3敗)</p>
                        <p>過去の対戦成績: 2勝1敗</p>
                    </div>
                </section>
                <section class="listPlayers_item unitPlayer">
                    <header class="unitPlayer_header unitPlayerHeader">
                        <div class="unitPlayerHeader_name">
                            <h3>user1</h3>
                            <p class="thumb"><img src="https://dummyimage.com/100x100/59fa14/212121.png&text=ico" alt="" width="60" height="60"></p>
                        </div>
                        <button class="unitPlayerHeader_button unitButton">${this.labelButton}</button>
                    </header>
                    <div class="unitPlayer_score">
                        <p>RANK: 4 (20勝3敗)</p>
                        <p>過去の対戦成績: 2勝1敗</p>
                    </div>
                </section>
            </div>
        `;
    }
}