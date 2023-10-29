const { Sequelize, Model, DataTypes } = require("sequelize");
// const sequelize = new Sequelize('sqlite::memory');
const sequelize = new Sequelize("sqlite::/tmp/testdb");

class User extends Model {}
User.init(
  {
    username: DataTypes.STRING,
    birthday: DataTypes.DATE,
  },
  { sequelize, modelName: "user" }
);

(async () => {
  await sequelize.sync();
  const jane = await User.create({
    username: "jane",
    birthday: new Date(1998, 2, 12),
  });
  console.log(jane.toJSON());
})();
