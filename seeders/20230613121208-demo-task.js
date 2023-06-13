'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Tasks', taskArrGenerator() , {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Tasks', null, {});
  }
};

function taskArrGenerator(){
  const taskUuids = [
    'ba72d5d1-6a3d-47b2-8b39-6f6636c4e46c',
    '1d63883a-3b7b-4e66-8e6f-4575d513b6df',
    '5be81d9b-1e95-4d7d-9eaa-0c4e4993b6c5',
    'f97348f0-75f0-4a27-b05a-9f7d759e512d',
    'bf35e9f9-08f6-4763-b0d2-62b2f4b0802b'
  ];

  let userUuids = [
    "9a8df6e7-4ad1-4f83-9cbe-9e5472f062a3",
    "7c3d4082-b69f-4853-9fc6-14f9b9c4dc4e",
    "c652df03-9bb4-4fbf-8d0a-630141e3e5d9",
    "e97d2716-7f8c-41dd-b9ab-4aef98e6f4fb",
    "7c3d4082-b69f-4853-9fc6-14f9b9c4dc4e"];

  let arrTasks=[];
  for (let i = 0; i < 5; i++) {
    let dummyTask ={
      id:taskUuids[i],
      title:"title"+i,
      description: "description"+i,
      completed: false,
      userId:userUuids[i],
      createdAt: new Date(),
      updatedAt: new Date()
    };
    arrTasks.push(dummyTask);
  }

  return arrTasks;
}
