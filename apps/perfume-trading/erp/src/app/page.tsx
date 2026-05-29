'use client';

import React, { useState, useMemo } from 'react';
import {
  TrendingUp, Package, ShoppingCart, UserCheck,
  DollarSign, AlertTriangle, BarChart3, Percent, Bell, Wrench, Languages, Euro
} from 'lucide-react';
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer,
  LineChart, Line, CartesianGrid,
} from 'recharts';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { InventoryService } from '@/lib/services/inventory';
import type { StockAlert } from '@/lib/services/inventory';

// ─── Mock KPI Data ───
const kpis = [
  { title: 'Ventas (30d)', value: 124500, isCurrency: true, change: '+12.5%', positive: true },
  { title: 'Ofertas Activas', value: 48, change: '+3', positive: true },
  { title: 'Stock Bajo', value: '12 SKUs', change: '-2', positive: false, icon: AlertTriangle },
  { title: 'Margen Promedio', value: '24.8%', change: '+2.1%', positive: true, icon: Percent },
];

const monthlyData = [
  { month: 'Ene', sales: 85, purchases: 45 },
  { month: 'Feb', sales: 92, purchases: 52 },
  { month: 'Mar', sales: 78, purchases: 48 },
  { month: 'Abr', sales: 110, purchases: 63 },
  { month: 'May', sales: 124, purchases: 58 },
  { month: 'Jun', sales: 95, purchases: 71 },
];

const tradingActivity = [
  { day: 'Lun', offers: 12, bids: 8 },
  { day: 'Mar', offers: 18, bids: 5 },
  { day: 'Mié', offers: 15, bids: 10 },
  { day: 'Jue', offers: 22, bids: 7 },
  { day: 'Vie', offers: 20, bids: 12 },
  { day: 'Sáb', offers: 8, bids: 3 },
  { day: 'Dom', offers: 5, bids: 2 },
];

// ─── Mock Stock Alerts ───
const stockAlerts: StockAlert[] = [
  { product_id: '1', product_name: 'Aventus EDP 100ml', brand_name: 'Creed', batch_code: 'LOT-2024-A', quantity: 12, threshold: 20, alert_type: 'low_stock' },
  { product_id: '2', product_name: 'Luna Rossa Carbon 150ml', brand_name: 'Prada', batch_code: 'LOT-2023-B', quantity: 8, threshold: 20, alert_type: 'low_stock' },
  { product_id: '3', product_name: 'Black Orchid EDP 50ml', brand_name: 'Tom Ford', batch_code: 'LOT-2024-C', quantity: 5, threshold: 20, alert_type: 'low_stock' },
  { product_id: '4', product_name: 'Sauvage EDT 100ml Tester', brand_name: 'Dior', batch_code: 'LOT-2022-D', quantity: 45, threshold: 20, alert_type: 'expiring', expiry_date: '2026-08-15' },
];

const recentActivity = [
  { msg: 'Creed Aventus — Stock crítico (12 uds)', time: 'hace 1h', type: 'critical' as const },
  { msg: 'Nueva oferta recibida de GlobalFragance GmbH', time: 'hace 3h', type: 'info' as const },
  { msg: 'Factura INV-2026-0004 marcada como Pagada', time: 'hace 5h', type: 'success' as const },
  { msg: 'Prada Luna Rossa batch LOT-2023-B por expirar', time: 'hace 6h', type: 'warning' as const },
];

const recentOffers = [
  { brand: 'Chanel', product: 'Bleu de Chanel EDP 100ml', qty: 50, price: 78.50, status: 'Activa' as const },
  { brand: 'Dior', product: 'Sauvage EDT 100ml Tester', qty: 100, price: 62.00, status: 'Pendiente' as const },
  { brand: 'Creed', product: 'Aventus EDP 100ml', qty: 10, price: 245.00, status: 'Cerrada' as const },
  { brand: 'Tom Ford', product: 'Ombre Leather EDP 100ml', qty: 25, price: 115.00, status: 'Activa' as const },
];

const activityColors = {
  critical: 'bg-red-500',
  warning: 'bg-yellow-500',
  info: 'bg-blue-500',
  success: 'bg-green-500',
};

const statusStyles = {
  Activa: 'bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-400',
  Pendiente: 'bg-yellow-50 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400',
  Cerrada: 'bg-gray-50 text-gray-700 dark:bg-gray-800 dark:text-gray-400',
};

