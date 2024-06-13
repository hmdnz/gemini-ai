// Access your API key as an environment variable (see"set up your API key" above)
const { GoogleGenerativeAI } = require("@google/generative-ai");
const dotenv = require("dotenv");

dotenv.config(); // Load environment variables

const genAI = new GoogleGenerativeAI(process.env.API_KEY);

async function run() {
  // For text-only input, use the gemini-pro model
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  const prompt = "write a story about a magic backpack";

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = await response.text();
  console.log(text);
}

run();
