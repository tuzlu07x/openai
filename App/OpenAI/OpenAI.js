import Chat from "./Chat.js";

export default class OpenAI {
  constructor(className, client) {
    this.className = className;
    this.client = client;
  }

  chat(functions, messages = [], classFunctionName) {
    return new Chat(
      this.client,
      this.className,
      functions,
      messages,
      classFunctionName
    );
  }
}
