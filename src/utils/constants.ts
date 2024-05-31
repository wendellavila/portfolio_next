import { Montserrat } from 'next/font/google';

export const montserrat = Montserrat({
  subsets: ['latin'],
});

export const timezone = 'America/Sao_Paulo';
export const i18nConfig = {
  locales: ['en', 'pt'],
  defaultLocale: 'en',
};

export const projectTitle = 'Title'; //'Wen\xADdell Jo\xADão Cas\xADtro de A\xADvi\xADla';
export const deployUrl = 'https://wendellavila.github.io';
export const githubUrl = 'https://github.com/wendellavila';
export const repoUrl = `${githubUrl}/portfolio_next`;
export const linkedinUrl = 'https://linkedin.com/in/wendellavila';
export const email = 'wendelljcavila@gmail.com';

interface CvDataItem {
  id: string;
  institution?: string;
  titleUrl?: string;
  institutionUrl?: string;
  years?: string;
}

const educationData: CvDataItem[] = [
  {
    id: 'unifal',
    institutionUrl: 'https://wendellavila.github.io',
  },
];

const experienceData: CvDataItem[] = [
  {
    id: 'exportadora',
    institution: 'Exportadora de Café Guaxupé Ltda.',
    institutionUrl: 'https://www.guaxupe.com.br',
  },
  {
    id: 'progepe',
    institution: 'Pró-Reitoria de Gestão de Pessoas - Unifal-MG',
    institutionUrl: 'https://progepe.unifal-mg.edu.br',
  },
  {
    id: 'tribit',
    institution: 'TriBit Jr.',
  },
];

const coursesData: CvDataItem[] = [
  {
    id: 'machineLearning',
    institution: 'Udemy',
    titleUrl: 'https://udemy.com',
    years: '2024',
  },
  {
    id: 'python',
    institution: 'Udemy',
    titleUrl: 'https://udemy.com',
    years: '2024',
  },
  {
    id: 'java',
    institution: 'Udemy',
    titleUrl: 'https://udemy.com',
    years: '2024',
  },
  {
    id: 'r',
    institution: 'Udemy',
    titleUrl: 'https://udemy.com',
    years: '2024',
  },
];

const publicationsData: CvDataItem[] = [
  {
    id: 'l&nlm',
    institution: 'Learning & Nonlinear Models',
    titleUrl: 'https://wendellavila.github.io',
    institutionUrl: 'https://wendellavila.github.io',
    years: '2024',
  },
];

export const cvData = [
  {
    id: 'education',
    data: educationData,
  },
  {
    id: 'experience',
    data: experienceData,
  },
  {
    id: 'courses',
    data: coursesData,
  },
  {
    id: 'publications',
    data: publicationsData,
  },
];

interface SkillItem {
  title: string;
  icon: string;
  percentage: number;
}

const skillLanguages: SkillItem[] = [
  { title: 'Typescript', icon: 'simple-icons:typescript', percentage: 85 },
  { title: 'PHP', icon: 'simple-icons:php', percentage: 90 },
  { title: 'Python', icon: 'simple-icons:python', percentage: 95 },
  { title: 'Dart', icon: 'simple-icons:dart', percentage: 80 },
  { title: 'Java', icon: 'ri:java-fill', percentage: 70 },
  { title: 'C', icon: 'simple-icons:c', percentage: 60 },
  { title: 'Lua', icon: 'simple-icons:lua', percentage: 50 },
  { title: 'Bash', icon: 'simple-icons:gnubash', percentage: 30 },
];
const skillFrameworks: SkillItem[] = [
  {
    title: 'Next.Js',
    icon: 'simple-icons:nextdotjs',
    percentage: 80,
  },
  {
    title: 'React',
    icon: 'simple-icons:react',
    percentage: 90,
  },
  {
    title: 'Tailwind CSS',
    icon: 'simple-icons:tailwindcss',
    percentage: 95,
  },
  {
    title: 'Flutter',
    icon: 'simple-icons:flutter',
    percentage: 90,
  },
  {
    title: 'SQL Server',
    icon: 'simple-icons:microsoftsqlserver',
    percentage: 70,
  },
  {
    title: 'MySQL',
    icon: 'fontisto:mysql',
    percentage: 50,
  },
  {
    title: 'HTML 5',
    icon: 'simple-icons:html5',
    percentage: 95,
  },
  {
    title: 'CSS 3',
    icon: 'simple-icons:css3',
    percentage: 90,
  },
  {
    title: 'Git',
    icon: 'simple-icons:git',
    percentage: 60,
  },
];
const skillMachineLearning: SkillItem[] = [
  {
    title: 'Keras',
    icon: 'simple-icons:keras',
    percentage: 65,
  },
  {
    title: 'Numpy',
    icon: 'simple-icons:numpy',
    percentage: 75,
  },
  {
    title: 'Pandas',
    icon: 'simple-icons:pandas',
    percentage: 80,
  },
  {
    title: 'scikit-learn',
    icon: 'simple-icons:scikitlearn',
    percentage: 50,
  },
  {
    title: 'Matplotlib',
    icon: 'carbon:qq-plot',
    percentage: 40,
  },
  {
    title: 'Hyperopt',
    icon: 'cil:graph',
    percentage: 60,
  },
];
const skillOther: SkillItem[] = [
  {
    title: 'Arch Linux',
    icon: 'simple-icons:archlinux',
    percentage: 75,
  },
  {
    title: 'Adobe Photoshop',
    icon: 'simple-icons:adobephotoshop',
    percentage: 70,
  },
  {
    title: 'Inkscape',
    icon: 'simple-icons:inkscape',
    percentage: 65,
  },
];

export const skillsData = [
  { id: 'programmingLanguages', data: skillLanguages },
  { id: 'frameworks', data: skillFrameworks },
  { id: 'machineLearning', data: skillMachineLearning },
  { id: 'other', data: skillOther },
];

interface ProjectItem {
  id: string;
  title: string;
  image: string;
  url: string;
}

export const projectData: ProjectItem[] = [
  {
    id: 'testProject',
    title: 'Test Project',
    image: 'profile.png',
    url: 'https://wendellavila.github.io',
  },
];
