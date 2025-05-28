export interface IModifierBoardProps {
  seconds: number;
  minutes: number;
  hours: number;
  isRunning: boolean;
  pause: () => void;
  resume: () => void;
  setTimerHandler: (hour: number, minute: number, second: number) => void;
  setTimerStart: (timerStart: boolean) => void;
  timerStart: boolean;
  restart: any;
}

export interface ISkinCareRoutine {
  id: string;
  date: string;
  timeOfDay: 'AM' | 'PM';
  steps: {
    cleanser?: string;
    toner?: string;
    serum?: string;
    moisturizer?: string;
    sunscreen?: string;
    other?: string;
  };
  notes?: string;
}

export interface IMoodEntry {
  id: string;
  date: string;
  mood: 'happy' | 'calm' | 'anxious' | 'sad' | 'energetic';
  entry: string;
  tags: string[];
}

export interface ITheme {
  name: string;
  background: string;
  primaryColor: string;
  secondaryColor: string;
  textColor: string;
  accentColor: string;
}