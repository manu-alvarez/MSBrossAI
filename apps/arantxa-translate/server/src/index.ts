import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import processRouter from './routes/process.js';
import documentsRouter from './routes/documents.js';
import extrasRouter from './routes/extras.js';

const app = express();
const PORT = process.env.PORT || 3001;

// Security middleware
app.use(helmet());

// CORS - secure configuration
const corsOrigins = process.env.CORS_ORIGINS?.split(',') || ['http://localhost:5173'];
app.use(cors({
  origin: corsOrigins,
  credentials: true,
}));

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: 'Demasiadas solicitudes. Inténtalo de nuevo más tarde.',
});
app.use('/api', limiter);

// Body parsing
app.use(express.json({ limit: '2mb' }));

// Routes
app.use('/api', processRouter);
app.use('/api', documentsRouter);
app.use('/api', extrasRouter);

// Health check
app.get('/health', (_req, res) => {
  res.json({ status: 'ok', service: 'arantxa-translate' });
});

app.listen(PORT, () => {
  console.log(`Arantxa Translate API escuchando en http://localhost:${PORT}`);
});
