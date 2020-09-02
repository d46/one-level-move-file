export default class NotExistSourceError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'NotExistSourceError';
  }
}
