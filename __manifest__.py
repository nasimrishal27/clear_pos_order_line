# -*- coding: utf-8 -*-
{
    'name': "Clear POS Orderline",
    'version': '1.0',
    'depends': ['base', 'point_of_sale'],
    'author': "Suni",
    'description': """
    Property Management
    """,
    # data files always loaded at installation
    'data': [
    ],
    'assets': {
        'point_of_sale._assets_pos': [
                'clear_pos_order_line/static/src/js/remove_orderlines.js',
                'clear_pos_order_line/static/src/js/remove_product.js',
                'clear_pos_order_line/static/src/xml/remove_orderlines.xml',
                'clear_pos_order_line/static/src/xml/remove_product.xml',
            ],
    },
    'installable': True,
    'application': False,
    'auto_install': False,
    'license': 'AGPL-3',
}

