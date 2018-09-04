const expect = require('expect');
const request = require('supertest');
const {ObjectID} = require('mongodb');

const {app} = require('./../server');
const {Todo} = require('./../models/todo');

const todos = [{
  _id: new ObjectID(),
  text: 'first test todo'
}, {
  _id: new ObjectID(),
  text: 'second test todo'
}];

//runs before everything - delete all todos to be able to make tests
beforeEach((done) => {
  Todo.remove({}).then(() => {
    return Todo.insertMany(todos);
  }).then(() => done());
});

describe('POST /todos', () => {
  it('should create a new todo', (done) => {
    let text = 'test todo';

    request(app)
      .post('/todos')
      .send({text}) // post testine arguman gonderme
      .expect(200)
      .expect((res) => { // gelen response ile testi dogrulama
        expect(res.body.text).toBe(text);
      })
      .end((err, res) => { // her durumda done cagırılmalı async oldugu icin
        if(err) {
          return done(err);
        }

        Todo.find({text}).then((todos) => {
          expect(todos.length).toBe(1);
          expect(todos[0].text).toBe(text);
          done();
        }).catch((e) => {
          done(e);
        });
      });
  });

  it('should not create todo with invalid body data', (done) => {
    let text = '';
    request(app)
      .post('/todos')
      .send({text})
      .expect(400)
      .end((err, res) => {
        if(err) {
          return done(err);
        }

        Todo.find().then((todos) => {
          expect(todos.length).toBe(2);
          done();
        }).catch((e) => done(e));
      });
  });

});

describe('Get /todos', () => {
  it('should gel all todos', (done) => {
    request(app)
      .get('/todos')
      .expect(200)
      .expect((res) => {
        expect(res.body.todos.length).toBe(2);
      })
      .end(done);
  });

});

describe('GET /todos/:id', () => {
  it('should get todo with id', (done) => {
    request(app)
      .get(`/todos/${todos[0]._id.toHexString()}`)
      .expect(200)
      .expect((res) => {
        expect(res.body.todo.text).toBe('first test todo');
      })
      .end(done);
  });

  it('should return 404 if todo not found', (done) => {
    request(app)
      .get('/todos/6b8e67096a4c63c1c0a4b593')
      .expect(404)
      .end(done);
  });

  it('should return 404 for non-object ids', (done) => {
    request(app)
      .get('/todo/123')
      .expect(404)
      .end(done);
  });
});
