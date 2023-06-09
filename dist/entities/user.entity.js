"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const typeorm_1 = require("typeorm");
const uuid_1 = require("uuid");
const class_transformer_1 = require("class-transformer");
const accounts_entity_1 = require("./accounts.entity");
const transactions_entity_1 = require("./transactions.entity");
let User = class User {
    constructor() {
        if (!this.id) {
            this.id = (0, uuid_1.v4)();
        }
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], User.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", String)
], User.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false, unique: true }),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    (0, class_transformer_1.Exclude)(),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ nullable: false }),
    __metadata("design:type", Date)
], User.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ nullable: false }),
    __metadata("design:type", Date)
], User.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.OneToMany)((type) => accounts_entity_1.Accounts, account => account.id, { eager: true }),
    __metadata("design:type", Array)
], User.prototype, "accounts", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => transactions_entity_1.Transactions, transaction => transaction.id, { eager: true }),
    __metadata("design:type", Array)
], User.prototype, "transactions", void 0);
User = __decorate([
    (0, typeorm_1.Entity)(),
    __metadata("design:paramtypes", [])
], User);
exports.User = User;
