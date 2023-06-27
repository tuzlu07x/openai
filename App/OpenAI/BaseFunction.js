import Parameter from "./Parameter.js";

export default class BaseFunction {
  static name() {
    throw new Error("name() method must be implemented");
  }

  static description() {
    throw new Error("description() method must be implemented");
  }

  static type() {
    throw new Error("type() method must be implemented");
  }

  static model() {
    throw new Error("model() method must be implemented");
  }

  static required() {
    throw new Error("required() method must be implemented");
  }

  handle() {
    throw new Error("handle() method must be implemented");
  }

  parameter(name, type, description = null, required = false) {
    return new Parameter(name, type, description, required);
  }

  properties() {
    throw new Error("properties() method must be implemented");
  }

  baseParameter(parameters) {
    const properties = {};
    for (const parameter of parameters) {
      properties[parameter.name] = parameter.toArray();
    }
    return properties;
  }

  function() {
    return {
      name: this.constructor.name(),
      description: this.constructor.description(),
      parameters: {
        type: this.constructor.type(),
        properties: this.baseParameter(this.parameters()),
        required: this.constructor.required(),
      },
    };
  }

  json(data) {
    return JSON.stringify(data, null, 2);
  }
}
