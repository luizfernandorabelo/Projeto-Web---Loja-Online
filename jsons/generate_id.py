import json
from opcode import opname

import pickle
counter = 0
with open('./products_and_services.json', 'r+') as f:
    products = json.load(f)

    for i in products:
        i['id'] = counter
        counter += 1
    f.seek(0)
    json.dump(products, f, indent=4)
    f.truncate()
# print(json.dumps(products, indent=4))
# pickle.dump(json.dumps(products, indent=4), open('products_and_services.json', 'w'))