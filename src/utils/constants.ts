import { Montserrat } from 'next/font/google';

export const montserrat = Montserrat({
  subsets: ['latin'],
});

export const timezone = 'America/Sao_Paulo';
export const i18nConfig = {
  locales: ['en', 'pt'],
  defaultLocale: 'en',
};

export const projectTitle = 'Wen\xADdell Jo\xADão Cas\xADtro de A\xADvi\xADla';
export const deployUrl = 'https://wendellavila.github.io';
export const githubUrl = 'https://github.com/wendellavila';
export const repoUrl = `${githubUrl}/portfolio_next`;
export const linkedinUrl = 'https://linkedin.com/in/wendellavila';
export const email = 'wendelljcavila@gmail.com';

interface CvDataItem {
  id: string;
  title?: string;
  institution?: string;
  titleUrl?: string;
  institutionUrl?: string;
  years?: string;
}

const cvDataEducation: CvDataItem[] = [
  {
    id: 'unifal',
    institutionUrl: 'https://bcc.unifal-mg.edu.br',
  },
];

const cvDataExperience: CvDataItem[] = [
  {
    id: 'exportadora',
    institution: 'Exportadora de Café Guaxupé Ltda.',
    institutionUrl: 'https://www.guaxupe.com.br',
  },
  {
    id: 'progepe',
    institution: 'Pró-Reitoria de Gestão de Pessoas - Unifal-MG',
    institutionUrl: 'https://unifal-mg.edu.br/progepe/',
  },
  {
    id: 'tribit',
    institution: 'TriBit Jr. - Unifal-MG',
  },
];

const cvDataCourses: CvDataItem[] = [
  {
    id: 'java',
    institution: 'Udemy',
    titleUrl: 'https://www.udemy.com/course/java-curso-completo/',
    years: '2023',
  },
  {
    id: 'machineLearning',
    institution: 'Udemy',
    titleUrl: 'https://www.udemy.com/course/python-coding/',
    years: '2020-2021',
  },
  {
    id: 'python',
    institution: 'Udemy',
    titleUrl: 'https://www.udemy.com/course/python-coding/',
    years: '2019-2020',
  },
  {
    id: 'r',
    institution: 'Udemy',
    titleUrl: 'https://www.udemy.com/course/r-programming/',
    years: '2019-2020',
  },
];

const cvDataPublications: CvDataItem[] = [
  {
    id: 'l&nlm',
    title:
      'Study and Analysis of Deep Learning Techniques for Solving Financial Problems',
    institution: 'Learning & Nonlinear Models',
    titleUrl: 'https://sbic.org.br/lnlm/publicacoes/vol21-no2/vol21-no2-art4/',
    institutionUrl: 'https://sbic.org.br/lnlm/',
  },
];

export const cvData = [
  {
    id: 'education',
    data: cvDataEducation,
  },
  {
    id: 'experience',
    data: cvDataExperience,
  },
  {
    id: 'courses',
    data: cvDataCourses,
  },
  {
    id: 'publications',
    data: cvDataPublications,
  },
];

interface SkillItem {
  id: string;
  title?: string;
  icon?: string;
  percentage: number;
}

