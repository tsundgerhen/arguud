// Original code (GIVEN)
function executeTasksOld(tasks, callback) {
  let completedTasks = 0;
  let results = [];

  for (let task of tasks) {
    task((result) => {
      results.push(result);
      completedTasks++;

      if (completedTasks === tasks.length) {
        callback(results);
      }
    });
  }
}

// Implementation using promises
function executeTasks(tasks) {
  let promises = tasks.map((task) => {
    return new Promise((resolve, reject) => {
      task(resolve, reject);
    });
  });

  return Promise.all(promises);
}

// Test case 1
const task1 = (resolve, reject) => {
  setTimeout(() => {
    resolve("Task 1 completed");
  }, 2000);
};

const task2 = (resolve, reject) => {
  setTimeout(() => {
    resolve("Task 2 completed");
  }, 1500);
};

const task3 = (resolve, reject) => {
  setTimeout(() => {
    resolve("Task 3 completed");
  }, 1000);
};

executeTasks([task1, task2, task3])
  .then((results) => {
    console.log("All tasks completed:");
    console.log(results);
  })
  .catch((error) => {
    console.error("Error occurred:", error);
  });

// Test case 2
const task4 = (resolve, reject) => {
  setTimeout(() => {
    reject("Error occurred in Task 4");
  }, 1000);
};
console.log("test2");
executeTasks([task2, task3, task4])
  .then((results) => {
    console.log("All tasks completed:");
    console.log(results);
  })
  .catch((error) => {
    console.error("Error occurred:", error);
  });
