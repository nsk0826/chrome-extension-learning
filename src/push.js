import { Push } from "push.js";
function callPush() {
  Push.create('更新情報');
}
window.onload = callPush;