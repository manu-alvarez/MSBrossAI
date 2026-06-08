"use client";
import { v4 as uuidv4 } from "uuid";


import { useCoachingStore } from "@/store/coaching-store";
import { useRouter } from "next/navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Activity, ArrowLeft, CheckCircle, Play } from "lucide-react";
import { ActivityStatus } from "@/types/domain";
import { APP_NAME } from "@/utils/constants";
import Link from "next/link";

export default function PlanPage() {
  const router = useRouter();
  const { plan, activeModule, logActivity, activityLogs } = useCoachingStore();

  if (!plan || !activeModule) {
    return (
      <main className="min-h-screen py-12 px-4 flex flex-col items-center justify-center">
        <p className="text-surface-500 mb-4">No hay un módulo activo seleccionado.</p>
        <Link href="/dashboard" className="text-brand-600 font-medium hover:text-brand-700">
          Volver al Dashboard
        </Link>
      </main>
    );
  }

  const handleCompleteActivity = (activityId: string) => {
    logActivity(activityId, {
      id: uuidv4(),
      activityId,
      userId: plan.userId,
      metrics: {},
      completionStatus: "SUCCESS",
      completedAt: new Date().toISOString(),
      notes: "",
    });
  };

  return (
    <main className="min-h-screen bg-surface-50">
      <header className="bg-white border-b border-surface-200">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/dashboard" className="text-surface-500 hover:text-surface-700">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <Activity className="w-6 h-6 text-brand-600" />
            <span className="font-bold text-surface-900">{APP_NAME}</span>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-8">
          <span className="text-sm font-medium text-brand-600 mb-2 block">
            Módulo Activo
          </span>
          <h1 className="text-2xl font-bold text-surface-900 mb-2">
            {activeModule.title}
          </h1>
          <p className="text-surface-500">{activeModule.description}</p>
        </div>

        <div className="space-y-4">
          {activeModule.activities.map((activity) => {
            const isCompleted =
              activityLogs[activity.id]?.completionStatus === "SUCCESS";

            return (
              <Card key={activity.id} variant="bordered">
                <div className="flex items-start gap-4">
                  <div
                    className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center ${
                      isCompleted
                        ? "bg-green-50 text-green-600"
                        : "bg-brand-50 text-brand-600"
                    }`}
                  >
                    {isCompleted ? (
                      <CheckCircle className="w-5 h-5" />
                    ) : (
                      <Play className="w-5 h-5" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-semibold text-surface-900">
                        {activity.title}
                      </h3>
                      <span className="text-xs font-medium text-surface-400 capitalize">
                        {activity.type.toLowerCase().replace("_", " ")}
                      </span>
                    </div>
                    <p className="text-sm text-surface-600 mb-3">
                      {activity.instructions}
                    </p>

                    {activity.expectedMetrics.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-3">
                        {activity.expectedMetrics.map((metric) => (
                          <span
                            key={metric.fieldName}
                            className="inline-flex items-center px-2 py-1 rounded-lg bg-surface-100 text-xs text-surface-600"
                          >
                            {metric.fieldName} ({metric.unit})
                          </span>
                        ))}
                      </div>
                    )}

                    {!isCompleted && (
                      <Button
                        size="sm"
                        variant="primary"
                        onClick={() => handleCompleteActivity(activity.id)}
                      >
                        Marcar como Completada
                      </Button>
                    )}

                    {isCompleted && (
                      <span className="inline-flex items-center gap-1 text-sm text-green-600 font-medium">
                        <CheckCircle className="w-4 h-4" />
                        Completada
                      </span>
                    )}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </main>
  );
}
