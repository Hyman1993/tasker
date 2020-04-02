import { TaskerPage } from './app.po';

describe('tasker App', () => {
  let page: TaskerPage;

  beforeEach(() => {
    page = new TaskerPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
