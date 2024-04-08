"use strict";

import PageBase from "./PageBase.js";

export default class extends PageBase {
    constructor(params) {
        super(params);
        this.setTitle("UserRegister");
        this.labelButton = "登録する";
    }

    async getHtml() {
        return `
            <form class="formUserResister blockForm" action="" method="post">
                <dl class="unitFormInput">
                    <dt class="unitFormInput_label"><label for="">name</label></dt>
                    <dd class="unitFormInput_input"><input type="text" /></dd>
                </dl>
                <dl class="unitFormInput">
                    <dt class="unitFormInput_label"><label for="">email</label></dt>
                    <dd class="unitFormInput_input"><input type="text" /></dd>
                </dl>
                <dl class="unitFormInput">
                    <dt class="unitFormInput_label"><label for="">password</label></dt>
                    <dd class="unitFormInput_input"><input type="password" /></dd>
                </dl>
                <button type="submit" id="btnLogin" class="formUserResister_button unitButton unitButton-large">${this.labelButton}</button>
            </form>
        `;
    }
}