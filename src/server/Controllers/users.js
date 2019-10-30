import { registerUser} from '../models/signUp';
/**
 * Manage Tasks for our Express API
 */
export class TaskManager {
  /**
     *Creates an instance of TaskManager.
     * @param {*} req - express request object
     * @param {*} res - express response object
     * @memberof TaskManager
     */
  constructor(req, res) {
    this.req = req;
    this.res = res;
  }
  /**
         *  Find tasks that match the specified options
         *
         * @param {*} options
         * @memberof TaskManager
         */
  find(options = {}) {
    Task.find(options, (error, tasks) => {
      if (error) {
        this.res.json({
          error: error.message,
        });
      } else {
        this.res.json(tasks);
      }
    });
  }
  /**
         *
         *
         * @param {*} [option={}]
         * @memberof TaskManager
         */
  findTaskById(option = {}) {
    Task.findById(option, (error, tasks) => {
      if (error) {
        let response = error.message;
        if (error.kind === 'ObjectId') {
          response = 'Invalid Id';
        }
        this.res.json({
          error: response,
        });
      } else {
        this.res.json(tasks);
      }
    });
  }


  /**
     *
     *
     * @param {*} [option={}]
     * @memberof TaskManager
     */
  updateTask() {
    Task.findById(this.req.params.id).exec((error, task) => {
      if (error) {
        this.res.json({
          error: error.message,
        });
      } else {
        task.name = this.req.body.name || task.name;
        task.body = this.req.body.body || task.body;
        task.startDate = this.req.body.startDate || tasks.startDate;
        task.endDate = this.req.body.endDate || tasks.endDate;
        task.save();
        this.res.json(task);
      };
    });
  }
  /**
         *
         *
         * @param {*} [id={}]
         * @memberof TaskManager
         */
  deleteTask(id) {
    Task.findByIdAndRemove(id, (error, tasks) => {
      if (!error) {
        this.res.json(tasks);
      } else {
        this.res.json({error: 'Invalid task ID'});
      }
    });
  }
  /**
         *
         *
         *
         * @memberof TaskManager
         */
  insertTask() {
    const newTask = new Task(this.req.body);
    newTask.save((error, tasks) => {
      if (error) {
        console.log('error');

        const response = error.message;
        this.res.json({
          error: response,
        });
      } else {
        // this.res.redirect('http://localhost:3000/');
        this.res.json(tasks);
      }
    });
  }
  /**
   *
   *
   * @memberof TaskManager
   */
  insertUser(){

    const newUser = new registerUser(this.req.body);
    console.log(this.req.body)
    newUser.save((error, realestateusers) => {
      console.log(newUser)
      if (error) {
        console.log('error');
        const response = error.message;
        this.res.json({
          error: response,
        });
      } else {
      this.res.json(realestateusers);
      }
    })
    console.log(newUser);
  }
 

}
