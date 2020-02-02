import express from 'express';
import {index as addMessage} from './controllers/addMessage.js';
import {index as addMatch } from './controllers/addMatch.js';
import {index as addUser } from './controllers/addUser.js';
import {index as matchesIndex } from './controllers/matches.js';
import {index as usersIndex } from './controllers/users.js';

const router = express.Router();

router.route("/matches.json").get(matchesIndex);
router.route("/users.json").get(usersIndex);
router.route("/addUser").post(addUser);
router.route("/addMessage").post(addMessage);
router.route("/addMatch").post(addMatch);

export default router;