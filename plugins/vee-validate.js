import Vue from "vue";
import {
    ValidationProvider,
    ValidationObserver,
    localize,
    extend,
} from "vee-validate";
// import ja from "vee-validate/dist/locale/ja.json"; // エラーメッセージを日本語化します
import * as originalRules from "vee-validate/dist/rules";
import ja from "@/lang/vee-validate/ja";

let rule;
for (rule in originalRules) {
    extend(rule, {
        ...originalRules[rule], // eslint-disable-line
    });
}

localize("ja", ja);

// 下記は固定で書く
Vue.component("ValidationProvider", ValidationProvider);
Vue.component("ValidationObserver", ValidationObserver);
