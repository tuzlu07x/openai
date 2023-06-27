export default class Chat {
  constructor(client, className, functions, messages = [], classFunctionName) {
    this.model = "gpt-3.5-turbo-0613";
    this.client = client;
    this.className = className;
    this.functions = functions;
    this.messages = messages;
    this.classFunctionName = classFunctionName;
  }

  classFunction(...parameters) {
    const func = new this.className.constructor(...parameters);
    return `${this.className.name}.${this.classFunctionName}()`;
  }

  firstData() {
    return {
      model: this.model,
      messages: this.messages,
      functions: this.functions,
    };
  }

  secondData() {
    return {
      model: this.model,
      messages: this.messages,
    };
  }

  async handle() {
    const response = await this.client.post(this.firstData());
    let message = response.choices[0].message;
    this.messages.push(message);
    if (typeof message.function_call) {
      let functionName = message.function_call.name;
      let result = this.classFunction(...this.messages);

      this.messages.push({
        role: "function",
        name: functionName,
        content: result,
      });

      const response = await this.client.post(this.firstData());

      return response.choices[0].message;
    }
  }

  say(message) {
    this.messages = [];
    this.messages.push({
      role: "user",
      content: message,
    });
    return this.handle();
  }
}
