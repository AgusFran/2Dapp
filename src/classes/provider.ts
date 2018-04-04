export abstract class Provider {
  abstract get(key: string);
  abstract getAll();
  abstract addItem(item);
  abstract removeItem(key: string);
}
