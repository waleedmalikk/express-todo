'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', userArrGenerator() , {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  }
};

function userArrGenerator(){
  let uuidArr = [
    "9a8df6e7-4ad1-4f83-9cbe-9e5472f062a3",
    "7c3d4082-b69f-4853-9fc6-14f9b9c4dc4e",
    "c652df03-9bb4-4fbf-8d0a-630141e3e5d9",
    "e97d2716-7f8c-41dd-b9ab-4aef98e6f4fb",
    "25194eaf-2f0d-4dbf-8431-8714f6efad82"];

  let arrUsers=[];
  for (let i = 0; i < 5; i++) {
    let dummyUser ={
      id:uuidArr[i],
      username:"user"+i,
      email: "user"+i+"@example.com",
      password: "password",
      image:"user"+i+".jpg",
      createdAt: new Date(),
      updatedAt: new Date()
    };
    arrUsers.push(dummyUser);
  }

  return arrUsers;
}
