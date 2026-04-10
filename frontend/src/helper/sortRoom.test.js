import { sortRooms } from './sortRoom';

describe('sortRooms function (Варіант 4)', () => {
  it('має коректно вставляти елемент у пустий масив', () => {
    const newRoom = { id: 1, name: '101' };
    const result = sortRooms([], newRoom, null);
    expect(result).toEqual([{ id: 1, name: '101' }]);
  });

  it('має вставляти елемент на початок масиву (вставка на початок)', () => {
    const array = [{ id: 2, name: '102' }];
    const newRoom = { id: 1, name: '101' };
    const result = sortRooms(array, newRoom, null);
 
    expect(result).toEqual([
      { id: 1, name: '101' },
      { id: 2, name: '102' }
    ]);
  });

  it('має вставляти елемент строго ПІСЛЯ вказаного afterId', () => {
    const array = [
      { id: 1, name: '101' },
      { id: 2, name: '102' },
      { id: 4, name: '104' }
    ];
    const newRoom = { id: 3, name: '103' };
    const result = sortRooms(array, newRoom, 2); 
    
    expect(result).toEqual([
      { id: 1, name: '101' },
      { id: 2, name: '102' },
      { id: 3, name: '103' },
      { id: 4, name: '104' }
    ]);
  });

  it('має обробляти неіснуючий afterId', () => {
    const array = [{ id: 1, name: '101' }];
    const newRoom = { id: 99, name: '99' };
    const result = sortRooms(array, newRoom, 9999); 
    
    expect(result).toEqual([
      { id: 99, name: '99' },
      { id: 1, name: '101' }
    ]);
  });
});