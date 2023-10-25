#!/usr/bin/env node
let users = [
    {
        name: "John",
        accountNumber: 1234,
        pinCode: "123",
        balance: Math.ceil(Math.random() * 10000000 + 1)
    },
    {
        name: "Mike",
        accountNumber: 5678,
        pinCode: "123",
        balance: Math.ceil(Math.random() * 10000000 + 1)
    }
];
export default users;
