const faker = require('faker');

const employees = [
  {
    name: faker.name.findName(),
    email: faker.internet.email(),
    company_id: 1,
    password: 'password',
    title: 'the boss',
    role: 'owner',
    pay_rate: 100000,
    created_at: Math.floor(Date.now() / 1000),
    avatar_url: 'https://fakeimg.pl/300/',
    remote: false
  },
  {
    name: faker.name.findName(),
    email: faker.internet.email(),
    company_id: 1,
    password: 'password',
    title: 'manager',
    role: 'admin',
    pay_rate: 10000,
    created_at: Math.floor(Date.now() / 1000),
    avatar_url: 'https://fakeimg.pl/300/',
    remote: false
  },
  {
    name: faker.name.findName(),
    email: faker.internet.email(),
    company_id: 1,
    password: 'password',
    title: 'worker',
    role: 'employee',
    pay_rate: 1000,
    created_at: Math.floor(Date.now() / 1000),
    avatar_url: 'https://fakeimg.pl/300/',
    remote: false
  },
  {
    name: faker.name.findName(),
    email: faker.internet.email(),
    company_id: 2,
    password: 'password',
    title: 'owner',
    role: 'owner',
    pay_rate: 100000,
    created_at: Math.floor(Date.now() / 1000),
    avatar_url: 'https://fakeimg.pl/300/',
    remote: false
  },
  {
    name: faker.name.findName(),
    email: faker.internet.email(),
    company_id: 2,
    password: 'password',
    title: 'associate',
    role: 'employee',
    pay_rate: 100000,
    created_at: Math.floor(Date.now() / 1000),
    avatar_url: 'https://fakeimg.pl/300/',
    remote: false
  },
  {
    name: faker.name.findName(),
    email: faker.internet.email(),
    company_id: 3,
    password: 'password',
    title: 'guy in charge',
    role: 'owner',
    pay_rate: 100000,
    created_at: Math.floor(Date.now() / 1000),
    avatar_url: 'https://fakeimg.pl/300/',
    remote: false
  },
]

exports.seeds = function(knex) {
  return knex('employees').insert(employees);
};