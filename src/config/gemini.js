//const apiKey ="AIzaSyDCypVdrDMPiSHMngyuE4tO3sOMhwurkgg";


import {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } from "@google/generative-ai";
  
  const apiKey ="AIzaSyDCypVdrDMPiSHMngyuE4tO3sOMhwurkgg";
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash-exp",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
  };
  
  async function run(prompt) {
    const chatSession = model.startChat({
      generationConfig,
      history: [
      ],
    });
  
     const result = await chatSession.sendMessage(prompt);
    
    const response = result.response;
     console.log(response.text());
     return response.text();
  
}
  export default run;

// import {
//     GoogleGenerativeAI,
//     HarmCategory,
//     HarmBlockThreshold,
//   } from "@google/generative-ai";
  
//   const apiKey = AIzaSyDCypVdrDMPiSHMngyuE4tO3sOMhwurkgg; // Ensure this is set in your environment variables
//   const genAI = new GoogleGenerativeAI(apiKey);
  
//   const model = genAI.getGenerativeModel({
//     model: "gemini-2.0-flash-exp",
//   });
  
//   const generationConfig = {
//     temperature: 1,
//     topP: 0.95,
//     topK: 40,
//     maxOutputTokens: 8192,
//     responseMimeType: "text/plain",
//   };
  
//   async function run(prompt) {
//     const chatSession = model.startChat({
//       generationConfig,
//       history: [],
//     });
  
//     const result = await chatSession.sendMessage(prompt); // Fix: Remove quotes from 'prompt'
//     console.log(await result.response.text()); // Fix: Await the response text
//   }
  
//   export default run;
  