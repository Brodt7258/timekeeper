
exports.up = function(knex) {
  return knex.schema
    .createTable('punches', (tb) => {
      tb.increments('id');
      tb.integer('employee_id')
        .references('id')
        .inTable('employees')
        .onDelete('cascade')
        .onUpdate('cascade');
      tb.integer('start_time');
      tb.integer('end_time').defaultTo(null);
      tb.string('notes').nullable();
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('punches');
};
