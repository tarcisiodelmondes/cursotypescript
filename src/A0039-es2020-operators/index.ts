// Optional chaining operator and null coalescence

type _Document = {
  title: string;
  text: string;
  date?: Date;
};

const _document: _Document = {
  title: 'Title',
  text: 'Text',
};

console.log(_document.date?.toDateString());
