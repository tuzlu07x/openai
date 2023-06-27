import Client from "./App/OpenAI/Client.js";
import dotenv from "dotenv";
import Example from "./App/OpenAI/Example.js";
import OpenAI from "./App/OpenAI/OpenAI.js";
dotenv.config();

const bearerToken = process.env.OPENAI_API_KEY;
const openAIOrganization = process.env.ORGANIZATION;
const client = new Client(
  bearerToken,
  openAIOrganization,
  "https://api.openai.com/"
);

const messages = {
  messages: [{ role: "user", content: "What is the weather like in Boston?" }],
};
const example = new Example("Boston", "farhenheit");
const functions = [example.function()];
//console.log(functions);
const openAI = new OpenAI(new Example("Boston", "farhenheit"), client);
const chat = openAI.chat(functions, messages, "handle");

console.log(chat.say("Bostonda hava kac derece"));
