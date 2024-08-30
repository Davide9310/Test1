console.log("JavaScript file loaded successfully");

// import Replicate from "replicate";
import Replicate from "https://cdn.skypack.dev/replicate";

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
});

const input = {
  top_k: 50,
  top_p: 0.9,
  prompt: "Tina has one brother and one sister. How many sisters do Tina's siblings have?",
  max_tokens: 1024,
  min_tokens: 0,
  temperature: 0.6,
  system_prompt: "You are a helpful assistant.",
  presence_penalty: 0,
  frequency_penalty: 0
};

for await (const event of replicate.stream("meta/meta-llama-3.1-405b-instruct", { input })) {
  process.stdout.write(event.toString());
};
