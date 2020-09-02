export default class WrongSourceError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'WrongSourceError';
  }
}
