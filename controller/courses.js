import models from '../models';
import { paginate, dynamicSort as sort, types } from '../utils/pagination';

function find(query, where, res, next) {
  Promise.all([
    models.Course.count({ where }),
    models.Course.findAll({
      where,
      ...paginate(query),
      ...sort(query, types.COURSES),
    }),
  ])
    .then(([total, users]) => {
      users.forEach((user) => {
        delete user.dataValues.genderId;
        delete user.dataValues.roleId;
      });
      next({ total, data: users });
    })
    .catch((error) => res.status(502).json({ error }));
}

export default {
  getAll(req, res) {
    find(req.query, null, res, (data) => res.status(200).json(data));
  },
};
