export default class NotExistDestinationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'NotExistDestinationError';
  }
}
