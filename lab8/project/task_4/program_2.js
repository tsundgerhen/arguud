// original code (GIVEN)
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

// implementation using await/promises (TO BE ADDED BY THE STUDENT)
async function executeTasks(tasks) {
  let results = [];

  // Execute each task asynchronously using await
  for (let task of tasks) {
    try {
      // Execute the task and wait for its completion
      let result = await new Promise((resolve, reject) => {
        // Execute the task logic within the promise
        task(resolve, reject);
      });

      // Push the result into the results array
      results.push(result);
    } catch (error) {
      // If any task encounters an error, throw the error immediately
      throw error;
    }
  }

  // Return the results once all tasks are completed
  return results;
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

async function callTaskExecution(tasks) {
  try {
    const results = await executeTasks(tasks);
    console.log("All tasks completed:");
    console.log(results);
  } catch (error) {
    console.error("Error occurred:", error);
  }
}
/* Expected output
All tasks completed:
[ 'Task 1 completed', 'Task 2 completed', 'Task 3 completed' ]
*/


callTaskExecution([task1, task2, task3]);

// Test case 2
const task4 = (resolve, reject) => {
  setTimeout(() => {
    reject("Error occurred in Task 4");
  }, 1000);
};

callTaskExecution([task2, task3, task4]);
/*Expected output
Error occurred: Error occurred in Task 4
*/

