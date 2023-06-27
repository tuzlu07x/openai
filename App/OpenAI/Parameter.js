export default class Parameter {
  constructor(name, type, description, required) {
    this.name = name;
    this.type = type;
    this.description = description;
    this.required = required;
  }

  enum(enumArray = []) {
    this.enumArray = enumArray;
    return this;
  }

  required(required = false) {
    this.required = required;
    return this;
  }

  toArray() {
    const object = [];
    object.push({ type: this.type });
    if (this.description) object.push({ description: this.description });
    if (this.enumArray) object.push({ enum: this.enumArray });

    return { ...object };
  }
}
