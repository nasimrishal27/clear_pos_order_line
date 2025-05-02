/** @odoo-module **/
import { Orderline } from "@point_of_sale/app/generic_components/orderline/orderline";
import { patch } from "@web/core/utils/patch";
import { usePos } from "@point_of_sale/app/store/pos_hook";

patch(Orderline.prototype, {
    setup() {
        this.pos = usePos();
    },
    onclickRemoveProduct() {
        const order = this.pos.get_order();
        const line_hsn = this.props.line?.l10n_in_hsn_code;
        const realLine = order.get_orderlines().find(l => l.l10n_in_hsn_code === line_hsn);
        if (realLine) {
            setTimeout(() => {
                order.removeOrderline(realLine);
            }, 0);
        }
    },
});
