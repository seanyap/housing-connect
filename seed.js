const { AsyncQueueError } = require('sequelize/types');
const db = require('./models');
const { Tenant, Owner, Listing } = db;

const Tenant = [
    {  id: 1, FirstName: 'Ayse', LastName: 'Davulcu' },
    { id: 2, FirstName: 'Sean' , LastName: 'Yap'},
    { id: 3, FirstName: 'Miriam' , LastName: 'Alyeshmerni'}
]

const Owner = [
    {  id: 1, FirstName: 'John', LastName: 'Smith' },
    { id: 2, FirstName: 'Mary ' , LastName: 'Ann'},
    { id: 3, FirstName: 'Joanna' , LastName: 'Sea'}

]

const Tenant = [
    {  id: 4, FirstName: 'Ayse', LastName: 'Davulcu' },
    { id: 5, FirstName: 'Sean' , LastName: 'Yap'},
    { id: 6, FirstName: 'Miriam' , LastName: 'Alyeshmerni'}
]
const Listing = [
    {id: 7, Address: '3845 shore parkway' , Price: $500}

]