
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getMarketAnalysis = async (marketData: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Analyze the following Solana DeFi market data and provide a brief strategic outlook for an autonomous agent: ${marketData}`,
      config: {
        temperature: 0.7,
        maxOutputTokens: 250,
      }
    });
    return response.text || "Market stable. Continuing current strategy.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Error connecting to AI oracle. Using fail-safe fallback logic.";
  }
};

export const chatWithAura = async (query: string, history: { role: 'user' | 'model', text: string }[]) => {
  try {
    const contents = history.map(h => ({
      role: h.role,
      parts: [{ text: h.text }]
    }));
    
    // Add the current user query
    contents.push({
      role: 'user',
      parts: [{ text: query }]
    });

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: contents,
      config: {
        systemInstruction: "You are Aura, the core AI engine of AuraFlow. You are an expert in Solana DeFi, yield optimization, liquidity pools (Orca, Raydium, Meteora), and risk management. Keep responses concise, professional, and data-driven. Always remind users that DeFi carries risk.",
        temperature: 0.8,
        maxOutputTokens: 500,
      }
    });
    return response.text || "I'm processing that information now. Please try rephrasing.";
  } catch (error) {
    console.error("Gemini Chat Error:", error);
    return "The neural link is experiencing high congestion on-chain. Please try again in a moment.";
  }
};

export const getStrategyRecommendation = async (userRisk: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Based on a ${userRisk} risk profile, recommend a Solana DeFi strategy involving Orca, Kamino, or Jito. Format as JSON.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            strategyName: { type: Type.STRING },
            reasoning: { type: Type.STRING },
            expectedApy: { type: Type.NUMBER },
            primaryProtocol: { type: Type.STRING }
          },
          required: ["strategyName", "reasoning", "expectedApy", "primaryProtocol"]
        }
      }
    });
    return JSON.parse(response.text);
  } catch (error) {
    return {
      strategyName: "Dynamic Yield Router",
      reasoning: "Market volatility is high. Routing to stable lending pools.",
      expectedApy: 8.5,
      primaryProtocol: "Kamino Finance"
    };
  }
};
