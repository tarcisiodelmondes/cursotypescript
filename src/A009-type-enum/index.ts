enum Colors {
  RED = 10,
  YELLOW = 'YELLOW',
  BLUE = 5,
}

enum Colors {
  BLACK = 'BLACK',
}

function choiceColor(cor: Colors): void {
  console.log(Colors[cor]);
}

choiceColor(Colors.BLACK);
