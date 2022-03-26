type User = {
  username: string,
  password: string,
}

type UserList = {
  users: User[],
}

export function saveUserList( userList: UserList ) {
  localStorage.setItem( 'users', JSON.stringify( userList ) );
}

export function getUserList() {
  return JSON.parse( localStorage.getItem( 'users' ) || '[]' );
}

export function createUser( user: User ) {
  const userList = getUserList();
  userList.push( user );
  saveUserList( userList );
}

export function verifyUser( user: User ) {
  const userList = getUserList();
  return userList.some( u => u.username === user.username && u.password === user.password );
}