// Please update this type as same as with the data shape.

import NotExistDestinationError from './errors/not-exist-destination.error';
import NotExistSourceError from './errors/not-exist-source.error';
import WrongSourceError from './errors/wrong-source.error';
import WrongDestinationError from './errors/wrong-destination.error';

export default function move(list: List, source: string, destination: string): List {
  const listReference = list;
  let destinationIndex = null;
  let sourceReference = null;

  for (let i = 0; i < list.length; i += 1) {
    const folder: Folder = list[i];

    if (folder.id === source) {
      throw new WrongSourceError('Source cannot be a folder');
    }

    if (folder.id === destination) {
      destinationIndex = i;
    }

    const newFileItems = [];
    for (let t = 0; t < folder.files.length; t += 1) {
      const file: FileItem = folder.files[t];

      if (file.id === destination) {
        throw new WrongDestinationError('Source cannot be a folder');
      }

      if (file.id !== source) {
        newFileItems.push(file);
      } else {
        sourceReference = file;
      }
    }
    listReference[i].files = newFileItems;
  }

  if (sourceReference === null) {
    throw new NotExistSourceError('Source is not exist');
  }
  if (destinationIndex === null) {
    throw new NotExistDestinationError('Destination is not exist');
  }

  listReference[destinationIndex].files.push(sourceReference);

  return listReference;
}
