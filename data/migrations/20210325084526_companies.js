
exports.up = function(knex) {
  return knex.schema
    .createTable('companies', (tb) => {
      tb.increments('id');
      tb.string('name');
      tb.string('email');
      tb.string('phone_number');
      tb.integer('seats');
      tb.integer('last_payment');
      tb.string('avatar_url');
      tb.integer('default_pay_period');
      tb.integer('last_payday');
      tb.integer('created_at');
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('companies');
};
