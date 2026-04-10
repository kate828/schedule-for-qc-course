import { sortGroups } from './sortGroup';

describe('sortGroups function (Варіант 4)', () => {
  it('має коректно вставляти елемент у пустий масив', () => {
    const newGroup = { id: 1, title: 'ПЗ-31' };
    const result = sortGroups([], newGroup, null);
    expect(result).toEqual([{ id: 1, title: 'ПЗ-31' }]);
  });

  it('має вставляти елемент на початок масиву', () => {
    const array = [{ id: 2, title: 'ПЗ-32' }];
    const newGroup = { id: 1, title: 'ПЗ-31' };
    const result = sortGroups(array, newGroup, null);
    expect(result).toEqual([
      { id: 1, title: 'ПЗ-31' },
      { id: 2, title: 'ПЗ-32' }
    ]);
  });

 it('має вставляти елемент строго ПІСЛЯ вказаного afterId', () => {
    const array = [
      { id: 1, title: 'ПЗ-31' },
      { id: 2, title: 'ПЗ-32' },
      { id: 4, title: 'ПЗ-34' }
    ];
    const newGroup = { id: 3, title: 'ПЗ-33' };
    const result = sortGroups(array, newGroup, 2);
    
    expect(result).toEqual([
      { id: 1, title: 'ПЗ-31' },
      { id: 2, title: 'ПЗ-32' },
      { id: 3, title: 'ПЗ-33' },
      { id: 4, title: 'ПЗ-34' }
    ]);
  });

  it('має обробляти неіснуючий afterId', () => {
    const array = [{ id: 1, title: 'ПЗ-31' }];
    const newGroup = { id: 99, title: 'ПЗ-99' };
    const result = sortGroups(array, newGroup, 9999);
    
    expect(result).toEqual([
      { id: 99, title: 'ПЗ-99' },
      { id: 1, title: 'ПЗ-31' }
    ]);
  });
});