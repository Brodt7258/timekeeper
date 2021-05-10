
exports.up = function(knex) {
  return knex.schema
    .createTable('employees', (tb) => {
      tb.increments('id');
      tb.integer('company_id').references('id').inTable('companies').nullable();
      tb.string('role');
      tb.string('name');
      tb.string('email');
      tb.string('password');
      tb.integer('created_at');
      tb.string('title').nullable();
      tb.string('avatar_url').nullable();
      tb.integer('pay_rate');
      tb.integer('pay_period').nullable();
      tb.integer('last_payday').nullable();
      tb.integer('last_raise').nullable();
      tb.integer('previous_pay_rate').nullable();
      tb.string('notes').nullable();
      tb.boolean('remote').defaultTo(false);
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('employees');
};
