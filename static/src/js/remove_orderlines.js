/** @odoo-module **/
import { _t } from "@web/core/l10n/translation";
import { ControlButtons } from "@point_of_sale/app/screens/product_screen/control_buttons/control_buttons";
import { patch } from "@web/core/utils/patch";

patch(ControlButtons.prototype, {
    onclickRemove() {
        const order = this.pos.get_order();
        const lines = order.get_orderlines();
        if (lines.length) {
            lines.filter(line => line.get_product()).forEach(line => order.removeOrderline(line));
            this.notification.add(_t("Items removed successfully."), 3000);
        } else {
            this.notification.add(_t("No Items to remove."), 3000);
        }
    },
});
