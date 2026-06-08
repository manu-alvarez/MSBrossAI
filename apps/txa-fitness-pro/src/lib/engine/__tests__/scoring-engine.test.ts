import { describe, it, expect } from "vitest";
import { processDiagnosticAssessment } from "../scoring-engine";
import { AnswerSubmission, UserContext } from "@/types/domain";

const mockUser: UserContext = {
  id: "test-user-1",
  age: 30,
  gender: "male",
  primaryGoal: "general_fitness",
  experienceLevel: "intermediate",
  historicalAdherenceScore: 0.7,
  secondaryAreas: ["strength", "flexibility"],
};

describe("Scoring Engine", () => {
  it("should return a DiagnosticReport with valid structure", async () => {
    const submissions: AnswerSubmission[] = [
      { questionId: "sleep_quality", selectedOptionId: "low", value: 2, userContext: {} },
      { questionId: "stress_level", selectedOptionId: "high", value: 1, userContext: {} },
      { questionId: "nutrition_quality", selectedOptionId: "medium", value: 3, userContext: {} },
      { questionId: "exercise_frequency", selectedOptionId: "low", value: 2, userContext: {} },
      { questionId: "energy_levels", selectedOptionId: "low", value: 2, userContext: {} },
    ];

    const report = await processDiagnosticAssessment(submissions, mockUser);

    expect(report).toHaveProperty("id");
    expect(report).toHaveProperty("assessmentScore");
    expect(report.assessmentScore).toBeGreaterThanOrEqual(0);
    expect(report.assessmentScore).toBeLessThanOrEqual(1);
    expect(report.weakAreas).toBeInstanceOf(Array);
    expect(report.completionTimeSeconds).toBeGreaterThanOrEqual(0);
  });

  it("should return high score for optimal answers", async () => {
    const submissions: AnswerSubmission[] = [
      { questionId: "sleep_quality", selectedOptionId: "high", value: 5, userContext: {} },
      { questionId: "sleep_duration", selectedOptionId: "high", value: 5, userContext: {} },
      { questionId: "stress_level", selectedOptionId: "low", value: 4, userContext: {} },
      { questionId: "nutrition_quality", selectedOptionId: "high", value: 5, userContext: {} },
      { questionId: "exercise_frequency", selectedOptionId: "high", value: 5, userContext: {} },
    ];

    const report = await processDiagnosticAssessment(submissions, mockUser);
    expect(report.assessmentScore).toBeGreaterThan(0.5);
    expect(report.weakAreas.length).toBeLessThan(3);
  });

  it("should return low score for poor answers", async () => {
    const submissions: AnswerSubmission[] = [
      { questionId: "sleep_quality", selectedOptionId: "low", value: 1, userContext: {} },
      { questionId: "sleep_duration", selectedOptionId: "low", value: 1, userContext: {} },
      { questionId: "stress_level", selectedOptionId: "high", value: 1, userContext: {} },
      { questionId: "nutrition_quality", selectedOptionId: "low", value: 1, userContext: {} },
      { questionId: "exercise_frequency", selectedOptionId: "low", value: 1, userContext: {} },
    ];

    const report = await processDiagnosticAssessment(submissions, mockUser);
    expect(report.assessmentScore).toBeLessThan(0.4);
    expect(report.weakAreas.length).toBeGreaterThanOrEqual(2);
  });

  it("should detect interaction penalties between correlated dimensions", async () => {
    const poorSleep: AnswerSubmission[] = [
      { questionId: "sleep_quality", selectedOptionId: "low", value: 1, userContext: {} },
      { questionId: "sleep_duration", selectedOptionId: "low", value: 1, userContext: {} },
    ];
    const poorSleepAndStress: AnswerSubmission[] = [
      ...poorSleep,
      { questionId: "stress_level", selectedOptionId: "high", value: 1, userContext: {} },
      { questionId: "nutrition_quality", selectedOptionId: "medium", value: 3, userContext: {} },
      { questionId: "exercise_frequency", selectedOptionId: "medium", value: 3, userContext: {} },
    ];

    const report = await processDiagnosticAssessment(poorSleepAndStress, mockUser);
    const sleepWeakness = report.weakAreas.find((w) =>
      w.areaName.includes("Sueño")
    );
    expect(sleepWeakness).toBeDefined();
    expect(sleepWeakness!.severity).toBeGreaterThanOrEqual(2);
  });
});
