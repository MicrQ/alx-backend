const kue = require('kue');

const queue = kue.createQueue();

const obj = {
  phoneNumber: '0123456789',
  message: 'New Login activity on your account.',
};

const job = queue.create('push_notification_code', obj)
  .save((err) => {
    if (!err) {
      console.log('Notification job completed');
    } else {
      console.log('Notification job failed');}
  });