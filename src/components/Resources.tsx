import React from 'react';
import { BookOpen, Video, FileText } from 'lucide-react';

const Resources: React.FC = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Mental Health Resources</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2 flex items-center">
            <BookOpen className="mr-2" /> Articles
          </h3>
          <ul className="list-disc list-inside">
            <li>Understanding Anxiety</li>
            <li>Coping with Stress</li>
            <li>Improving Sleep Habits</li>
          </ul>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2 flex items-center">
            <Video className="mr-2" /> Videos
          </h3>
          <ul className="list-disc list-inside">
            <li>Mindfulness Techniques</li>
            <li>Cognitive Behavioral Therapy Basics</li>
            <li>Relaxation Exercises</li>
          </ul>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2 flex items-center">
            <FileText className="mr-2" /> Self-Assessment Quizzes
          </h3>
          <ul className="list-disc list-inside">
            <li>Stress Level Assessment</li>
            <li>Anxiety Screening</li>
            <li>Depression Questionnaire</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Resources;