import { CurrencyDisplay } from '@/components/ui/currency-display';
import { useUIStore } from '@/stores/ui-store';

export default function Dashboard() {
  const [alerts] = useState(stockAlerts);
  const lowStockCount = useMemo(() => alerts.filter((a) => a.alert_type === 'low_stock').length, [alerts]);
  const { currency } = useUIStore();

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-xl font-bold text-[#323130] dark:text-[#e0e0e0]">Panel de Control</h2>
          <p className="text-xs text-[#605E5C] dark:text-[#888]">
            {new Date().toLocaleDateString('es-ES', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
        <Badge variant="info" dot>v1.0 — Perfume Trading</Badge>
      </div>

      {/* KPI Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {kpis.map((kpi) => (
          <Card key={kpi.title}>
            <CardHeader>
              <CardTitle>{kpi.title}</CardTitle>
              {kpi.icon ? (
                <kpi.icon size={18} className="text-[#f43f5e] dark:text-[#fb7185]" />
              ) : kpi.isCurrency ? (
                currency === 'USD' ? <DollarSign size={18} className="text-[#f43f5e] dark:text-[#fb7185]" /> : <Euro size={18} className="text-[#f43f5e] dark:text-[#fb7185]" />
              ) : (
                <ShoppingCart size={18} className="text-[#f43f5e] dark:text-[#fb7185]" />
              )}
            </CardHeader>
            <CardContent>
              <div className="flex items-end justify-between">
                <span className="text-2xl font-bold text-[#323130] dark:text-[#e0e0e0]">
                  {kpi.isCurrency ? <CurrencyDisplay amountUSD={kpi.value as number} /> : kpi.value}
                </span>
                <span className={cn('text-xs font-medium', kpi.positive ? 'text-green-600' : 'text-red-600')}>
                  {kpi.change}
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Quick Access */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <a href="https://msbross.me/app/traductor/" target="_blank" rel="noopener noreferrer"
          className="flex items-center p-4 bg-white dark:bg-[#1e1e1e] border border-[#EDEBE9] dark:border-[#333] shadow-sm hover:border-[#f43f5e] dark:hover:border-[#fb7185] transition-colors group">
          <div className="w-10 h-10 rounded-lg bg-[#F0F7FF] dark:bg-[#1a2a3a] flex items-center justify-center mr-4 shrink-0">
            <Languages size={20} className="text-[#f43f5e] dark:text-[#fb7185]" />
          </div>
          <div>
            <p className="text-sm font-bold text-[#323130] dark:text-[#e0e0e0] group-hover:text-[#f43f5e] dark:group-hover:text-[#fb7185] transition-colors">Traductor</p>
            <p className="text-[10px] text-[#605E5C] dark:text-[#888]">Comunicaciones multilingüe con socios</p>
          </div>
        </a>
        <a href="https://msbross.me/app/logisearch/" target="_blank" rel="noopener noreferrer"
          className="flex items-center p-4 bg-white dark:bg-[#1e1e1e] border border-[#EDEBE9] dark:border-[#333] shadow-sm hover:border-[#f43f5e] dark:hover:border-[#fb7185] transition-colors group">
          <div className="w-10 h-10 rounded-lg bg-[#F0F7FF] dark:bg-[#1a2a3a] flex items-center justify-center mr-4 shrink-0">
            <Wrench size={20} className="text-[#f43f5e] dark:text-[#fb7185]" />
          </div>
          <div>
            <p className="text-sm font-bold text-[#323130] dark:text-[#e0e0e0] group-hover:text-[#f43f5e] dark:group-hover:text-[#fb7185] transition-colors">LogiSearch</p>
            <p className="text-[10px] text-[#605E5C] dark:text-[#888]">Tracking de envíos y rutas logísticas</p>
          </div>
        </a>
      </div>

      {/* Charts + Alerts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Sales Chart */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center">
              <BarChart3 size={16} className="mr-2 text-[#f43f5e]" />
              Ventas vs Compras (Mensual)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={monthlyData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#EDEBE9" />
                  <XAxis dataKey="month" tick={{ fontSize: 11, fill: '#605E5C' }} />
                  <YAxis tick={{ fontSize: 11, fill: '#605E5C' }} />
                  <Tooltip contentStyle={{ backgroundColor: 'var(--card)', border: '1px solid var(--card-border)', borderRadius: '4px', fontSize: '12px' }} />
                  <Bar dataKey="sales" name="Ventas" fill="#f43f5e" radius={[2, 2, 0, 0]} />
                  <Bar dataKey="purchases" name="Compras" fill="#fb7185" radius={[2, 2, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Stock Alerts Panel */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Bell size={16} className="mr-2 text-[#f43f5e]" />
              Alertas de Stock
              {lowStockCount > 0 && (
                <span className="ml-2 px-1.5 py-0.5 bg-red-500 text-white text-[10px] font-bold rounded-full">
                  {lowStockCount}
                </span>
              )}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {alerts.slice(0, 4).map((alert, idx) => (
              <div key={idx} className="flex items-start space-x-3">
                <div className={cn(
                  'w-2 h-2 mt-1.5 rounded-full shrink-0',
                  alert.alert_type === 'low_stock' ? 'bg-red-500' :
                  alert.alert_type === 'expiring' ? 'bg-yellow-500' : 'bg-blue-500'
                )} />
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-medium text-[#323130] dark:text-[#e0e0e0] truncate">
                    {alert.brand_name} {alert.product_name}
                  </p>
                  <p className="text-[10px] text-[#605E5C] dark:text-[#888]">
                    {alert.alert_type === 'low_stock'
                      ? `Stock: ${alert.quantity} uds (mín: ${alert.threshold})`
                      : alert.alert_type === 'expiring'
                        ? `Caduca: ${alert.expiry_date}`
                        : `Batch: ${alert.batch_code}`
                    }
                  </p>
                </div>
                <Badge variant={alert.alert_type === 'low_stock' ? 'error' : 'warning'}>
                  {alert.quantity}uds
                </Badge>
              </div>
            ))}
            <button className="w-full text-center text-[11px] text-[#f43f5e] dark:text-[#fb7185] font-semibold hover:underline pt-2">
              Ver todas las alertas →
            </button>
          </CardContent>
        </Card>
      </div>

      {/* Activity Feed + Recent Trading */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Activity Feed */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <TrendingUp size={16} className="mr-2 text-[#f43f5e]" />
              Actividad Reciente
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentActivity.map((act, idx) => (
              <div key={idx} className="flex items-start space-x-3">
                <div className={cn('w-2 h-2 mt-1 rounded-full shrink-0', activityColors[act.type])} />
                <div>
                  <p className="text-xs font-medium text-[#323130] dark:text-[#e0e0e0]">{act.msg}</p>
                  <p className="text-[10px] text-[#605E5C] dark:text-[#888]">{act.time}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Recent Trading */}
        <Card className="lg:col-span-2" padding={false}>
          <div className="p-4 border-b border-[#EDEBE9] dark:border-[#333] flex justify-between items-center">
            <CardTitle className="flex items-center">
              <Package size={16} className="mr-2 text-[#f43f5e]" />
              Ofertas de Trading Recientes
            </CardTitle>
            <button className="text-[#f43f5e] dark:text-[#fb7185] text-xs font-semibold hover:underline">Ver todo</button>
          </div>
          <table className="w-full text-left text-sm">
            <thead className="bg-[#F3F2F1] dark:bg-[#2a2a2a] text-[#605E5C] dark:text-[#888] font-semibold">
              <tr>
                {['Marca', 'Producto', 'Cantidad', 'Precio Unit.', 'Estado'].map((h) => (
                  <th key={h} className="px-4 py-2 text-xs uppercase tracking-wider">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-[#EDEBE9] dark:divide-[#333]">
              {recentOffers.map((offer, idx) => (
                <tr key={idx} className="hover:bg-[#FAF9F8] dark:hover:bg-[#222] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#f43f5e] dark:text-[#fb7185]">{offer.brand}</td>
                  <td className="px-4 py-3">{offer.product}</td>
                  <td className="px-4 py-3">{offer.qty}</td>
                  <td className="px-4 py-3">
                    <CurrencyDisplay amountUSD={offer.price} size="sm" />
                  </td>
                  <td className="px-4 py-3">
                    <span className={cn('px-2 py-0.5 rounded-full text-[10px] font-bold', statusStyles[offer.status])}>
                      {offer.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
      </div>
    </div>
  );
}
