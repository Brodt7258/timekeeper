const companies = [
  {
    name: 'MegaCompany',
    email: 'megaco@megaco.com',
    phone_number: '6666666666',
    seats: 10,
    last_payment: Math.floor(Date.now() / 1000),
    avatar_url: 'https://fakeimg.pl/300/',
    default_pay_period: 7,
    last_payday: Math.floor(Date.now() / 1000),
    created_at: Math.floor(Date.now() / 1000)
  },
  {
    name: 'Chair Corp',
    email: 'chairs@gmail.com',
    phone_number: '1234567890',
    seats: 15,
    last_payment: Math.floor(Date.now() / 1000) - 86400,
    avatar_url: 'https://fakeimg.pl/300/',
    default_pay_period: 14,
    last_payday: Math.floor(Date.now() / 1000) - 86400,
    created_at: Math.floor(Date.now() / 1000)
  },
  {
    name: 'Tools and Stuffs',
    email: 'ts@aol.com',
    phone_number: '0987654321',
    seats: 20,
    last_payment: Math.floor(Date.now() / 1000),
    avatar_url: 'https://fakeimg.pl/300/',
    default_pay_period: 7,
    last_payday: Math.floor(Date.now() / 1000),
    created_at: Math.floor(Date.now() / 1000)
  }
]

exports.seed = function(knex) {
  return knex('companies').insert(companies);
};