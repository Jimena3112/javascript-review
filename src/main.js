import {SalesOrder} from "./sales/domain/model/sales-order.js";

console.log("Hello JavaScript Developer!");

const salesOrder = new SalesOrder("C001");
salesOrder.addItem("P001", 2, 100);
salesOrder.addItem("P002", 1, 200);

console.log(`Sales Order Total Price is ${salesOrder.calculateTotalPrice()}`)