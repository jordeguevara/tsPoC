"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const port = process.env.PORT || 5000;
var user1 = {
    firstName: "Tom",
    lastName: "V",
    ID: 1,
    get sayHi() { return this.firstName + this.lastName; }
};
console.log(user1);
console.log('invoked ', user1.sayHi());
app_1.default.listen(port, () => {
    console.log('Express server listening on port ' + port);
});
//# sourceMappingURL=server.js.map