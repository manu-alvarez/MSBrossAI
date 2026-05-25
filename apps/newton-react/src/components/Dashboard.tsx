import { useState, useEffect } from 'react';
import { Grid, Card, CardContent, Typography, Box, Chip, CircularProgress, Button, Alert } from '@mui/material';
import { motion } from 'framer-motion';
import ChecklistIcon from '@mui/icons-material/Checklist';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import TodayIcon from '@mui/icons-material/Today';
import { api } from '../api/client';

interface Props {
  user: any;
  onNavigate: (view: string) => void;
}

export default function Dashboard({ user, onNavigate }: Props) {
  const [alerts, setAlerts] = useState<any[]>([]);
  const [stats, setStats] = useState<any>({});
  const [summary, setSummary] = useState<any>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      api.getAlerts().catch(() => []),
      api.getIncidentStats().catch(() => ({})),
      api.getSummary('period=month').catch(() => ({})),
    ]).then(([a, s, sum]) => {
      setAlerts(a);
      setStats(s);
      setSummary(sum);
    }).finally(() => setLoading(false));
  }, []);

  const today = new Date().toLocaleDateString('es-ES', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

  const cards = [
    { title: 'Checklists', icon: <ChecklistIcon sx={{ fontSize: 40 }} />, color: '#2ecc71', value: summary.completed !== undefined ? `${summary.completed}/${summary.total}` : '-', desc: 'Hoy', onClick: () => onNavigate('checklist') },
    { title: 'Alertas Caducidad', icon: <WarningAmberIcon sx={{ fontSize: 40 }} />, color: alerts.length > 0 ? '#f39c12' : '#2ecc71', value: alerts.length, desc: 'Productos próximos a caducar', onClick: () => onNavigate('expiry') },
    { title: 'Incidencias', icon: <ReportProblemIcon sx={{ fontSize: 40 }} />, color: '#e74c3c', value: stats.open !== undefined ? stats.open : '-', desc: 'Abiertas', onClick: () => onNavigate('incidents') },
    { title: 'Timesheet', icon: <AccessTimeIcon sx={{ fontSize: 40 }} />, color: '#3498db', value: summary.hours ? `${summary.hours}h` : '-', desc: 'Este mes', onClick: () => onNavigate('timesheet') },
  ];

  if (loading) return <Box sx={{ display: 'flex', justifyContent: 'center', p: 4 }}><CircularProgress /></Box>;

  return (
    <Box>
      <Box sx={{ mb: 3 }}>
        <Typography variant="h4">Bienvenido, {user?.name}</Typography>
        <Typography variant="body2" color="text.secondary" sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mt: 0.5 }}>
          <TodayIcon fontSize="small" /> {today}
        </Typography>
      </Box>

      <Grid container spacing={2} sx={{ mb: 3 }}>
        {cards.map((card, i) => (
          <Grid size={{ xs: 6, md: 3 }} key={i}>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }}>
              <Card sx={{ cursor: 'pointer', '&:hover': { borderColor: 'primary.main', transform: 'translateY(-2px)', transition: 'all 0.2s' } }} onClick={card.onClick}>
                <CardContent sx={{ textAlign: 'center', py: 2 }}>
                  <Box sx={{ color: card.color, mb: 1 }}>{card.icon}</Box>
                  <Typography variant="h4" fontWeight={700}>{card.value}</Typography>
                  <Typography variant="body2" fontWeight={600}>{card.title}</Typography>
                  <Typography variant="caption" color="text.secondary">{card.desc}</Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>

      {alerts.length > 0 && (
        <Card sx={{ mb: 3, borderColor: 'warning.main' }}>
          <CardContent>
            <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
              <WarningAmberIcon color="warning" /> Productos Próximos a Caducar
            </Typography>
            {alerts.slice(0, 5).map((a: any, i: number) => (
              <Box key={i} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', py: 0.5, borderBottom: i < alerts.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none' }}>
                <Typography variant="body2">{a.product_name} - {a.batch_code || a.batch_id}</Typography>
                <Chip size="small" label={a.days_left !== undefined ? `${a.days_left} días` : a.expiry_date} color={a.days_left <= 7 ? 'error' : 'warning'} />
              </Box>
            ))}
            <Button size="small" sx={{ mt: 1 }} onClick={() => onNavigate('expiry')}>Ver todas</Button>
          </CardContent>
        </Card>
      )}

      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Card>
            <CardContent>
              <Typography variant="h6" sx={{ mb: 1 }}>Incidencias Recientes</Typography>
              {stats.recent?.length > 0 ? stats.recent.slice(0, 5).map((inc: any, i: number) => (
                <Box key={i} sx={{ display: 'flex', justifyContent: 'space-between', py: 0.5, borderBottom: i < 4 ? '1px solid rgba(255,255,255,0.05)' : 'none' }}>
                  <Typography variant="body2" noWrap sx={{ maxWidth: 200 }}>{inc.title}</Typography>
                  <Chip size="small" label={inc.status} color={inc.status === 'abierta' ? 'error' : inc.status === 'en_curso' ? 'warning' : 'success'} />
                </Box>
              )) : <Typography variant="body2" color="text.secondary">Sin incidencias recientes</Typography>}
            </CardContent>
          </Card>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <Card>
            <CardContent>
              <Typography variant="h6" sx={{ mb: 1 }}>Checklists - Hoy</Typography>
              {summary.entries?.length > 0 ? summary.entries.map((e: any, i: number) => (
                <Box key={i} sx={{ display: 'flex', justifyContent: 'space-between', py: 0.5, borderBottom: i < summary.entries.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none' }}>
                  <Typography variant="body2">{e.template_name}</Typography>
                  <Chip size="small" label={e.completed ? '✅' : '⏳'} color={e.completed ? 'success' : 'warning'} />
                </Box>
              )) : <Typography variant="body2" color="text.secondary">Sin tareas registradas hoy</Typography>}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
