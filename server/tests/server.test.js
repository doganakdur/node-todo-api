const expect = require('expect');
const request = require('supertest');

const {app} = require('./../server');
const {Todo} = require('./../models/todo');

//runs before everything - delete all todos to be able to make tests
beforeEach((done) => {
  Todo.remove({}).then(() => done());
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

        Todo.find().then((todos) => {
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
          expect(todos.length).toBe(0);
          done();
        }).catch((e) => done(e));
      });
  });

});
