import courses from './courses';

export default (app) => {
  app.use('/courses', courses);
};
