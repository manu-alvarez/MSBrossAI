import { Router } from 'express';
import { ProviderFactory } from '../providers/index.js';

const router = Router();

// Keywords extraction
router.post('/keywords', async (req, res) => {
  try {
    const { texto, idioma = 'es' } = req.body;
    if (!texto) return res.status(400).json({ error: 'Texto requerido' });

    const provider = ProviderFactory.create(req.body.provider || 'groq');
    const completion = await provider.chat.completions.create({
      model: provider.getDefaultModel(),
      temperature: 0.1,
      response_format: { type: 'json_object' },
      messages: [
        { role: 'system', content: `Extrae las 5-10 palabras clave más importantes del texto en ${idioma}. Devuelve JSON: {"keywords": ["palabra1", "palabra2"]}` },
        { role: 'user', content: texto },
      ],
    });
    const raw = completion.choices[0]?.message?.content || '{"keywords": []}';
    const parsed = JSON.parse(raw);
    return res.json(parsed);
  } catch (err: any) {
    return res.status(500).json({ error: 'Error extrayendo keywords', details: err?.message });
  }
});

// Sentiment analysis
router.post('/sentiment', async (req, res) => {
  try {
    const { texto } = req.body;
    if (!texto) return res.status(400).json({ error: 'Texto requerido' });

    const provider = ProviderFactory.create(req.body.provider || 'groq');
    const completion = await provider.chat.completions.create({
      model: provider.getDefaultModel(),
      temperature: 0.1,
      response_format: { type: 'json_object' },
      messages: [
        { role: 'system', content: 'Analiza el sentimiento del texto. Devuelve JSON: {"sentiment": "positive|negative|neutral", "confidence": 0.0-1.0, "explanation": "breve explicación"}' },
        { role: 'user', content: texto },
      ],
    });
    const raw = completion.choices[0]?.message?.content || '{"sentiment": "neutral"}';
    const parsed = JSON.parse(raw);
    return res.json(parsed);
  } catch (err: any) {
    return res.status(500).json({ error: 'Error analizando sentimiento', details: err?.message });
  }
});

// NER (Named Entity Recognition)
router.post('/ner', async (req, res) => {
  try {
    const { texto } = req.body;
    if (!texto) return res.status(400).json({ error: 'Texto requerido' });

    const provider = ProviderFactory.create(req.body.provider || 'groq');
    const completion = await provider.chat.completions.create({
      model: provider.getDefaultModel(),
      temperature: 0.1,
      response_format: { type: 'json_object' },
      messages: [
        { role: 'system', content: 'Extrae entidades nombradas del texto. Devuelve JSON: {"entities": [{"text": "...", "type": "PERSON|ORG|LOCATION|DATE|MONEY|OTHER"}]}' },
        { role: 'user', content: texto },
      ],
    });
    const raw = completion.choices[0]?.message?.content || '{"entities": []}';
    const parsed = JSON.parse(raw);
    return res.json(parsed);
  } catch (err: any) {
    return res.status(500).json({ error: 'Error extrayendo entidades', details: err?.message });
  }
});

export default router;
