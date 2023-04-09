if (process.env.NODE_ENV === 'development') {
  const { serviceWorker } = require('./mocks/browser');
  serviceWorker.start();
}
