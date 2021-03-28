export class Author {
  private _tool: Tool | null = null;
  constructor(private _name: string) {}

  get name(): string {
    return this._name;
  }

  set tool(tool: Tool | null) {
    this._tool = tool;
  }

  get tool(): Tool | null {
    return this._tool;
  }

  write(): void {
    if (this.tool === null) {
      console.log('Not i can write without tool');
      return;
    }

    this.tool.write();
  }
}

export abstract class Tool {
  constructor(private _name: string) {}
  abstract write(): void;

  get name(): string {
    return this._name;
  }
}

export class Pen extends Tool {
  write(): void {
    console.log(this.name + ' Is writig...');
  }
}

export class Machine extends Tool {
  write(): void {
    console.log(this.name + ' Is typing...');
  }
}

const author = new Author('João');
const pen = new Pen('Bic');
const machine = new Machine('Machine');

console.log(author.name, pen.name, machine.name);

author.tool = pen;
author.write();
