// import events from "events";

// class FitnessTracker extends events.EventEmitter {
//   constructor() {
//     super();
//     this.progress = 0;
//     this.goal = 1000;
//   }

//   addExercise(exercise) {
//     this.progress += exercise.caloriesBurned;

//     if (this.progress >= this.goal) {
//       this.emit("goalReached");  
//     }
//   }
// }

// const tracker = new FitnessTracker();

// // Set up a listener 
// tracker.on("goalReached", () => {
//   console.log("Congratulations! You have reached your fitness goal");
// });

// const Solution = () => {
//   // simulate adding exercise
//   tracker.addExercise({ name: "Running", caloriesBurned: 500 });
//   tracker.addExercise({ name: "Weightlifting", caloriesBurned: 600 });
// };

// Solution();

// export { FitnessTracker, Solution, tracker };


import events from 'events';

class FitnessTracker extends events.EventEmitter {
  constructor(){
    super();
    this.progress = 0,
    this.goal = 1000;
  }
  addExercise(exercise){
  
    this.progress += exercise.caloriesBurned;

    if(this.progress >= this.goal){
      this.emit("goalReached");
    }
  }  
}
const tracker = new FitnessTracker();

// Add a listener
tracker.on("goalReached" ,() =>{
  console.log("Congratulations! You have reached your fitness goal");
})


const Solution = () => {
// simulate adding exercise
  tracker.addExercise({ name: "Running", caloriesBurned: 500 });
  tracker.addExercise({ name: "Weightlifting", caloriesBurned: 600 });
}

Solution();

export { FitnessTracker, Solution, tracker };
// Add to atchive the goal 

