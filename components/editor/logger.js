function Logger() {
  this.queue = [];
  this.original = console;
  console = this;
  this.log = (args) => {
    this.queue.push(JSON.stringify(args));
    this.original.log(args);
  };
  this.warn = this.original.warn;
};

export default Logger;
