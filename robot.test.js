const {newRobot, station, isWorkday, prioritizeTasks}  = require("./robot.js");

// remove .skip when you're ready to implement the test
test('test_that_foreign_robot_needing_repairs_sent_to_station_1', () => {
  // arrange
  let robot = newRobot(true,true,false);
  // act
  let job = station(robot) 
  // assert
  expect(job).toEqual(1)
});

test('test_that_vintage_robot_needing_repairs_sent_to_station_2', () => {
  // arrange
  let robot = newRobot(true,false,true);
  // act
  let job = station(robot)
  // assert
  expect(job).toEqual(2)
});

test('test_that_standard_robot_needing_repairs_sent_to_station_3', () => {
  // arrange
  let robot = newRobot(true,false,false);
  // act
  let job = station(robot)
  // assert
  expect(job).toEqual(3)
});

test('test_that_robot_in_good_condition_sent_to_station_4', () => {
  // arrange
  let robot = newRobot(false,false,false);
  // act
  let job = station(robot)
  // assert
  expect(job).toEqual(4)
});

test('test_prioritize_tasks_with_empty_todo_list_returns_negative_one', () => {
  // arrange
  let robot = newRobot()
  // act
  let job = prioritizeTasks(robot)
  // assert
  expect(job).toEqual(-1)
})

test('test_prioritize_tasks_with_todos_returns_max_todo_value', () => {
  // arrange
  const todos = [1,2,3];
  robot = newRobot(true, true, true);
  robot.todos = todos;
  // act
  let job = prioritizeTasks(robot)
  // assert
  expect(job).toEqual(3)
});

test('test_workday_on_day_off_returns_false', () => {
  // arrange
  let robot = newRobot(true, true, true);
  robot.dayOff = false;
  // act
  workDay = isWorkday(robot, false);
  // assert
  expect(workDay).toBe(false);
});

test('test_workday_not_day_off_returns_true', () => {
  // arrange
  let robot = newRobot(true, true, true);
  robot.dayOff = false;
  // act
  workDay = isWorkday(robot, true);
  // assert
  expect(workDay).toBe(true);
});



