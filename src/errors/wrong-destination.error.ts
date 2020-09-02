export default class WrongDestinationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'WrongDestinationError';
  }
}
