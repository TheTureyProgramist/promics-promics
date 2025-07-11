const delay = ms => {
  return new Promise(resolve => setTimeout(() => resolve(ms), ms));
};
const logger = time => console.log(`Resolved after ${time}ms`);
delay(2000).then(logger);
delay(1000).then(logger);
delay(1500).then(logger);
const delay = ms => {
  return new Promise(resolve => setTimeout(() => resolve(ms), ms));
};
const logger = time => console.log(`Resolved after ${time}ms`);
delay(2000).then(logger);
delay(1000).then(logger);
delay(1500).then(logger);
//-----------------------------------------------------------------
const users = [
  { name: 'Mango', active: true },
  { name: 'Poly', active: false },
  { name: 'Ajax', active: true },
  { name: 'Lux', active: false },
];
const toggleUserState = (allUsers, userName) => {
  return new Promise(resolve => {
    const updatedUsers = allUsers.map(user =>
      user.name === userName ? { ...user, active: !user.active } : user
    );
    resolve(updatedUsers);
  });
};
const logger = updatedUsers => console.table(updatedUsers);
toggleUserState(users, 'Mango').then(logger);
toggleUserState(users, 'Lux').then(logger);
//--------------------------------------------------------------------------------------
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
const makeTransaction = transaction => {
  const delay = randomIntegerFromInterval(20, 50);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const canProcess = Math.random();
      if (canProcess) {
        resolve({ id: transaction.id, time: delay });
      } else {
        reject(transaction.id);
      }
    }, delay);
  });
};
const logSuccess = ({ id, time }) => {
  console.log(`Transaction ${id} processed in ${time}ms`);
};
const logError = id => {
  console.warn(`Error processing transaction ${id}. Please try again later.`);
};
makeTransaction({ id: 70, amount: 150 }).then(logSuccess).catch(logError);
makeTransaction({ id: 71, amount: 230 }).then(logSuccess).catch(logError);
makeTransaction({ id: 72, amount: 75 }).then(logSuccess).catch(logError);
makeTransaction({ id: 73, amount: 100 }).then(logSuccess).catch(logError);