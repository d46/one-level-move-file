import move from './move';
import WrongSourceError from './errors/wrong-source.error';
import WrongDestinationError from './errors/wrong-destination.error';
import NotExistSourceError from './errors/not-exist-source.error';
import NotExistDestinationError from './errors/not-exist-destination.error';

describe('move', () => {
  it('moves given file to another folder', () => {
    const list: List = [
      {
        id: '1',
        name: 'Folder 1',
        files: [
          { id: '2', name: 'File 1' },
          { id: '3', name: 'File 2' },
          { id: '4', name: 'File 3' },
          { id: '5', name: 'File 4' },
        ],
      },
      {
        id: '6',
        name: 'Folder 2',
        files: [{ id: '7', name: 'File 5' }],
      },
    ];

    const result: List = [
      {
        id: '1',
        name: 'Folder 1',
        files: [
          { id: '2', name: 'File 1' },
          { id: '3', name: 'File 2' },
          { id: '5', name: 'File 4' },
        ],
      },
      {
        id: '6',
        name: 'Folder 2',
        files: [
          { id: '7', name: 'File 5' },
          { id: '4', name: 'File 3' },
        ],
      },
    ];

    expect(move(list, '4', '6')).toStrictEqual(result);
  });

  it('throws an error if given source is not a file', () => {
    const list: List = [
      {
        id: '1',
        name: 'Folder 1',
        files: [{ id: '2', name: 'File 1' }],
      },
      { id: '3', name: 'Folder 2', files: [] },
    ];

    expect(() => move(list, '3', '1')).toThrow(WrongSourceError);
  });

  it('throws an error if given destination is not a folder', () => {
    const list: List = [
      {
        id: '1',
        name: 'Folder 1',
        files: [{ id: '2', name: 'File 1' }],
      },
      { id: '3', name: 'Folder 2', files: [{ id: '4', name: 'File 2' }] },
    ];

    expect(() => move(list, '2', '4')).toThrow(WrongDestinationError);
  });

  it('throws an error if given source is not exist', () => {
    const list: List = [
      {
        id: '1',
        name: 'Folder 1',
        files: [{ id: '2', name: 'File 1' }],
      },
    ];

    expect(() => move(list, '5', '4')).toThrow(NotExistSourceError);
  });

  it('throws an error if given destination is not exist', () => {
    const list: List = [
      {
        id: '1',
        name: 'Folder 1',
        files: [{ id: '2', name: 'File 1' }],
      },
    ];

    expect(() => move(list, '2', '4')).toThrow(NotExistDestinationError);
  });
});
