import OpenAI from 'openai';
import fs from 'fs/promises';
import path from 'path';
import appConfig from '../appConfig';

let prompt = '';
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
const writeSummary = async (transcription: string) => {
  if (!prompt) {
    prompt = await fs.readFile(path.join(appConfig.paths.PROMPT_FILE), {
      encoding: 'utf-8',
    });
  }

  const completion = await openai.chat.completions.create({
    model: 'gpt-4o-mini',
    messages: [
      {
        role: 'system',
        content: prompt,
      },
      {
        role: 'user',
        content: transcription,
      },
    ],
  });

  return completion.choices[0].message.content;
};

export default writeSummary;