const skillsProgrammingLanguages: SkillItem[] = [
  {
    id: 'typescript',
    title: 'Type\xADscript',
    icon: 'simple-icons:typescript',
    percentage: 85,
  },
  { id: 'php', title: 'PHP', icon: 'simple-icons:php', percentage: 90 },
  {
    id: 'python',
    title: 'Python',
    icon: 'simple-icons:python',
    percentage: 95,
  },
  { id: 'dart', title: 'Dart', icon: 'simple-icons:dart', percentage: 80 },
  { id: 'java', title: 'Ja\xADva', icon: 'ri:java-fill', percentage: 70 },
  { id: 'c', title: 'C', icon: 'simple-icons:c', percentage: 60 },
  { id: 'lua', title: 'Lu\xADa', icon: 'simple-icons:lua', percentage: 50 },
  { id: 'bash', title: 'Bash', icon: 'simple-icons:gnubash', percentage: 30 },
];
const skillsFrameworksTech: SkillItem[] = [
  {
    id: 'nextjs',
    title: 'Next\xAD.Js',
    icon: 'simple-icons:nextdotjs',
    percentage: 80,
  },
  {
    id: 'react',
    title: 'Re\xADact',
    icon: 'simple-icons:react',
    percentage: 90,
  },
  {
    id: 'tailwindcss',
    title: 'Tail\xADwind CSS',
    icon: 'simple-icons:tailwindcss',
    percentage: 95,
  },
  {
    id: 'flutter',
    title: 'Flut\xADter',
    icon: 'simple-icons:flutter',
    percentage: 90,
  },
  {
    id: 'sqlsrv',
    title: 'SQL Serv\xADer',
    icon: 'simple-icons:microsoftsqlserver',
    percentage: 70,
  },
  {
    id: 'mysql',
    title: 'My\xADSQL',
    icon: 'fontisto:mysql',
    percentage: 50,
  },
  {
    id: 'html',
    title: 'HTML 5',
    icon: 'simple-icons:html5',
    percentage: 95,
  },
  {
    id: 'css',
    title: 'CSS 3',
    icon: 'simple-icons:css3',
    percentage: 90,
  },
  {
    id: 'git',
    title: 'Git',
    icon: 'simple-icons:git',
    percentage: 60,
  },
  {
    id: 'arch',
    title: 'Arch Lin\xADux',
    icon: 'simple-icons:archlinux',
    percentage: 75,
  },
  {
    id: 'photoshop',
    title: 'Adobe Pho\xADto\xADshop',
    icon: 'simple-icons:adobephotoshop',
    percentage: 70,
  },
  {
    id: 'inkscape',
    title: 'Ink\xADscape',
    icon: 'simple-icons:inkscape',
    percentage: 65,
  },
];
const skillsMachineLearning: SkillItem[] = [
  {
    id: 'keras',
    title: 'Ke\xADras',
    icon: 'simple-icons:keras',
    percentage: 65,
  },
  {
    id: 'numpy',
    title: 'Num\xADpy',
    icon: 'simple-icons:numpy',
    percentage: 75,
  },
  {
    id: 'pandas',
    title: 'Pan\xADdas',
    icon: 'simple-icons:pandas',
    percentage: 80,
  },
  {
    id: 'scikitLearn',
    title: 'sci\xADkit-learn',
    icon: 'simple-icons:scikitlearn',
    percentage: 50,
  },
  {
    id: 'nextjs',
    title: 'Mat\xADplot\xADlib',
    icon: 'carbon:qq-plot',
    percentage: 40,
  },
  {
    id: 'hyperopt',
    title: 'Hy\xADper\xADopt',
    icon: 'cil:graph',
    percentage: 60,
  },
];
const skillsLanguages: SkillItem[] = [
  {
    id: 'brazilianPortuguese',
    icon: 'game-icons:brazil-flag',
    percentage: 100,
  },
  {
    id: 'english',
    icon: 'la:flag-usa',
    percentage: 90,
  },
];

export const skillsData = [
  { id: 'programmingLanguages', data: skillsProgrammingLanguages },
  { id: 'frameworksTech', data: skillsFrameworksTech },
  { id: 'machineLearning', data: skillsMachineLearning },
  { id: 'languages', data: skillsLanguages },
];

interface ProjectItem {
  title: string;
  image: string;
  repoUrl: string;
  deployUrl?: string;
}

export const projectData: ProjectItem[] = [
  {
    title: 'eudr_next',
    image: 'project.png',
    repoUrl: 'https://github.com/wendellavila/eudr_next',
  },
  {
    title: 'mediawiki_pybot',
    image: 'project.png',
    repoUrl: 'https://github.com/wendellavila/mediawiki_pybot',
  },
  {
    title: 'block_game_next',
    image: 'project.png',
    repoUrl: 'https://github.com/wendellavila/block_game_next',
  },
  {
    title: 'jsmp_notebooks',
    image: 'project.png',
    repoUrl: 'https://github.com/wendellavila/jsmp_notebooks',
  },
  {
    title: 'leetcode',
    image: 'project.png',
    repoUrl: 'https://github.com/wendellavila/leetcode',
  },
  {
    title: 'chess_java',
    image: 'project.png',
    repoUrl: 'https://github.com/wendellavila/chess_java',
  },
  {
    title: 'ssg_i18n_next',
    image: 'project.png',
    repoUrl: 'https://github.com/wendellavila/ssg_i18n_next',
  },
  {
    title: 'dashboard_flutter',
    image: 'project.png',
    repoUrl: 'https://github.com/wendellavila/dashboard_flutter',
  },
  {
    title: 'routesapp_flutter',
    image: 'project.png',
    repoUrl: 'https://github.com/wendellavila/routesapp_flutter',
  },
  {
    title: 'starcount_mpi_c',
    image: 'project.png',
    repoUrl: 'https://github.com/wendellavila/starcount_mpi_c',
  },
];
