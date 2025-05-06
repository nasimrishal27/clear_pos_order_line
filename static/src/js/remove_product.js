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
        const product = this.props.line?.productName;
        console.log(this.props.line)
        const realLine = order.get_orderlines().find(l => l.full_product_name === product);
        console.log(realLine)
        if (realLine) {
            setTimeout(() => {
                order.removeOrderline(realLine);
            }, 0);
        }
    },
});
