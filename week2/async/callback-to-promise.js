class UserStorage {
    loginUser(id, password) {
        return new Promise((resolve, reject) => {
        setTimeout(()=> {
            if(
                (id === 'dada' && password === 1111) ||
                (id === 'coder' && password === 1111)
            ) {
                resolve(id);
            } else {
                reject(new Error('not found'));
            }
        }, 2000);
        });
    }

    getRoles(user) {
        return new Promise((resolve, reject) => {
            ssetTimeout(()=> {
                if(user === 'dada') {
                    resolve({ name: 'dada', role: 'admin' });
                } else {
                    reject(new Error('no access'));
                }
            }, 1000);
            });
    }
}

const userStorage = new UserStorage();
const id = prompt('id: ');
const pw = prompt('pw: ');
userStorage.loginUser(id, pw)
    .then(userStorage.getRoles)
    .then(user => alert(`hello ${user.name}! you are ${user.role}`))
    .catch(console.log);