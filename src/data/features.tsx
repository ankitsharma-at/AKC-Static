import React from 'react';
import { Monitor, Users, Award, Clock } from 'lucide-react';
import { Feature } from '../types';

export const features: Feature[] = [
  {
    id: 1,
    title: "Expert Instructors",
    description: "Learn from industry professionals with years of real-world experience",
    icon: <Award className="w-10 h-10 text-blue-500" />
  },
  {
    id: 2,
    title: "Interactive Learning",
    description: "Engage with hands-on projects, quizzes, and peer collaboration",
    icon: <Users className="w-10 h-10 text-blue-500" />
  },
  {
    id: 3,
    title: "Flexible Schedule",
    description: "Study at your own pace with lifetime access to course materials",
    icon: <Clock className="w-10 h-10 text-blue-500" />
  },
  {
    id: 4,
    title: "HD Video Content",
    description: "Enjoy high-quality video lessons with downloadable resources",
    icon: <Monitor className="w-10 h-10 text-blue-500" />
  }
];