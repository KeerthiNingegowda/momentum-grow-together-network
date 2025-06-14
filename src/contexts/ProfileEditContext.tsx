
import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface ProfileSection {
  id: string;
  type: string;
  title: string;
  content: any;
  isVisible: boolean;
  order: number;
}

interface ProfileEditContextType {
  isEditMode: boolean;
  setIsEditMode: (isEdit: boolean) => void;
  sections: ProfileSection[];
  setSections: (sections: ProfileSection[]) => void;
  addSection: (type: string) => void;
  removeSection: (id: string) => void;
  updateSection: (id: string, updates: Partial<ProfileSection>) => void;
  reorderSections: (dragIndex: number, hoverIndex: number) => void;
}

const ProfileEditContext = createContext<ProfileEditContextType | undefined>(undefined);

export const useProfileEdit = () => {
  const context = useContext(ProfileEditContext);
  if (!context) {
    throw new Error('useProfileEdit must be used within a ProfileEditProvider');
  }
  return context;
};

interface ProfileEditProviderProps {
  children: ReactNode;
}

export const ProfileEditProvider = ({ children }: ProfileEditProviderProps) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [sections, setSections] = useState<ProfileSection[]>([
    {
      id: 'hero',
      type: 'hero',
      title: 'Hero Section',
      content: {},
      isVisible: true,
      order: 0
    },
    {
      id: 'metrics',
      type: 'metrics',
      title: 'Key Metrics',
      content: {},
      isVisible: true,
      order: 1
    },
    {
      id: 'wins',
      type: 'wins',
      title: 'Recent Business Wins',
      content: {},
      isVisible: true,
      order: 2
    },
    {
      id: 'testimonials',
      type: 'testimonials',
      title: 'Client Testimonials',
      content: {},
      isVisible: true,
      order: 3
    },
    {
      id: 'cta',
      type: 'cta',
      title: 'Call to Action',
      content: {},
      isVisible: true,
      order: 4
    }
  ]);

  const addSection = (type: string) => {
    const newSection: ProfileSection = {
      id: `${type}-${Date.now()}`,
      type,
      title: getSectionTitle(type),
      content: getDefaultContent(type),
      isVisible: true,
      order: sections.length
    };
    setSections([...sections, newSection]);
  };

  const removeSection = (id: string) => {
    setSections(sections.filter(section => section.id !== id));
  };

  const updateSection = (id: string, updates: Partial<ProfileSection>) => {
    setSections(sections.map(section => 
      section.id === id ? { ...section, ...updates } : section
    ));
  };

  const reorderSections = (dragIndex: number, hoverIndex: number) => {
    const draggedSection = sections[dragIndex];
    const updatedSections = [...sections];
    updatedSections.splice(dragIndex, 1);
    updatedSections.splice(hoverIndex, 0, draggedSection);
    
    // Update order values
    const reorderedSections = updatedSections.map((section, index) => ({
      ...section,
      order: index
    }));
    
    setSections(reorderedSections);
  };

  return (
    <ProfileEditContext.Provider value={{
      isEditMode,
      setIsEditMode,
      sections,
      setSections,
      addSection,
      removeSection,
      updateSection,
      reorderSections
    }}>
      {children}
    </ProfileEditContext.Provider>
  );
};

const getSectionTitle = (type: string): string => {
  const titles: Record<string, string> = {
    'experience': 'Work Experience',
    'education': 'Education',
    'skills': 'Skills & Expertise',
    'projects': 'Featured Projects',
    'achievements': 'Achievements',
    'custom': 'Custom Section'
  };
  return titles[type] || 'New Section';
};

const getDefaultContent = (type: string): any => {
  const defaults: Record<string, any> = {
    'experience': { jobs: [] },
    'education': { schools: [] },
    'skills': { skills: [] },
    'projects': { projects: [] },
    'achievements': { achievements: [] },
    'custom': { text: 'Add your custom content here...' }
  };
  return defaults[type] || {};
};
