
const CategoryRoute = require('./API Routes/CategoryRoute');
const SearchRoute = require('./API Routes/SearchRoute');
import PostClass from './API Routes/Objects/Post'
var Post = new PostClass();
const PostsRoute = require('./API Routes/PostsRoute');
const UsersRoute = require('./API Routes/UserRoute');

const InitialAuthRoute = require('./API Routes/InitialAuthRoute');

const Cron = require('node-cron');
const cors = require('cors');
var Express = require('express');
const AWS = require('aws-sdk');
const App = Express();
const Port = 6666;


App.use(Express.json());
App.use(Express.urlencoded({extended: true}));
/* App.use(BodyParser()) */;
App.use(cors());
App.use('/api/posts', PostsRoute);
App.use('/api/categories', CategoryRoute);
App.use('/api/search', SearchRoute);
App.use('/api/users', UsersRoute);

App.use('/api', InitialAuthRoute);

Cron.schedule('*/59 * * * *', () => {
    
})

App.listen(Port, () => {console.log(`Listening on port ${Port}.`)});