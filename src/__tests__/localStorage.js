import * as localStorageUtils from '../utils/localStorage';

beforeEach(() =>{
  localStorage.clear();
});

afterEach(() =>{
  localStorage.clear();
});

it('should get the user from localStorage', () => {
  const { getUserFromLocalStorage: getUser } = localStorageUtils;
  localStorage.setItem('user', 'me');
  expect(getUser()).toBe('me');
});

it('should get empty user from localStorage', () => {
  const { getUserFromLocalStorage: getUser } = localStorageUtils;
  expect(getUser()).toBe('');
});

it('should remove user from localStorage', ()=>{
  const { removeUserFromLocalStorage: removeUser } = localStorageUtils;
  localStorage.setItem('user', 'remove me?');
  expect(removeUser()).toBeFalsy();
});


