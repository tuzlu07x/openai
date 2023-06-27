import BaseFunction from "./BaseFunction.js";

export default class Example extends BaseFunction {
  constructor(location, unit) {
    super();
    this.location = location;
    this.unit = unit;
  }

  static required() {
    return ["location"];
  }

  static model() {
    return "gpt-3.5-turbo-0613";
  }

  static name() {
    return "get_current_weather";
  }

  static description() {
    return "Get the current weather in a given location";
  }

  static type() {
    return "object";
  }

  parameters() {
    let parameters = [
      this.parameter(
        "location",
        "string",
        "The city and state, e.g. San Francisco, CA"
      ),
      this.parameter("unit", "string").enum(["celcius", "fahrenheit"]),
    ];
    return parameters;
  }

  handle() {
    let arr = {
      location: this.location,
      temperature: "60",
      unit: this.unit,
      forecast: ["windy"],
    };
    return JSON.stringify(arr);
  }
}
