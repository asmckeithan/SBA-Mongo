const User = require('./model/user');

const users = [
  { name: 'Annesha M', email: 'annesham@example.com', age: 30 },
  { name: 'Devon J', email: 'devonj@example.com', age: 15 },
  // Add more users as needed
];

const seedUsers = async () => {
  try {
    await User.deleteMany(); // Clear existing users
    await User.insertMany(users); // Insert new users
    console.log('Users seeded successfully');
  } catch (error) {
    console.error('Error seeding users:', error);
  }
};

module.exports = seedUsers;
