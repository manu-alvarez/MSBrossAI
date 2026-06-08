-- Initial Schema for TxaFitnessPro

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Assessment Table
CREATE TABLE public.assessments (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    score FLOAT NOT NULL,
    answers JSONB NOT NULL DEFAULT '[]',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Diagnostic Report Table
CREATE TABLE public.diagnostic_reports (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    assessment_id UUID REFERENCES public.assessments(id) ON DELETE CASCADE,
    assessment_score FLOAT NOT NULL,
    weak_areas JSONB NOT NULL DEFAULT '[]',
    completion_time_seconds INT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Coaching Plan Table
CREATE TYPE public.plan_status AS ENUM ('DRAFT', 'ACTIVE', 'ARCHIVED', 'NEEDS_REVIEW');

CREATE TABLE public.coaching_plans (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    assessment_id UUID REFERENCES public.assessments(id) ON DELETE CASCADE,
    status public.plan_status NOT NULL DEFAULT 'ACTIVE',
    goal TEXT NOT NULL,
    summary TEXT,
    last_reviewed TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Coaching Module Table
CREATE TYPE public.module_type AS ENUM ('WISDOM', 'STRENGTH', 'CARDIO', 'SLEEP_HYGIENE', 'PHYSICAL_ACTIVITY', 'NUTRITION', 'RECOVERY', 'MENTAL_WELLBEING');

CREATE TABLE public.coaching_modules (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    plan_id UUID REFERENCES public.coaching_plans(id) ON DELETE CASCADE,
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    module_type public.module_type NOT NULL,
    base_difficulty INT NOT NULL,
    difficulty_multiplier FLOAT NOT NULL DEFAULT 1.0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Activities Table
CREATE TYPE public.activity_type AS ENUM ('CALISTHENICS', 'CARDIO', 'STRETCH', 'HABIT_TRACKING');

CREATE TABLE public.activities (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    module_id UUID REFERENCES public.coaching_modules(id) ON DELETE CASCADE,
    type public.activity_type NOT NULL,
    title TEXT NOT NULL,
    instructions TEXT NOT NULL,
    expected_metrics JSONB NOT NULL DEFAULT '[]',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Activity Completion Log
CREATE TYPE public.completion_status AS ENUM ('SUCCESS', 'FAIL', 'PARTIAL');

CREATE TABLE public.activity_completion_logs (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    activity_id UUID REFERENCES public.activities(id) ON DELETE CASCADE,
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    metrics JSONB NOT NULL DEFAULT '{}',
    completion_status public.completion_status NOT NULL,
    completed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- RLS setup
ALTER TABLE public.assessments ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.diagnostic_reports ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.coaching_plans ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.coaching_modules ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.activities ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.activity_completion_logs ENABLE ROW LEVEL SECURITY;

-- RLS Policies
CREATE POLICY "Users can view their own assessments" ON public.assessments FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert their own assessments" ON public.assessments FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can view their own reports" ON public.diagnostic_reports FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert their own reports" ON public.diagnostic_reports FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can view their own plans" ON public.coaching_plans FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert their own plans" ON public.coaching_plans FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can view their own modules" ON public.coaching_modules FOR SELECT USING (EXISTS (SELECT 1 FROM public.coaching_plans cp WHERE cp.id = plan_id AND cp.user_id = auth.uid()));
CREATE POLICY "Users can insert their own modules" ON public.coaching_modules FOR INSERT WITH CHECK (EXISTS (SELECT 1 FROM public.coaching_plans cp WHERE cp.id = plan_id AND cp.user_id = auth.uid()));

CREATE POLICY "Users can view their own activities" ON public.activities FOR SELECT USING (EXISTS (SELECT 1 FROM public.coaching_modules cm JOIN public.coaching_plans cp ON cp.id = cm.plan_id WHERE cm.id = module_id AND cp.user_id = auth.uid()));
CREATE POLICY "Users can insert their own activities" ON public.activities FOR INSERT WITH CHECK (EXISTS (SELECT 1 FROM public.coaching_modules cm JOIN public.coaching_plans cp ON cp.id = cm.plan_id WHERE cm.id = module_id AND cp.user_id = auth.uid()));

CREATE POLICY "Users can view their own logs" ON public.activity_completion_logs FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert their own logs" ON public.activity_completion_logs FOR INSERT WITH CHECK (auth.uid() = user_id);
